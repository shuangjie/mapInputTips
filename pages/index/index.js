//  index.js
Page({
  data: {
    tips: {},
    location: '-1,-1',
    keywords:''
  },
  onLoad: function (options) {

  },
  onShow: function (data) {
    if(data){
      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];
      if (currPage.data.keywords == "") {
        console.log('没有传值');
      } else {
        this.setData({//将携带的参数赋值
          keywords: currPage.data.keywords,
          location: currPage.data.location
        });
      }
      console.log(data);
    }
    
  }
})