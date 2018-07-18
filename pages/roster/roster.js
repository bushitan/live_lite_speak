// pages/roster/roster.js
var GP 
Page({
// 积分表
    /**
     * 页面的初始数据
     */
    data: {
        list: [
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
            { image: "../../images/logo.jpg", name: "不是探" },
        ],
    },
    add() {
        wx.showActionSheet({
            itemList: ['加分', '2分', '5分', '20分'],
        })
    },
    reduce() {
        wx.showActionSheet({
            itemList: ['扣分','2分','5分','20分'],
        })
    },
    setScore(){

       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        GP = this
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
})