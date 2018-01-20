'use strict'

const { ipcRenderer } = require('electron')

let clearInfoButton = document.getElementById('clear-info-button')
console.log(clearInfoButton)
clearInfoButton.addEventListener('click', () => {
  ipcRenderer.send('clear-info')
})

let showTrainListWindowButton = document.getElementById('show-tray-window')

showTrainListWindowButton.addEventListener('click', () => {
  ipcRenderer.send('show-train-list-window')
})