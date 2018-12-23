//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    tabbar: {
      color: "#A5A5A5",
      selectedColor: "#FFDC1D",
      backgroundColor: "#000000",
      borderStyle: "#000000",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "/images/index.png",
          selectedIconPath: "/images/index_select.png",
          text: "首页"
        },
        {
          pagePath: "pages/log/log",
          iconPath: "/images/shoucang.png",
          selectedIconPath: "/images/shoucang_select.png",
          text: "日志"
        },
        {
          pagePath: "pages/my/my",
          iconPath: "/images/huiyuan.png",
          selectedIconPath: "/images/huiyuan_select.png",
          text: "我的"
        }
      ]
    }
  }
})
