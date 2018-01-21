const path = require('path')

const { BrowserWindow } = require('electron')
const Positioner = require('electron-positioner')
const electron = require('electron')
const { Menu } =  electron

class TrainListWindow {
  constructor() {
    let htmlPath = 'file://' + path.join(__dirname, '../..') + '/pages/train_list_page.html'

    this.window = new BrowserWindow({
      show: false,
      height: 400,
      width: 800,
      frame: true,
      backgroundColor: '#E4ECEF',
      resizable: false
    })

    this.window.loadURL(htmlPath)

    this.window.on('show', () => {
      let positioner = new Positioner(this.window)
      positioner.move('center')
    })

    this.window.on('blur', () => {
      this.window.hide()
    })
  }
}

module.exports = TrainListWindow