const app = getApp()
Page({
  data: {
    "items": [
      {
        datetime: '2018-8-6 22:06:20',
        todoTaskList: [
          { id: '1', detail: '100个字' , result: 0},
          { id: '2', detail: '100首歌' , result: 0},
          { id: '3', detail: '100行代码' , result: 0},
          { id: '4', detail: '100个单词' , result: 0},
          { id: '5', detail: '100页书' , result: 0},
          { id: '6', detail: '100粒米' , result: 0}
        ]
      },
      {
        datetime: '2018-8-5 22:06:20',
        todoTaskList: [
          { id: '7', detail: '100个字' , result: 0},
          { id: '8', detail: '100首歌' , result: 0},
          { id: '9', detail: '100行代码' , result: 0},
          { id: '10', detail: '100个单词' , result: 0},
          { id: '11', detail: '100页书' , result: 0},
          { id: '12', detail: '100粒米' , result: 0}
        ]
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 临时注释掉
    return;
    var that = this;
    wx.request({
      url: 'http://todolist.tunnel.qydev.com/pupupuha/todoDetail/list',
      method: 'GET',
      success: function (result) {
        if (result.statusCode == 200) {
          var dataResult = result.data;
          if (dataResult.code == 200) {
            that.setData({
              items: dataResult.value
            });
          } else {
            console.info("fail");
          }
        } else {
          console.info("send request error");
        }
      },
      fail: function (result) { },
      complete: function (result) { }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info("list.js" + "onReady-list");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info("list.js" + getCurrentPages());
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.info("list.js" + "onHide-list");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.info("list.js" + "onUnload-list");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.info("list.js" + "onPullDownRefresh-list");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.info("list.js" + "onReachBottom-list");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.info("list.js" + "onShareAppMessage-list");
  },
  toggleTodoStatus: function (e) {
    var id = e.currentTarget.dataset.id;
    var result = e.currentTarget.dataset.status == "1" ? "0" : "1";
    // 下面的临时使用
    var thatItems = this.data.items;
    for (var i = 0; i < thatItems.length; i++) {
      for (var j = 0; j < thatItems[i].todoTaskList.length; j++) {
        if (id == thatItems[i].todoTaskList[j].id) {
          thatItems[i].todoTaskList[j].checked = (result == "0" ? false : true);
          thatItems[i].todoTaskList[j].result = result;
          break;
        }
      }
    }
    this.setData({
      items: thatItems
    });
    return;
    // 下面的临时使用

    var that = this;
    wx.request({
      url: 'http://todolist.tunnel.qydev.com/pupupuha/todoDetail',
      method: 'PUT',
      data: {
        id: id,
        result: result
      },
      success: function (response) {
        if (response.statusCode == 200) {
          var dataResponse = response.data;
          if (dataResponse.code == 200) {

            var thatItems = that.data.items;
            for (var i = 0; i < thatItems.length; i++) {
              for (var j = 0; j < thatItems[i].todoTaskList.length; j++) {
                if (id == thatItems[i].todoTaskList[j].id) {
                  thatItems[i].todoTaskList[j].checked = (result == "0" ? false : true);
                  thatItems[i].todoTaskList[j].result = result;
                  break;
                }
              }
            }
            that.setData({
              items: thatItems
            });
          } else {
            console.info("fail");
          }
        } else {
          console.info("send request error");
        }
      },
      fail: function (response) { },
      complete: function (response) { }
    });
  }
})
