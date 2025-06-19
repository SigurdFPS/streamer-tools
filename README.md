# streamer-tools
All in one solution for streamers

# /MainApp
├── public/
│   └── logo.svg
├── src/
│   ├── components/
│   │   └── NavBar.tsx
│   ├── pages/
│   │   ├── index.tsx             # Home / Dashboard
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── apps/
│   │       ├── App1.tsx
│   │       └── App2.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── App.tsx                   # Main layout wrapper
├── tailwind.config.js
├── postcss.config.js
├── index.html (or bundled via Electron)
├── main.ts (Electron main process)
├── preload.ts
└── package.json
