
Component({
  /**
   * 组件的属性列表
   */
    properties: {
        mode: {
            type: String,
            value: "normal",
            observer: '_changeMode',
        },
        name: {
            type: String,
            value: "名称",
        },
        placeholder: {
            type: String,
            value: "请输入",
        },
        value: {
            type: String,
            value: "",
        },
        index: {
            type: Number,
            value: 0,
        },
        array:{
            type:Array,
            value:[],
        },
  },

  /**
   * 组件的初始数据
   */
    data: {
        MODE_NORMAL: "normal",
        MODE_CHECK:"check",
        MODE_TEXTAREA: "textarea",
        MODE_SELECT:"select",
    },

  /**
   * 组件的方法列表
   */
    methods: {
        _changeMode(_new,_old){
            console.log( _new,_old)
            if( _new == "")
                this.setData({ mode:"normal" })
        },

        //   click(e) {     
        //       this.triggerEvent('click', e.currentTarget.dataset.index);
        //   },
        input(e) {
            // console.log(e)
            this.triggerEvent('input', e.detail.value);
        },        
        change(e){
            console.log(e)
            this.setData({
                index: e.detail.value
            })
            this.triggerEvent('change', e.detail.value);
        },
        check(e) {
            // console.log(e)
            //todo alert 1 手机为空，
            // 60s下发
            console.log(12321)
            this.triggerEvent('check', e.detail.value);
        },    
    }
})
