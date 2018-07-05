// components/xx_cover_news/xx_cover_news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list: {
          type: Array,
          value: [
              { title: "我是一个很我是一个很我是一个很我是一个很", issue_time: "sf1321", cover_url:"../../images/member_super_vip_icon.png",},
              { title: "我是一我是一个很我是一个很我是一个很我是一个很", issue_time: "sf1321", cover_url:"../../images/member_super_vip_icon.png",},
              { title: "我是一个很", issue_time: "sf1321", cover_url: "../../images/member_super_vip_icon.png", },
              { title: "我是一个很", issue_time: "sf1321", cover_url: "../../images/member_super_vip_icon.png", },
              { title: "我是一个很", issue_time: "sf1321", cover_url: "../../images/member_super_vip_icon.png", },
          ],
          //   observer: '_changeLevel',
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
      click(e) {
          
          this.triggerEvent('click', this.data.list[this.data.selectIndex]);
      },
  }
})
