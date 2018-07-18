// pages/exchange/exchange.js
var API = require('../../utils/api.js');
var GP
Page({

    /**
     * 页面的初始数据
     */
    data: {
        usrName: "",
        usrAddress: "",
    },
    inputName(e) {
        console.log(e.detail)
        GP.setData({ usrName: e.detail })
    },

    inputPhone(e) {
        console.log(e.detail)
        GP.setData({ usrAddress: e.detail })
    },

    //报名试听
    audition() {
        API.Request({
            url: API.BONUS_SIGN_IN,
            data: {
                name: GP.data.usrName,
                phone: GP.data.usrAddress, 
            },
            success: function (res) {
                console.log(res.data)
                //已经分享后就没有提示了
                
                wx.showModal({
                    title: res.data.msg,
                    success:function(){
                        wx.navigateBack({})
                    },
                })
            },
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
        var user = wx.getStorageSync(API.KEY_USER_DICT)
        GP.setData({
            usrName: user.phone,
            usrAddress: user.name,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
})