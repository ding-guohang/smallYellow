const util = require('../../utils/util.js')

Page({
  data: {
    diaries: [],
    showInput: false,
    isAddBtnPlain: true,
    currentDiary: {
      date: null,
      content: ""
    },
    toAddDiary: 'to add diary',
  },
  onLoad: function () {
    this.refreshDiaries()
  },
  onPullDownRefresh: function () {
    this.refreshDiaries()
  },
  addDiary: function () {
    if (this.data["showInput"]) {
      // console.log("get input: ", this.data['currentDiary'])
      if (null != this.data['currentDiary']) {
        this.data['diaries'].push(this.data['currentDiary'])
        wx.setStorageSync('diaries', this.data['diaries'])
      }
      this.setData({
        showInput: false,
        isAddBtnPlain: true,
        toAddDiary: 'to add diary',
        currentDiary: null
      })
      this.refreshDiaries()
    } else {
      this.setData({
        showInput: true,
        isAddBtnPlain: false,
        toAddDiary: 'submit'
      })
    }
  },
  saveCurrentDiary: function (e) {
    this.setData({
      currentDiary: {
        date: util.formatTime(new Date()),
        content: e.detail.value
      }
    })
  },
  refreshDiaries: function () {
    this.setData({
      diaries: wx.getStorageSync('diaries') || []
    })
  },
  clearDiaries: function () {
    wx.setStorageSync('diaries', [])
    this.refreshDiaries()
  }
})