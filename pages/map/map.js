//  map.js
var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');
Page({
  data: {
    tips: {},
    keywords:''
  },
  onLoad: function (e) {
    if (e && e.keywords) {
      this.setData({
        keywords: e.keywords
      })
    }
  },
  bindInput: function (e) {
    var that = this;
    var keywords = e.detail.value;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getInputtips({
      keywords: keywords,
      success: function (data) {
        if (data && data.tips) {
          var first = { 'id': '0', 'name': keywords, 'district': '自定义地点', 'address': '', 'location': '-1,-1' };//自定义地点
          that.setData({
            tips: [first].concat(data.tips)
          });
          console.log(that.data.tips)
        }
      }
    })
  },
  bindSelect: function (e) {
    var keywords = e.currentTarget.dataset.keywords;
    var location = e.currentTarget.dataset.location || '-1,-1'; //无坐标记录 -1，-1
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      keywords: keywords,
      location: location
    });
    wx.navigateBack({
      delta: 1
    })
  }
})