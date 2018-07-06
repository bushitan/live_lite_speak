// pages/meet/meet.js
var API = require('../../utils/api.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pkList: [
            {
                title: "7月5日",
                board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
                student_list: [
                    {
                        id: "1",
                        logo: "../../images/my_select.png",
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
            {
                title: "7月5日",
                board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
                student_list: [
                    {
                        id: "1",
                        logo: "../../images/my_select.png",
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
            {
                title: "7月5日",
                board: "qwewr32r32rqwewr32r32rqwr32rqwewr",
                student_list: [
                    {
                        id: "1",
                        logo: "../../images/my_select.png",
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
        // GP.onInit()
    },

    onInit() {

        API.Request({
            url: "https://xcx.308308.com/huaxun_2/api/article/get_list/meet/?tag_id=&start_index=0&end_index=10&app_id=wx51930c31391cc5cc",
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    articleList: [res.data.article_list[0]]
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