// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    src : '../../images/log.png',
    name : 'Hello world！'
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  // 获取用户信息
  getMyInfo: function(e) {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
        })
      }
    })
  },

})
