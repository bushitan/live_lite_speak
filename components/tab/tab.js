// components/xx_cover_news/xx_cover_news.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {        
        // 改变颜色
        mode: {
            type: String,
            value: "menu",
            observer: '_changeMode',
        },
        list: {
            type: Array,
            value:[],
            //  [
            //     { name: "头条" },
            //     { name: "短信" },
            //     { name: "评述" },
            //     { name: "数据" },
            //     { name: "月刊" },                
            // ],
            observer: '_changeList',
        },
        initindex: {
            type: String,
            value: 0,
            observer: '_changeIndex',
        },
        // 改变颜色
        colorselect: {
            type: String,
            value: "#187bbf",
        },
        colorunselect: {
            type: String,
            value: "#000",
        },
        // 改变字体大小
        sizeselect: {
            type: String,
            value: "11pt",
        },
        sizeunselect: {
            type: String,
            value: "11pt",
        },
  },

  /**
   * 组件的初始数据
   */
    data: {
        MODE_SCROLL: "scroll",
        MODE_MENU: "menu",
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
