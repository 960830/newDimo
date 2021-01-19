export default [
    // <<<<<<< HEAD
    // {
    //     path: '/searchZ',
    //     name: 'searchZ',
    //     component: () => import('../views/Gcy/searchZ.vue')
    // },
    // ]
    // =======
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
        meta: { title: "个人中心" },
        component: () => import("../views/dky-me/dky-message.vue"),
    },
    // 修改名字
    {
        path: "/dky-alterName",
        name: "dky-alterName",
        meta: { title: "修改姓名", mage: "保存" },
        component: () => import("../views/dky-me/dky-alterName.vue"),
    },
    // 修改手机
    {
        path: "/dky-phone",
        name: "dky-phone",
        meta: { title: "修改手机", mage: "保存" },
        component: () => import("../views/dky-me/dky-phone.vue"),
    },
    // 修改性别
    {
        path: "/dky-sex",
        name: "dky-sex",
        meta: { title: "修改性别", mage: "保存" },
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
        meta: { title: "雅思语法精讲", mage: "取消" },
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
        meta: { title: "地址管理", mage: "新增地址" },
        component: () => import("../views/dky-me/dky-site.vue"),
    },
    // 我的学习卡
    {
        path: "/dky-mestudy",
        name: "dky-mestudy",
        meta: { title: "我的学习卡", mage: "学习卡兑换" },
        component: () => import("../views/dky-me/dky-mestudy.vue"),
    },
    // 会员列表
    {
        path: "/dky-member",
        name: "dky-member",
        meta: { title: "会员列表" },
        component: () => import("../views/dky-me/dky-member.vue"),
    },
    // 开通会员
    {
        path: "/dky-kaimember",
        name: "dky-kaimember",
        meta: { title: "开通会员" },
        component: () => import("../views/dky-me/dky-kaimember.vue"),
    },
    // 设置密码
    {
        path: "/dky-shemi",
        name: "dky-shemi",
        meta: { title: "设置密码" },
        component: () => import("../views/dky-me/dky-shemi.vue"),
    },
    // 设置 
    {
        path: "/dky-sets",
        name: "dky-sets",
        meta: { title: "设置" },
        component: () => import("../views/dky-me/dky-sets.vue"),
    },
    // 我的余额
    {
        path: "/dky-mebalance",
        name: "dky-mebalance",
        meta: { title: "我的余额",mage:"余额明细" },
        component: () => import("../views/dky-me/dky-mebalance.vue"),
    },
    // 余额明细
    {
        path: "/dky-balancemin",
        name: "dky-balancemin",
        meta: { title: "余额明细"},
        component: () => import("../views/dky-me/dky-balancemin.vue"),
    },
    // 百家云网校条例
    {
        path: "/dky-rules",
        name: "dky-rules",
        meta: { title: "百家云网校条例"},
        component: () => import("../views/dky-me/dky-rules.vue"),
    },
    // 问题反馈
    {
        path: "/dky-opinion",
        name: "dky-opinion",
        meta: { title: "问题反馈"},
        component: () => import("../views/dky-me/dky-opinion.vue"),
    },
    // 邀请
    {
        path: "/dky-invite",
        name: "dky-invite",
        meta: { title: "邀请好友分享"},
        component: () => import("../views/dky-me/dky-invite.vue"),
    },
    // 我的作业
    {
        path: "/dky-work",
        name: "dky-work",
        meta: { title: "作业列表"},
        component: () => import("../views/dky-me/dky-work.vue"),
    },
    // 关注
    {
        path: "/dky-attention",
        name: "dky-attention",
        meta: { title: "我的关注"},
        component: () => import("../views/dky-me/dky-attention.vue"),
    },
    // 我的预约
    {
        path: "/dky-appoint",
        name: "dky-appoint",
        meta: { title: "我的预约"},
        component: () => import("../views/dky-me/dky-appoint.vue"),
    },

];
// >>>>>>> origin/dky
