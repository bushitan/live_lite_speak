// pages/meet/meet.js
var API = require('../../utils/api.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {

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