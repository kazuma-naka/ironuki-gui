import {
  app,
  BrowserWindow,
  clipboard,
  ipcMain,
  globalShortcut,
  screen,
} from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { ColorCapture } from "./ColorCapture.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let colorWindow;
let isPaused = false;
let colorInterval;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = width / 2;
  const windowHeight = height / 2;
  const centeredX = (width - windowWidth) / 2;
  const centeredY = (height - windowHeight) / 2;

  colorWindow = new BrowserWindow({
    width: 200,
    height: 120,
    frame: false,
    transparent: false,
    alwaysOnTop: true,
    skipTaskbar: false,
    resizable: true,
    movable: true,
    x: centeredX,
    y: centeredY,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  colorWindow.loadFile("index.html");

  colorWindow.on("resize", () => {
    const [width, height] = colorWindow.getSize();
    colorWindow.webContents.send("window-resize", { width, height });
  });
}

function startColorCapture() {
  const colorCapture = new ColorCapture();

  colorInterval = setInterval(async () => {
    if (!isPaused) {
      const colorData = await colorCapture.getColorUnderMouse();
      if (colorData) {
        colorWindow.webContents.send("color-data", colorData);
      }
    }
  }, 100);
}

function stopColorCapture() {
  clearInterval(colorInterval);
}

app.whenReady().then(() => {
  createWindow();
  startColorCapture();

  globalShortcut.register("Ctrl+Shift+P", () => {
    if (!isPaused) {
      console.log("Pausing color capture...");
      isPaused = true;
      stopColorCapture();
    }
  });

  globalShortcut.register("Ctrl+Shift+S", () => {
    if (isPaused) {
      console.log("Resuming color capture...");
      isPaused = false;
      startColorCapture();
    }
  });
});

ipcMain.on("copy-color", (_, hexColor) => {
  clipboard.writeText(hexColor);
  console.log(`Color ${hexColor} copied to clipboard!`);
});


ipcMain.on("close-window", () => {
  colorWindow.close();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
