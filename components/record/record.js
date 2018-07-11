// components/xx_cover_news/xx_cover_news.js

var startTime,endTime,duration;
const innerAudioContext = wx.createInnerAudioContext() // 播放
const recorderManager = wx.getRecorderManager() //录音
// var tempFilePath;
const options = {
    duration: 60000,//指定录音的时长，单位 ms
    sampleRate: 16000,//采样率
    numberOfChannels: 1,//录音通道数
    encodeBitRate: 96000,//编码码率
    format: 'mp3',//音频格式，有效值 aac/mp3
    frameSize: 50,//指定帧大小，单位 KB
}
var GP
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
    },

    /**
     * 组件的初始数据
     */
    data: {
        tempFilePath:null,
    },
    ready(){
        GP = this
        recorderManager.onStart(() => {
            console.log('recorder start')
            // SetCountDown(GP)
        });
        recorderManager.onStop((res) => {
            if (duration < 2000){
                wx.showModal({
                    title: '录音时间太短',
                    content: '',
                })
                return
            }


            GP.setData({
                tempFilePath : res.tempFilePath
            })
            
            // this.tempFilePath = res.tempFilePath;
            // console.log('停止录音', res.tempFilePath)
            // const { tempFilePath } = res
            // GP.setData({
            //     isAbleUpload: true,  //录音停止可以上传
            // })
            // clearInterval(intervarID); //清楚倒计时
        })
        //错误回调
        recorderManager.onError((res) => {
            console.log(res);
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //上传
        getTempFile(){
            this.triggerEvent('getTempFile', GP.data.tempFilePath);
        },

        //试听
        audition(){
            console.log('试听')
            innerAudioContext.src = GP.data.tempFilePath
            innerAudioContext.play()
        },

        //录音
        touchStart(e) {
            recorderManager.start(options)
            console.log("start:", e)
            startTime = Date.parse(new Date());
        },

        touchMove(e) {
            // console.log("move:", e)
        },

        touchEnd(e) {
            endTime = Date.parse(new Date());
            duration = endTime - startTime
            recorderManager.stop()
            console.log("end:", endTime - startTime)
        },

    }
})
