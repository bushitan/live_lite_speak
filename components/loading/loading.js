// components/xx_cover_news/xx_cover_news.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {        
        more: {
            type: Boolean,
            value: !false,
        },
    },

  /**
   * 组件的初始数据
   */
    data: {
        // isMore:!false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 改变
      _changeMode(newVal, oldVal) {
          if (this.data.mode == "")
            this.setData({
                mode: this.data.MODE_MENU
            })
    },

    /**
     * return: 点击列表的index
     */
    click(e) {
        this.setData({
            initindex: e.currentTarget.dataset.index
        })
        this.triggerEvent('click', e.currentTarget.dataset.index);
    },
  }
})
