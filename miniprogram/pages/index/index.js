//index.js

const app = getApp()
const cloud = require('wx-server-sdk')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    melonList: [
      {
        melonId: "1",
        title: "第一个瓜",
        content: "好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜，好厉害的瓜"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '瓜田',
    })
  },

  showDialog: function () {
    console.log('>>>>show dialog')
  },

  requestBackend: function () {
    console.log('request')
    cloud.callFunction({
      name: 'melons',
      complete: console.log 
    })
  }

})
