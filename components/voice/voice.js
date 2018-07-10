// components/xx_cover_news/xx_cover_news.js


            const innerAudioContext = wx.createInnerAudioContext()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: "",
            // value: "row-reverse",
        },
        list: {
            type: Array,
            value: [
                // {
                //     id: "", 
                //     logo: "../../images/my_select.png", 
                //     url: "../../images/voice.mp3", 
                // },
            ],
            //   observer: '_changeLevel',
        },
        direction: {
            type: String,
            value: "row",
            // value: "row-reverse",
        },
        select: {
            type: String,
            value: "",
            // value: "row-reverse",
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
        click(e) {
            // http://img.12xiong.top/help_click.mp3
            var index = e.currentTarget.dataset.index
            var url = this.data.list[index].url
            var id = this.data.list[index].id
            

            if( this.data.select == id){
                console.log(111)
                innerAudioContext.stop()
            }

            innerAudioContext.src = url
            
            innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            innerAudioContext.onError((res) => {
                console.log(res.errMsg)
                console.log(res.errCode)
            })
            innerAudioContext.play()

            console.log(e.currentTarget.dataset.index)
            this.triggerEvent('click', id);
        },
    }
})
