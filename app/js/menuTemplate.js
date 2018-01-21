const electron = require('electron')

const { app, shell, ipcMain } = electron

const I18n = require('./I18n')

const i18n = new I18n('zh-cn')
let menuTemplate = function () {
  return [
    {
      label: i18n.t('application'),
      submenu: [
        {
          label: i18n.t('about_app'),
          click: () => {
            ipcMain.emit('show-train-list-window-event')
          }
        },
        {
          label: i18n.t('reload'),
          accelerator: 'CmdOrCtrl+R',
          click: (item, focusedWindow) => {
            focusedWindow.reload()
          }
        },
        {
          label: i18n.t('help'),
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
      label: i18n.t('view'),
      submenu: [
        {
          label: i18n.t('show_train_list'),
          click: () => {
            ipcMain.emit('show-train-search-window')
          }
        },
        {
          label: i18n.t('toggle_debug_tool'),
          click: (item, focusedWindow) => {
            focusedWindow.webContents.toggleDevTools()
          }
        }
      ]
    }
  ]

}

module.exports = menuTemplate