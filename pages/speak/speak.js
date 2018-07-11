// pages/meet/meet.js
var API = require('../../utils/api.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        speak: 
        {
            title: "7月5日",
            board: "It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.",
            student_list: [
                {
                    id: "1",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
                {
                    id: "11",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
                {
                    id: "111",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
                {
                    id: "1111",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
                {
                    id: "114",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
                {
                    id: "12",
                    logo: "../../images/logo.jpg",
                    url: "../../images/voice.mp3",
                },
              
            ],
            visitor_list: [
                {
                    id: "2",
                    logo: "../../images/my_select.png",
                    url: "../../images/voice.mp3",
                },
            
            ],
        },
        
        isLogin:false,
        isComplete: true,
        selectID: null,
    },
    getUserInfo(res){
        var userInfo = res.detail.userInfo
        var speak = GP.data.speak
        speak.visitor_list[0].logo = userInfo.avatarUrl
        GP.setData({
            logo: userInfo.avatarUrl,
            name: userInfo.nickName,
            speak: speak,
            isLogin:true,//登陆成功
        })
        //本地存储
        wx.setStorageSync(API.KEY_USER, userInfo)
    },
    //选择试听
    playVoice(e) {
        console.log(e)
        GP.setData({
            selectID: e.detail
        })
    },

    //获取录音文件
    getRecordFile(e){
        console.log(e)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
        if (wx.getStorageSync(API.KEY_USER) != "")
            GP.setData({ isLogin:true})
        GP.onInit(options.theme_id)
    },

    onInit(theme_id) {

        API.Request({
            url: API.SPEAK_GET_THEME,
            data:{
                theme_id: theme_id
            },
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    speak: res.data.theme_dict
                })
                // GP.getCategoryList(1)
            },
        })

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})