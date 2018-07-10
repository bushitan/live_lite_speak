Page({
    data: {
        height: 20,
        focus: false,

        marks:[
            {
                id: 0,
                latitude: 26.5589,       		
                longitude: 106.70393,
                width: 50,
                height: 50,
            }
        ]
    },
    bindButtonTap: function () {
        this.setData({
            focus: true
        })
    },
    bindTextAreaBlur: function (e) {
        console.log(e.detail.value)
    },
    bindFormSubmit: function (e) {
        console.log(e.detail.value.textarea)
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function () {
        console.log('form发生了reset事件')
    }
})