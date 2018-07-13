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
            url: API.COVER_GET_TAG_LIST,
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    tagList:res.data.list_tag
                    // articleList: [res.data.article_list[0]]
                })
                GP.getCoverList(res.data.list_tag[0].tag_id)
            },
        })
    },

    // 获取封面列表
    getCoverList(tag_id){
        API.Request({
            url: API.COVER_GET_COVER_LIST,
            data: { tag_id: tag_id},
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    coverList: res.data.list_cover
                    // articleList: [res.data.article_list[0]]
                })
            },
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})