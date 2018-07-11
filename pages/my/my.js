var API = require('../../utils/api.js');
var GP
Page({
   
    data: {
        mapDict:{
            phoneNumber:'15277126678',
            latitude:26.5589,
            longitude:106.70393, 
        },
        markers:[
            {
                id: 0,
                latitude: 26.5589,       		
                longitude: 106.70393,
                width: 50,
                height: 50,
            }
        ],

        user: "",
        usrName: "",
        usrAddress: "",
    },

    onLoad(){
        GP = this
        var user = wx.getStorageSync(API.KEY_USER)
        GP.setData({
            user: user
        })
    },
    // 拨打电话
    clickPhone() {
        wx.makePhoneCall({
            phoneNumber: GP.data.mapDict.phoneNumber //仅为示例，并非真实的电话号码
        })
    },

    // 导航
    clickAddress() {
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) { 
                wx.openLocation({
                    latitude: GP.data.mapDict.latitude,
                    longitude: GP.data.mapDict.longitude,
                    scale: 28
                })
            }
        })
    },

    inputName(e) {
        console.log(e.detail)
        GP.setData({ usrName: e.detail})
    },

    inputPhone(e) {
        console.log(e.detail)
        GP.setData({ usrAddress: e.detail })
    },
    //报名试听
    audition(){

    },
 


})