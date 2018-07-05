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
            value: [
                { url: "http://qiniu.308308.com/hx_319_2018_01_23_14_58_04.jpg" },
                { url: "http://www.rosin-china.com/_m/uploads/u/34132/%E6%9D%BE%E9%A6%99%E6%96%87%E7%AB%A0%E5%9B%BE/2017%E6%9D%BE%E9%A6%99%E7%9B%98%E7%82%B9a.jpg" },
                { url: "http://www.furfurals.com/_m/uploads/u/34132/%E7%B3%A0%E9%86%9B%E7%BD%91/%E7%B3%A0%E9%86%9B%E6%96%87%E7%AB%A0%E9%A2%98%E5%9B%BE/2016%E4%B8%A4%E7%B3%A0%E5%90%8D%E5%BD%95%EF%BC%88%E5%B0%8F%E7%A8%8B%E5%BA%8F%EF%BC%89a.jpg" },
            ],
            observer: '_changeList',
        },

  },

  /**
   * 组件的初始数据
   */
    data: {

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
