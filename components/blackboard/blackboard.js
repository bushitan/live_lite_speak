// components/xx_cover_news/xx_cover_news.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {        
        // 改变颜色
        title: {
            type: String,
            value: "",
        },
        content: {
            type: String,
            value: "",
        },
        color: {
            type: String,
            value: "#34362e",
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
