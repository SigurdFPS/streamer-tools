import React, { Suspense, useEffect, useState } from "react";
import LockedModal from "./LockedModal";

type AppModule = {
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  locked: boolean;
};

export default function AppLoader() {
  const [apps, setApps] = useState<AppModule[]>([]);
  const [showLockedModal, setShowLockedModal] = useState(false);

  useEffect(() => {
    const loadedApps: AppModule[] = [
      {
        name: "App 1",
        component: React.lazy(() => import("../pages/apps/App1")),
        locked: false,
      },
      {
        name: "App 2",
        component: React.lazy(() => import("../pages/apps/App2")),
        locked: false,
      },
      {
        name: "App 3 (Premium)",
        component: React.lazy(() => import("../pages/apps/App3.secured")),
        locked: true,
      },
    ];

    setApps(loadedApps);
  }, []);

  const handleLockedClick = () => {
    setShowLockedModal(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
      {apps.map((app, index) =>
        app.locked ? (
          <div
            key={index}
            onClick={handleLockedClick}
            className="cursor-pointer rounded-lg border border-gray-700 p-6 text-center hover:border-blue-400 transition"
          >
            <p className="text-gray-400 text-sm mb-1">🔒 Locked App</p>
            <h3 className="text-lg font-semibold text-white">{app.name}</h3>
          </div>
        ) : (
          <Suspense fallback={<div className="text-gray-400">Loading {app.name}...</div>} key={index}>
            <div className="rounded-lg border border-gray-700 p-6">
              <app.component />
            </div>
          </Suspense>
        )
      )}
      <LockedModal visible={showLockedModal} onClose={() => setShowLockedModal(false)} />
    </div>
  );
}