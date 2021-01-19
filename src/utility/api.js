import http from "./http.js";

// 登录接口访问
export const banner = () => http.get("banner");
// 课程详情
export const curriculum = () => http.get("courseClassify");
// 个人信息
export const message = () => http.get("userInfo")
