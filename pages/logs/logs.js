//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  clearLogs: function () {
    wx.setStorageSync('logs', [])
    this.setData({
      logs: wx.getStorageSync('logs') || []
    })
  }
})
