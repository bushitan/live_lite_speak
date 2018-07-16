// pages/meet/meet.js
var API = require('../../utils/api.js');
var QINIU = require('../../utils/qiniu.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        speak:{         },
        
        isLogin:false,
        isComplete: false,
        selectID: null,
    },
    getUserInfo(res){
        if (!res.detail.hasOwnProperty('userInfo'))
            return 
        var userInfo = res.detail.userInfo
        var speak = GP.data.speak
        // speak.visitor_list[0].logo = userInfo.avatarUrl
        GP.setData({
            logo: userInfo.avatarUrl,
            name: userInfo.nickName,
            // speak: speak,
            isLogin:true,//登陆成功
        })
        //本地存储
        wx.setStorageSync(API.KEY_USER, userInfo)
        //上传头像
        
        API.Request({
            url: API.LITE_REGISTER,
            data: {
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl
            },
            success: function (res) {
                wx.showToast({
                    title: '登陆成功',
                    icon:"success",
                })
            },
        })
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
        var tempFilePath = e.detail 
        // var tempFilePath = "a.mp3"
        var suffix = tempFilePath.split(".").pop() 
        API.Request({
            url: API.SPEAK_GET_TOKEN,
            data: {
                suffix: suffix
            },
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    uploadVoiceUrl: res.data.voice_url,
                    uploadVoiceKey: res.data.key,
                })
                QINIU.UpStream(
                    res.data.key,
                    res.data.token,
                    tempFilePath,
                    GP.addVoice,
                )
                
            },
        })
    },
    //增加声音
    addVoice(){
        API.Request({
            url: API.SPEAK_ADD_VOICE,
            data: {
                voice_url: GP.data.uploadVoiceUrl,
                voice_key: GP.data.uploadVoiceKey,
                theme_id: GP.data.themeID
            },
            success: function (res) {
                console.log(res.data)
                //刷新页面
                GP.onInit()
            },
        })
    },
    //删除声音
    deleteVoice() {
        API.Request({
            url: API.SPEAK_DELETE_VOICE,
            data: {
                theme_id: GP.data.themeID
            },
            success: function (res) {
                console.log(res.data)
                //刷新页面
                GP.onInit()
            },
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
        if (wx.getStorageSync(API.KEY_USER) != "")
            GP.setData({ isLogin:true})

        GP.setData({ themeID: options.theme_id})
        GP.onInit()
        GP.getCheck(options)
    },
    getCheck(){
        API.Request({
            url: API.BONUS_CEHCK,
            data: { 
                theme_id: GP.data.themeID
            },
            success: function (res) {
                console.log(res.data)
                wx.showModal({
                    title: '打卡成功，获得2积分',
                })
                // if (res.data.result == true) {
                //     wx.showModal({
                //         title: res.data.msg,
                //     })
                // }
            },
        })
    },

    onInit() {
        API.Request({
            url: API.SPEAK_GET_THEME,
            data:{
                theme_id: GP.data.themeID
            },
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    speak: res.data.theme_dict
                })
                GP.checkIsComplete()
            },
        })
    },

    //判断是否已经上传了
    checkIsComplete() {
        var studentList = GP.data.speak.student_list
        var visitorList = GP.data.speak.visitor_list
        var user_id = wx.getStorageSync(API.KEY_USER_DICT).user_id
        // console.log(userInfo)
        var isComplete = false
        for (var i in studentList)
            if (user_id == studentList[i].user_id)
                isComplete = true
        for (var i in visitorList)
            if (user_id == visitorList[i].user_id)
                isComplete = true
        GP.setData({ isComplete: isComplete })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})


// title: "7月5日",
//     board: "It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.It is what a man must do.",
//         student_list: [
//             {
//                 id: "1",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },
//             {
//                 id: "11",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },
//             {
//                 id: "111",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },
//             {
//                 id: "1111",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },
//             {
//                 id: "114",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },
//             {
//                 id: "12",
//                 logo: "../../images/logo.jpg",
//                 url: "../../images/voice.mp3",
//             },

//         ],
//             visitor_list: [
//                 {
//                     id: "2",
//                     logo: "../../images/my_select.png",
//                     url: "../../images/voice.mp3",
//                 },

//             ],