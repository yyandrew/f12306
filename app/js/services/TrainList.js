const electron = require('electron')
const { ipcMain } = require('electron')
const fetch = require('node-fetch')

class TrainList {
  constructor() {
    this.trainListUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryZ?leftTicketDTO.train_date=2018-01-26&leftTicketDTO.from_station=SHH&leftTicketDTO.to_station=WHN&purpose_codes=ADULT'
  }

  fetchTrainPromise () {
    fetch(this.trainListUrl)
      .then((response) => {
        response.json()
          .then((trains) => {
            if (trains['httpstatus'] == 200) {
              let trainsList = trains['data']['result']
              trainsList.forEach( function (train) {
                const trainArray = train.split('|')
                const trainNum = trainArray[3]
                let trainTr = document.createElement('tr')
                let trainNumTd = document.createElement('td')
                let trainTextNode = document.createTextNode(trainNum)
                trainNumTd.appendChild(trainTextNode)
                let startAtTd = document.createElement('td')
                let startAtTextNode = document.createTextNode(trainArray[8])
                startAtTd.appendChild(startAtTextNode)
                trainTr.appendChild(trainNumTd)
                trainTr.appendChild(startAtTd)
                document.getElementById('train-list').appendChild(trainTr)
              })
            }
          })
      })
  }
}

module.exports = TrainList
