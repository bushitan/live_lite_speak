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
        left_circle_transform: 'rotate(-135deg)',
        left_circle_transition: 'all 0.5s linear',
        right_circle_transform: 'rotate(-135deg)',
        right_circle_transition: 'all 0.5s linear',
    },
    ready(){
        let _this = this;
        setTimeout(function () {
            _this.setProgressbar(0, 40)
            setTimeout(function () {
                _this.setProgressbar(40, 60)
                setTimeout(function () {
                    _this.setProgressbar(60, 40)
                    setTimeout(function () { _this.setProgressbar(40, 0) }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    
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




        /**
  *设置进度条的变化
  *@param {number} oldPercent    进度条改变之前的半分比
  *@param {number} curPercent    进度条当前要设置的值 
  */
        setProgressbar: function (oldPercent, curPercent) {
            let speed = 1;    //改变50%进度所需的时间，单位秒   
            let time = 0;    //进度条改变的时间
            let deg = 0;     //进度条改变的角度
            let _this = this;
            if (oldPercent > 50) {//原来进度大于50
                if (curPercent > 50) {
                    //设置左边的进度
                    time = Math.abs(curPercent - oldPercent) / 50 * speed;
                    deg = curPercent / 50 * 180 - 135;
                    _this.setData({
                        left_circle_transform: 'rotate(' + deg + 'deg)',
                        left_circle_transition: 'all ' + time + 's linear'
                    })
                } else {
                    //设置左边的进度
                    time = (oldPercent - 50) / 50 * speed;
                    deg = - 135;
                    _this.setData({
                        left_circle_transform: 'rotate(' + deg + 'deg)',
                        left_circle_transition: 'all ' + time + 's linear'
                    })
                    //延时设置右边进度条的改变
                    setTimeout(function () {
                        time = (50 - curPercent) / 50;
                        deg = curPercent / 50 * 180 - 135;
                        _this.setData({
                            right_circle_transform: 'rotate(' + deg + 'deg)',
                            right_circle_transition: 'all ' + time + 's linear'
                        })
                    }, Math.floor(time * 1000));
                }
            } else {//原来进度小于50时
                if (curPercent > 50) {
                    //设置右边的进度
                    time = (50 - oldPercent) / 50 * speed;
                    deg = 45;
                    _this.setData({
                        right_circle_transform: 'rotate(' + deg + 'deg)',
                        right_circle_transition: 'all ' + time + 's linear'
                    })
                    //延时设置左边进度条的改变
                    setTimeout(function () {
                        time = (curPercent - 50) / 50;
                        deg = (curPercent - 50) / 50 * 180 - 135;

                        _this.setData({
                            left_circle_transform: 'rotate(' + deg + 'deg)',
                            left_circle_transition: 'all ' + time + 's linear'
                        })
                    }, Math.floor(time * 1000));
                } else {
                    //设置右边的进度
                    time = Math.abs(curPercent - oldPercent) / 50 * speed;
                    deg = curPercent / 50 * 180 - 135;
                    _this.setData({
                        right_circle_transform: 'rotate(' + deg + 'deg)',
                        right_circle_transition: 'all ' + time + 's linear'
                    })
                }
            }
        },
    }
})
