const { app, BrowserWindow } = require("electron")
const path = require("path")


let ablak

function ablakLetrehozas() {
    ablak = new BrowserWindow({
        width: 820,
        height: 750
    })
    ablak.webContents.openDevTools()
    ablak.removeMenu()
    ablak.loadFile(path.join(__dirname, "public/index.html"))
}

app.on("ready", () => ablakLetrehozas())