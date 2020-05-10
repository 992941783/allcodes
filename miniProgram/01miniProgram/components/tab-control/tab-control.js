// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    index:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem(event){
      console.log(event)
      this.setData({
        index:event.target.dataset.index
      })
    }
  }
})
