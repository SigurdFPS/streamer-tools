import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let loadingWindow: BrowserWindow | null = null;
let mainWindow: BrowserWindow | null = null;

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  loadingWindow.loadURL(`file://${__dirname}/index.html#/loading`);

  loadingWindow.once('ready-to-show', () => {
    loadingWindow?.show();
  });
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });
}

app.whenReady().then(() => {
  createLoadingWindow();

  // Simulate initialization delay before showing main app
  setTimeout(() => {
    loadingWindow?.close();
    createMainWindow();
  }, 2500); // Adjust time later when handshake logic is implemented
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});