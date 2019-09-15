//引入工具类
var util = require("../../utils/util.js");

Page({
  data: {},
  onLoad: function (options) {
    //console.log(options);
    var _this = this;
    // 页面初始化 options为页面跳转所带来的参数
    util.getWeatherData(options.cityName, function (wd) {
      _this.setData({ wd: wd });

    });
  }
})