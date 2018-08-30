//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [
            {
                id: 'view',
                name: '视图容器',
                open: false,
                pages: ['view', 'scroll-view', 'swiper']
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: ['text', 'icon', 'progress']
            },  {
                id: 'nav',
                name: '自娱自乐',
                open: false,
                pages: ['money', 'request', 'cube']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
})
