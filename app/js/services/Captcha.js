class Captcha {
  constructor (offsetLeft, offsetTop) {
    this.offsetLeft = offsetLeft
    this.offsetTop = offsetTop
  }

  codeXY () {
    let offsetsX
    let offsetsY
    if (this.offsetTop >= 40 && this.offsetTop < 100) {
      if (this.offsetLeft < 70) {
        offsetsY = 46
        offsetsX = 42
      } else if (this.offsetLeft < 140) {
        offsetsY = 46
        offsetsX = 105
      } else if (this.offsetLeft < 210) {
        offsetsY = 45
        offsetsX = 184
      } else if (this.offsetLeft < 280) {
        offsetsY = 48
        offsetsX = 256
      }
    } else if (this.offsetTop > 100) {
      if (this.offsetLeft < 70) {
        offsetsY = 114
        offsetsX = 31
      } else if (this.offsetLeft < 140) {
        offsetsY = 112
        offsetsX = 115
      } else if (this.offsetLeft < 210) {
        offsetsY = 114
        offsetsX = 181
      } else if (this.offsetLeft < 280) {
        offsetsY = 111
        offsetsX = 252
      }
    }
    return offsetsX + ',' + offsetsY
  }
}

module.exports = Captcha