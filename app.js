//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.info(res);
        if (res.errMsg == 'login:ok') {
          wx.request({
            url: 'http://todolist.tunnel.qydev.com/wx/td/createSession',
            data: {
              code: res.code
            },
            method: 'GET',
            success: function(result) {
              console.info("requestResult")
              console.log(result.data);
              // this.setData({
              //   sessionId: result.data.sessionId
              // });
            },
            fail: function (result) {},
            complete: function (result) {}
          });
        } else {

        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.info(res);
              // console.info(JSON.stringify(res));
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              // 测试发送请求
              if (res.errMsg == '1getUserInfo:ok') {
                wx.request({
                  url: 'http://todolist.tunnel.qydev.com/wx/td/checkUserInfo',
                  data: {
                    code: res.code
                  },
                  method: 'POST',
                  success: function (result) {
                    console.log(result);
                  },
                  fail: function (result) { },
                  complete: function (result) { }
                });
              } else {

              }

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(options) {
    var appInstance = getApp();
    /**
     * path:
     * query
     * scene
     * shareTicket
     * referrerInfo
     * referrerInfo.appId
     * referrerInfo.extraData
     */
  },
  onHide: function(options) {
    console.log("this is onHide");
  },
  onError: function(options) {
    console.log("this is onError");
  },
  onPageNotFound: function(options) {
    console.log("this is OnPageNotFound");
    /**
     * path
     * query
     * isEntryPage
     */
  },
  globalData: {
    userInfo: null,
    info: "this is a global data",
    tabIndex: 0,
    sessionId: null
  }
})