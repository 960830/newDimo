export default [
    // 个人中心
    {
        path: "/dky-me",
        name: "dky-me",
        component: () => import("../views/dky-me/dky-me.vue"),
    },
    // 个人信息
    {
        path: "/dky-message",
        name: "dky-message",
        meta: { title: "个人中心"},
        component: () => import("../views/dky-me/dky-message.vue"),
    },
    // 修改名字
    {
        path: "/dky-alterName",
        name: "dky-alterName",
        meta: { title: "修改姓名" ,mage:"保存" },
        component: () => import("../views/dky-me/dky-alterName.vue"),
    },
    // 修改性别
    {
        path: "/dky-sex",
        name: "dky-sex",
        meta: { title: "修改性别" ,mage:"保存" },
        component: () => import("../views/dky-me/dky-sex.vue"),
    },
    // 我的收藏
    {
        path: "/dky-collect",
        name: "dky-collect",
        meta: { title: "我的收藏" },
        component: () => import("../views/dky-me/dky-collect.vue"),
    },
    // 下载页面
    {
        path: "/dky-download",
        name: "dky-download",
        meta: { title: "正在下载" },
        component: () => import("../views/dky-me/dky-download.vue"),
    },
    // 雅思语法精讲
    {
        path: "/dky-cache",
        name: "dky-cache",
        meta: { title: "雅思语法精讲",mage:"取消"  },
        component: () => import("../views/dky-me/dky-cache.vue"),
    },
    // 我的下载
    {
        path: "/dky-medownload",
        name: "dky-medownload",
        meta: { title: "我的下载" },
        component: () => import("../views/dky-me/dky-medownload.vue"),
    },
    // 课程提醒
    {
        path: "/dky-course",
        name: "dky-course",
        meta: { title: "课程提醒" },
        component: () => import("../views/dky-me/dky-course.vue"),
    },
    // 消息通知
    {
        path: "/dky-news",
        name: "dky-news",
        meta: { title: "消息通知" },
        component: () => import("../views/dky-me/dky-news.vue"),
    },
    // 我的订单
    {
        path: "/dky-order",
        name: "dky-order",
        meta: { title: "我的订单" },
        component: () => import("../views/dky-me/dky-order.vue"),
    },
    // 大的我的订单
    {
        path: "/dky-bigorder",
        name: "dky-bigorder",
        meta: { title: "我的订单" },
        component: () => import("../views/dky-me/dky-bigorder.vue"),
    },
    // 我的优惠卷
    {
        path: "/dky-coupon",
        name: "dky-coupon",
        meta: { title: "我的优惠卷" },
        component: () => import("../views/dky-me/dky-coupon.vue"),
    },
    // 学习卡兑换
    {
        path: "/dky-study",
        name: "dky-study",
        meta: { title: "学习卡兑换" },
        component: () => import("../views/dky-me/dky-study.vue"),
    },
    // 地址管理
    {
        path: "/dky-site",
        name: "dky-site",
        meta: { title: "地址管理" ,mage:"新增地址"},
        component: () => import("../views/dky-me/dky-site.vue"),
    },
];
