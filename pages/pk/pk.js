// pages/meet/meet.js
var API = require('../../utils/api.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pkList: [
            // {
            //     title: "7月5日",
            //     board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
            //     student_list: [
            //         {
            //             id: "1",
            //             logo: "../../images/my_select.png",
            //             url: 'http://img.12xiong.top/help_click.mp3',
            //         },
            //     ],
            //     visitor_list: [
            //         {
            //             id: "2",
            //             logo: "../../images/my_select.png",
            //             url: "../../images/voice.mp3",
            //         },
            //     ],
            // },
            // {
            //     title: "7月5日",
            //     board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
            //     student_list: [
            //         {
            //             id: "1",
            //             logo: "../../images/my_select.png",
            //             url: "../../images/voice.mp3",
            //         },
            //     ],
            //     visitor_list: [
            //         {
            //             id: "2",
            //             logo: "../../images/my_select.png",
            //             url: "../../images/voice.mp3",
            //         },
            //     ],
            // },
            // {
            //     title: "7月5日",
            //     board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
            //     student_list: [
            //         {
            //             id: "1",
            //             logo: "../../images/my_select.png",
            //             url: "../../images/voice.mp3",
            //         },
            //     ],
            //     visitor_list: [
            //         {
            //             id: "2",
            //             logo: "../../images/my_select.png",
            //             url: "../../images/voice.mp3",
            //         },
            //     ],
            // },
        ],
        

        selectID:null,
    },

    //选择试听
    playVoice(e){
        console.log(e)
        GP.setData({
            selectID:e.detail
        })
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
        GP.onInit()
    },

    onInit() {

        API.Request({
            url: API.SPEAK_GET_THEME_LIST,
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    pkList: res.data.theme_list
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