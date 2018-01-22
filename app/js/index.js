'use strict'

const { ipcRenderer } = require('electron')
const Captcha = require('./services/Captcha')
const captchaCheckUrl = 'https://kyfw.12306.cn/passport/captcha/captcha-check'

let capValueInput = document.getElementById('captcha-values')
let loadCodeImg = () => {
  const requestUrl = 'https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=' + Math.random()
  let codeImage = document.getElementById('js-code-image')
  codeImage.setAttribute('src', requestUrl)
  capValueInput.setAttribute('value', '')
  var touchClicks = document.getElementsByClassName('touclick-hov')
  for(var elem of touchClicks) {
    document.body.removeChild(elem)
  }
}

loadCodeImg()

let codeImage = document.getElementById('js-code-image')

codeImage.addEventListener('click', (event) => {
  let touchClick = document.createElement('div')
  // Values for captcha
  let position = event.clientX - event.srcElement.offsetLeft
  let captchaHelper = new Captcha(position, (event.clientY - parseInt(event.srcElement.offsetTop)))
  let capValue = capValueInput.getAttribute('value')
  position = captchaHelper.codeXY()
  if (capValue == '') {
    capValue = position
  } else {
    capValue = capValue + ',' + position
  }
  capValueInput.setAttribute('value', capValue)

  touchClick.setAttribute('class', 'touclick-hov')
  touchClick.setAttribute('style', 'left: ' + event.clientX + 'px;top: ' + event.clientY + 'px')
  document.body.appendChild(touchClick)
  touchClick.addEventListener('click', (event) => {
    let srcElem = event.srcElement
    document.body.removeChild(srcElem)
  })
})

document.getElementById('login-btn').addEventListener('click', () => {
  let capValueInput = document.getElementById('captcha-values')
  let values = capValueInput.getAttribute('value')
  fetch(captchaCheckUrl, {
    credentials: 'include',
    method:'POST',
    headers: {
      'Accept': 'application/json, text/javascript, */*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: `answer=${encodeURIComponent(values)}&login_site=E&rand=sjrand`
  })
    .then(res => res.json() )
    .then(json => {
      console.log(json)
      if (json.result_code !== '4') {
        loadCodeImg()
      }
    })
})