// components/xx_cover_news/xx_cover_news.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: "",
            // value: "row-reverse",
        },
        list: {
            type: Array,
            value: [
                // {
                //     id: "", 
                //     logo: "../../images/my_select.png", 
                //     url: "../../images/voice.mp3", 
                // },
            ],
            //   observer: '_changeLevel',
        },
        direction: {
            type: String,
            value: "row",
            // value: "row-reverse",
        },
        select: {
            type: String,
            value: "",
            // value: "row-reverse",
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
            console.log(e.currentTarget.dataset.index)
            var index = e.currentTarget.dataset.index
            var url = this.data.list[index].url
            var id = this.data.list[index].id
            this.triggerEvent('click', id);
        },
    }
})
