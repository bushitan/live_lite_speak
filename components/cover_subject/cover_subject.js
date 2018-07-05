// components/xx_cover_news/xx_cover_news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list: {
          type: Array,
          value: [
              { title: "雷军亲述独家创业心法", des:"生活研究",issue_time: "1.1万次观看", cover_url:"https://img.qlchat.com/qlLive/channelLogo/GL9NM5DO-1QD1-YHGO-1529912086978-7O6WPOOJB1A2.png@296h_480w_1e_1c_2o",},
              { title: "【攻心营销话术】嘴里有金山银山，嘴里有生意万千，高手无废话，开口就来钱！", issue_time: "21.1万次观看", cover_url:"https://img.qlchat.com/qlLive/channelLogo/625C5IO2-UYSV-EQ65-1526264717755-4HFHKBDWRNAK.jpg@296h_480w_1e_1c_2o",},
              { title: "著名经济学家郎咸平：中国经济的50个关键词，捕捉属于你的投资机会", issue_time: "0.2万次观看", cover_url: "https://img.qlchat.com/qlLive/channelLogo/8VOIN1S6-SK8R-HSH8-1517985329541-AVE8IMN2J8LY.jpg@296h_480w_1e_1c_2o", },
              { title: "李教授教你三天学会中医脉诊就是这么简单", issue_time: "8万次观看", cover_url: "https://img.qlchat.com/qlLive/channelLogo/U4I4FU1C-D5OZ-Y6TP-1526219422281-CT6S4SL5685K.jpg@296h_480w_1e_1c_2o", },
            //   { title: "我是一个很", issue_time: "sf1321", cover_url: "../../images/member_super_vip_icon.png", },
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
