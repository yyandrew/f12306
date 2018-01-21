'use strict'

const { ipcRenderer } = require('electron')

let loadCodeImg = () => {
  console.log('show code image')
  const requestUrl = 'https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=' + Math.random()
  let codeImage = document.getElementById('js-code-image')
  codeImage.setAttribute('src', requestUrl)
}

loadCodeImg()