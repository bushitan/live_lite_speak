// components/xx_cover_news/xx_cover_news.js
const innerAudioContext = wx.createInnerAudioContext()
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
        // 改变颜色
        url: {
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
            // http://img.12xiong.top/help_click.mp3
            var url = e.currentTarget.dataset.url
            // var url = this.data.list[index].url
            // var id = this.data.list[index].id


            // if (this.data.select == id) {
            //     // console.log(111)
            //     innerAudioContext.stop()
            // }

            innerAudioContext.src = url

            innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            innerAudioContext.onError((res) => {
                console.log(res.errMsg)
                console.log(res.errCode)
            })
            innerAudioContext.play()

            // console.log(e.currentTarget.dataset.index)
            // this.triggerEvent('click', id);
        },
    
        // play(e){
        //     var url = e.currentTarget.dataset.url
        // },
    }
})
