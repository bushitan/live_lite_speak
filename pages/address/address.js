// pages/exchange/exchange.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mapDict: {
            phoneNumber: '15277126678',
            latitude: 26.5589,
            longitude: 106.70393,
        },
        markers: [
            {
                id: 0,
                latitude: 26.5589,
                longitude: 106.70393,
                width: 50,
                height: 50,
            }
        ],
        list: [
            { name: '铅笔', price: 67, qr: "http://image.12xiong.top/help_qr.jpg" },
            { name: '试听课', price: 167, qr: "http://image.12xiong.top/help_qr.jpg" },
            { name: '游泳卡', price: 267, qr: "http://image.12xiong.top/help_qr.jpg" },
            { name: '电子书', price: 567, qr: "http://image.12xiong.top/help_qr.jpg" },
            { name: 'kindle', price: 3567, qr: "http://image.12xiong.top/help_qr.jpg" },
        ],
    },
    exchange(){
        wx.previewImage({
            urls: ["http://image.12xiong.top/help_qr.jpg"],
        })
    },
    openQR(){
        wx.scanCode({
            
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
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