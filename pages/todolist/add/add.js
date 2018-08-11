// pages/todolist/todolistlogs.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.info("onLoad-add");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.info("onReady-add");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.info("onShow-add");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.info("onHide-add");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.info("onUnload-add");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.info("onPullDownRefresh-add");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.info("onReachBottom-add");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.info("onShareAppMessage-add");
  },
  /**
   * 页面的初始数据
   */
  data: {
    todoTask: {
      title: null,
      detail: null,
      level: "2"
    }
  },
  formSubmit: function(e) {
    console.log(e.detail.valu-adde);
  },
  formReset: function(){
    this.setData({
      todoTask: {
        title: null,
        detail: null,
        level: "2"
      }
    })
    
  }

})