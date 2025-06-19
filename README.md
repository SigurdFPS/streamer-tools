# streamer-tools
All in one solution for streamers

# /MainApp
├── public/
│   └── logo.svg
├── src/
│   ├── modules/
│   │   ├── handshake.ts
│   │   ├── tokenManager.ts
│   │   └── runtimeValidator.ts
│   ├── components/
│   │   ├── AppLoader.tsx
│   │   ├── LockedModal.tsx
│   │   └── NavBar.tsx ✅
│   ├── pages/
│   │   ├── index.css ✅             # Home / Dashboard
│   │   ├── login.tsx ✅
│   │   ├── index.tsx
│   │   ├── register.tsx
│   │   └── apps/
│   │       ├── App1.js
│   │       ├── App2.js
|   |       └── App3.secured.js
│   ├── lib/
│   │   └── utils.ts ✅
|   ├── main.tsx ✅
│   └── App.tsx ✅                   # Main layout wrapper
├── tailwind.config.js ✅
├── postcss.config.js
├── index.html (or bundled via Electron)
├── main.ts (Electron main process) ✅
├── preload.ts
└── package.json ✅ (partially)
