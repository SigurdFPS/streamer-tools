import React from 'react';
import AppLoader from '../components/AppLoader';

export default function HomePage() {
  return (
    <div className="fade-in">
      <div className="px-6 pt-10 pb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Your Tools</h1>
        <p className="text-gray-400 text-sm">
          Launch your available applications below. Premium tools will be unlocked after subscription or license redemption.
        </p>
      </div>
      <AppLoader />
    </div>
  );
}