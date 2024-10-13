// eslint-disable-next-line no-undef
const { contextBridge, ipcRenderer } = require("electron");

// Expose the API for safe IPC communication
contextBridge.exposeInMainWorld("api", {
  getColorData: (callback) =>
    ipcRenderer.on("color-data", (event, colorData) => callback(colorData)),
  copyColor: (hexColor) => ipcRenderer.send("copy-color", hexColor),
  closeWindow: () => ipcRenderer.send("close-window"), // Close window
  onWindowResize: (callback) =>
    ipcRenderer.on("window-resize", (event, newSize) => callback(newSize)), // Window resize event
});
