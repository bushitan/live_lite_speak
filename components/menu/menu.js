// components/xx_cover_news/xx_cover_news.js
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
        list: [
    { url: "/pages/logs/logs", icon: '../../images/subject_1.png', des: "专区",style:"green" },
    { url: "/pages/logs/logs", icon: '../../images/subject_2.png', des: "榜单", style: "yellow" },
    { url: "/pages/logs/logs", icon: '../../images/subject_3.png', des: "分类", style: "orange" },
    { url: "/pages/logs/logs", icon: '../../images/subject_4.png', des: "书架", style: "blue" },     
        ],    
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
