import { app, BrowserWindow, dialog } from "electron";
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 1024,
    minHeight: 600,
    minWidth: 1024,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    app.quit();
  });

  mainWindow.on("close", (e: Electron.Event) => {
    const options = {
      type: "question",
      buttons: ["예", "아니오", "최소화"],
      defaultId: 1,
      message: "정말로 종료하시겠습니까?",
    };

    const response = dialog.showMessageBoxSync(mainWindow, options);

    if (response === 1) {
      e.preventDefault();
    } else if (response === 2) {
      mainWindow.hide();
      e.preventDefault();
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  } else {
    BrowserWindow.getAllWindows()[0].show();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
