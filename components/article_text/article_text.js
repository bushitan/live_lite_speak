
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        article: {
            type: Object,
            value: {
                // title: "123",
                // summary: "123",
                // source: "123",
                // issue_time: "123",
                // click_rate: "123",
                // content:"defiodsfio",
            },
            observer: '_changeContent',
        },
    },

  /**
   * 组件的初始数据
   */
    data: { 
        content:"",
    },

  /**
   * 组件的方法列表
   */
  methods: {
      _changeContent(_new, _old){
          console.log(_new, _old)
        //   _old.replace
        // return _new
        if (_new != null) {
            var content = _new.content.replace(/&ldquo;/g, '"').replace(/rdquo;/g, '"').replace(/&radic;/g, '勾').replace(/&mdash;/g, '-').replace(/&beta;/g, 'b')
                
            this.setData({
                content: content
            })

        }
           
        //   _new=1
        //   return _new
      },
      click(e) {     
          this.triggerEvent('click', e.currentTarget.dataset.index);
      },
  }
})
