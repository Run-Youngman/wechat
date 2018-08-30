// pages/home/page/cube/cube.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cube: []
    },
    addcube: function (e) {
        let array = this.data.cube;
        array.push({id: 1,name: '测试'});
        this.setData({cube: array});
    },
    cancelcube: function (e) {
        let selectId = e.currentTarget.dataset.cubuid;
        let array = this.data.cube;
        let flag = true;
        array.map((item,i) => {
            if(item.id === selectId && flag){
                array.splice(i,1);
                flag = false;
                this.setData({cube:array});
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})