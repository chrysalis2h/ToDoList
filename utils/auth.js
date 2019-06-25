function getUserInfo() {
  var app = getApp();
  var userInfo = wx.getStorageSync('userInfo');
  if (userInfo) {
    app.globalData.userInfo = userInfo;
  }
  if (app.globalData.userInfo) {
  } else {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.errMsg == 'login:ok') {
          wx.getUserInfo({
            success: userInfoRes => {
              var userInfo = userInfoRes.userInfo;
              wx.setStorageSync('userInfo', userInfo);
              app.globalData.userInfo = userInfo;
              // 测试发送请求
              if (userInfoRes.errMsg == 'getUserInfo:ok') {
                wx.request({
                  url: 'http://todolist.tunnel.qydev.com/wx/td/createSession',
                  data: {
                    code: res.code
                  },
                  method: 'GET',
                  success: function(result) {
                    app.globalData.openId = result.value.openId;
                    app.globalData.sessionId = result.value.sessionId;
                    console.info("requestResult");
                    console.log(result.data);
                  },
                  fail: function (result) {},
                  complete: function (result) {}
                });
              } else {

              }
            }, fail: function (res) {
              console.log("没有授权，userInfo is null");
              console.log(res);
            }
          })
        } else {

        }
      }
    });
  }
}

module.exports = {
  getUserInfo: getUserInfo
}
