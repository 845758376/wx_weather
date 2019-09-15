Page({
  data: {
    cityName: "广州"
  },
  getCity: function (event) {

    console.log(event.detail.value);
    this.setData({ cityName: event.detail.value });

  },

  searchWt: function () {
   
    wx.navigateTo({
      url: '/pages/info/info?cityName=' + this.data.cityName
      
    })
  }
})