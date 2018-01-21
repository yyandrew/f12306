const electron = require('electron')

const { app, shell, ipcMain } = electron

let menuTemplate = function () {
  return [
    {
      label: 'Application',
      submenu: [
        {
          label: 'About App',
          click: () => {
            ipcMain.emit('show-train-list-window-event')
          }
        },
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: (item, focusedWindow) => {
            focusedWindow.reload()
          }
        },
        {
          label: 'Edit',
          submenu: [
            {
              label: 'Undo',
              accelerator: 'CmdOrCtrl+Z'
            }
          ]
        },
        {
          label: 'Help',
          submenu: [
            {
              label: 'View Licence',
              click: () => {
                shell.openExternal('https://github.com/DmytroVasin/TimeTracker/blob/master/LICENSE')
              }
            },
            { type: 'separator' },
            { label: 'Version 1.0.0-alpha.6', enabled: 'FALSE' }
          ]
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: '查询车次',
          click: () => {
            ipcMain.send('show-train-search-window')
          }
        },
        {
          label: 'Toggle debug tool',
          click: (item, focusedWindow) => {
            focusedWindow.webContents.toggleDevTools()
          }
        }
      ]
    }
  ]

}

module.exports = menuTemplate