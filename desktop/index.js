import electron from "electron"
import path from "node:path"
const { app, BrowserWindow } = electron

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
