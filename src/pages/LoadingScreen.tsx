import React from "react";
import Spinner from "../components/Spinner";

export default function LoadingScreen() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-transparent">
      <div className="flex flex-col items-center space-y-4">
        <Spinner
          childSize="h-6 w-6"
          className="bg-gradient-to-bl from-black to-blue-400"
          outerSize="h-8 w-8"
        />
        <p className="text-white text-lg animate-pulse">Initializing Streamer Tools...</p>
      </div>
    </div>
  );
}