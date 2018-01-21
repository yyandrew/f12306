const path = require('path')
const electron = require('electron')
const fs = require('fs')
let loadedLanguage;

let app = electron.app ? electron.app : clevtron.remote.app

class I18n {
  constructor (locale) {
    this.locale = locale

    if(fs.existsSync(path.join(__dirname, '/data/' + this.locale + '.js'))) {
      this.loadedLanguage = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/' + this.locale + '.js'), 'utf-8'))
    } else {
      this.loadedLanguage = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/' + 'en.js'), 'utf-8'))
    }
  }

  t(phrase) {
    let translation = this.loadedLanguage[phrase]
    if (translation === undefined) {
      translation = phrase
    }
  
    return translation
  }
}

module.exports = I18n