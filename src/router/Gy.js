export default [
    //首页页面
//     {
//        path: '/gy_qingdongtu',
//        name: 'gy_qingdongtu',
//        component: () => import("@/views/Gy/Login/gy_qingdongtu.vue")
//    },
   //首页页面
   {
       path: '/gy_homes',
       name: 'gy_homes',
       component: () => import("@/views/Gy/Home/gy_homes.vue")
   },
   //名师详情页面
   {
       path: '/gy_hometr',
       name: 'gy_hometr',
       component: () => import("@/views/Gy/Home/gy_hometr.vue")
   },

   //登录页面
   {
       path: '/gy_login',
       name: 'gy_login',  
       component: () => import("@/views/Gy/Login/gy_login.vue")
   },
   //特色课页面
   {
       path: '/gy_index',
       name: 'gy_index',
       component: () => import("@/views/Gy/vantout/gy_index.vue"),

   },
   //特色课分类页面
   {
       path: '/gy_indexqing',
       name: 'gy_indexqing',
       component: () => import("@/views/Gy/vantout/gy_indexqing.vue"),
   },
   //课表页面
   {
       path: '/gy_calendar',
       name: 'gy_calendar',
       component: () => import("@/views/Gy/Calendar/gy_calendar.vue"),
   },
   //订单支付页面
   {
       path: '/gy_payment',
       name: 'gy_payment',
       component: () => import("@/views/Gy/Order/gy_payment.vue"),
   },
   //订单支付页面
//    {
//        path: '/gy_success',
//        name: 'gy_success',
//        component: () => import("@/views/Gy/Order/gy_success.vue"),
//    },



]