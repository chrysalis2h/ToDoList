// pages/todolist/todolistlogs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    happyFlag: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var curTarget = this;
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        console.info("success");
        if (res.errMsg == 'getUserInfo:ok') {
          curTarget.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        } else {

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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindChangeLike: function(){
    console.info("changeLike");
    var like = true;
    if(this.data.happyFlag == null || !this.data.happyFlag){
      like = true;
    }else if(this.data.happyFlag){
      like = false;
    }
    this.setData({
      happyFlag : like
    });
    console.info(this.data.happyFlag);
  }
})