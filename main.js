// 🔁 Auto-reload for development (optional)
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, 
      // Optional for simpler access in renderer
    }
  });

  win.loadFile('src/index.html');

  // Optional: Open DevTools automatically
  win.webContents.openDevTools();
}

// Create window when app is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Re-create window on macOS when app is re-activated
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
