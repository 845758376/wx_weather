//引入工具类
var util = require("../../utils/util.js");

// pages/index/index.js
Page({
  data:{
		bgurl:'https://cth-1259380157.cos.ap-chengdu.myqcloud.com/weather/bg2.jpg'
  },
  onLoad:function(options){
    var _this = this;
    // 页面初始化 options为页面跳转所带来的参数
    util.getWeatherData(null , function(wd){
      _this.setData({wd:wd});
      _this.setData({desc:wd.desc});
    });

 
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})