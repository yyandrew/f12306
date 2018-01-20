'use strict'

const { ipcRenderer } = require('electron')

let showTrainListWindowButton = document.getElementById('show-tray-window')

showTrainListWindowButton.addEventListener('click', () => {
  ipcRenderer.send('show-train-list-window')
})