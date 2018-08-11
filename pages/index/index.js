//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var curTarget = this;
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        console.info("success");
        if(res.errMsg == 'getUserInfo:ok'){
          curTarget.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }else{

        }
      },
      fail: function(res) {
        console.info("fail");
      },
      complete: function(res) {
        console.info("complete");
      },
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
