const app = getApp()
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info("onLoad-list");
    console.info(this.data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info("onReady-list");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info(getCurrentPages());
    console.info("onShow-list");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.info("onHide-list");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.info("onUnload-list");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.info("onPullDownRefresh-list");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.info("onReachBottom-list");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.info("onShareAppMessage-list");
  },
  onTabItemTap(item) {
    this.setData({
      tabIndex: item.index,
      tabItem: item
    });
    console.log("onTabItemTap" + item.index)
    console.log("onTabItemTap" + item.pagePath)
    console.log("onTabItemTap" + item.text)
  },
  data: {
    tabIndex: 0,
    tabIndex: {},
    currentDate: '2018-8-6 22:06:20',
    items: [
      {
        datetime: '2018-8-6 22:06:20',
        todoTaskList: [
          { value: '1', name: '今天写100个字' },
          { value: '2', name: '今天听100首歌' },
          { value: '3', name: '今天写100行代码' },
          { value: '4', name: '今天背100个单词' },
          { value: '5', name: '今天看100页书' },
          { value: '6', name: '今天吃100粒米' }
        ]
      },
      {
        datetime: '2018-8-5 22:06:20',
        todoTaskList: [
          { value: '7', name: '85今天写100个字' },
          { value: '8', name: '85今天听100首歌' },
          { value: '9', name: '85今天写100行代码' },
          { value: '10', name: '85今天背100个单词' },
          { value: '11', name: '85今天看100页书' },
          { value: '12', name: '85今天吃100粒米' }
        ]
      }
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var items = this.data.items, values = e.detail.value;
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      for (var tNum = 0, lenT = items[i].todoTaskList.length; tNum < lenT; tNum++){
        items[i].todoTaskList[tNum].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].todoTaskList[tNum].value == values[j]) {
            items[i].todoTaskList[tNum].checked = true;
            break
          }
        }
      }
    }

    this.setData({
      items: items
    })
  }
})
