// components/xx_cover_news/xx_cover_news.js

// <xx-navigte   catchclick= "toMyCoin" isarrow= "false" >
    // <image slot="icon" src= "../../images/hotapp_01_03.png" class='icon' > </image> 
    // < view slot= "left" > 内容 < /view>
    // < view slot= "right" > 12.332312元< /view> 
// < /xx-navigte>
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
  /**
   * 组件的属性列表
   */
    properties: {
        icon: {
            type: String,
            value: "",
        },
        title: {
            type: String,
            value: "",
        },
        isarrow: {
            type: String,
            value: "true",
        },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 改变
    _change(newVal, oldVal) {
    },

    click(e) {
        console.log(231)
        this.triggerEvent('click');
    },
  }
})
