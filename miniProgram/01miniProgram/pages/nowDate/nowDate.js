// pages/nowDate/nowDate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowDate:new Date().toLocaleString(),
    num1:40,
    list1:[1,2,3,4,5],
    num2:25.5555,
    count:0
  },
  /* 方法 */
  click1(){
    this.setData({
      num1: this.data.num1+10
    })
  },
  increment(){
    console.log('increment')
    this.setData({
      count:this.data.count+1
    })
  },
  decrement(){
    console.log('decrement')
    this.setData({
      count:this.data.count-1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowDate: new Date().toLocaleString()
      })
    },1000)
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

  },
  
})