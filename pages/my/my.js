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

        score:81,
    },
    toExchange(){
        wx.navigateTo({
            url: '/pages/exchange/exchange',
        })
    },

    onLoad(){
        GP = this
        var user = wx.getStorageSync(API.KEY_USER)
        GP.setData({
            user: user
        })
        // GP.getScore()
    },
    onSHow() {
        // GP.getScore()
    },

    getScore() {
        API.Request({
            url: API.BONUS_GET_SCORE,
            data: {
            },
            success: function (res) {
                console.log(res.data)
                GP.setData({
                    score: res.data.score_dict
                })
                // wx.showModal({
                //     title: '打卡成功，获得2积分',
                // })
                // if (res.data.result == true) {
                //     wx.showModal({
                //         title: res.data.msg,
                //     })
                // }
            },
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
 
    onShareAppMessage(){
        return {
            title: '自定义转发标题',
            path: 'pages/index/index/?share=true&user_id=' + wx.getStorageSync(API.KEY_USER_DICT).user_id
            
            // {"nick_name":"this.丰兄", "session":"iRPP5reRQanRZN5sbbNFAg==", "user_id":10, "is_teacher":1, "avatar_url":"https://wx.qlogo.cn/mmopen/vi_32/FmjAcibbIH7CAWD8KJPKSQVen6RwQbux7eqTkJ4t2JicwaiciazNXNZW0d4GxiahrWc2mlpk4QAV1Gdz7v2v2VhHib3g/132" }
        }
    },

})