// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'郑州',
    weathers:[]
  },
  //函数
  getUserInfo(event){
    console.log(event)
  },
  click1(){//发送请求（天气）
    if(this.data.city == '') return console.log('输入正确城市名称')
    wx.request({
      url:`http://wthrcdn.etouch.cn/weather_mini?city=${this.data.city}`,
      success:(res)=>{
        // console.log(this.data.weathers)
        // console.log(typeof(this.data.city))
        // console.log(res)
        this.setData({
          weathers : res.data.data.forecast
        })
      },
      fail:(err)=>{
        console.log('请求失败')
      }
    })
  },
  click2(){
    this.setData({
      city:''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.click1()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})