import React from "react";

interface LockedModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function LockedModal({ visible, onClose }: LockedModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-md bg-gray-900 text-white rounded-lg p-6 border border-blue-500 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Unlock This Tool</h2>
        <p className="text-gray-400 mb-4">
          This application is available for premium users only. You can unlock it by subscribing or redeeming a license code.
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
          >
            Close
          </button>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm">
              Subscribe
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md text-sm">
              Redeem Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}