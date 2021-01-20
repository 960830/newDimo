import http from "./http.js";

// 轮播图
export const banner = () => http.get("banner");
// 课程详情
export const curriculum = () => http.get("courseClassify");

// 邓凯源
// 个人信息
export const message = () => http.get("userInfo")


// 郭彦
//获取登录接口访问
export const login = (params) => {
    return http.post("login",{...params})
}

//获取banner轮播图
export const getlist = http.get('banner')


//获取首页列表
export const indexlist = http.get('recommend/appIndex')

//获取首页列表
export const penglist = http.get('myStudy/2')

