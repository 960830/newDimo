<template>
    <!-- 包含登录和未登录状态 -->
    <div class="dky-package">
        <!-- 我的页面上方的半圆图片 -->
        <div>
            <img src="@/assets/img/user_bg.ab306a5c.png" alt="" class="dky-topimg" />
        </div>

        <!-- 下面的总体内容 -->
        <div class="dky-content">
            <!-- 带有头像的盒子      登录的时候显示 -->
            <div class="dky-one" v-if="token">
                <div class="dky-one-top">
                    <div class="dky-one-top-left">
                        <img src="@/assets/img/avatar.jpg" class="dky-tou" />
                        <i>
                            小文师弟
                            <img src="@/assets/img/01.png" class="dky-one-min" />
                        </i>
                    </div>
                    <div class="dky-one-top-right"> <img src="@/assets/img/02.png" /></div>
                </div>

                <div class="dky-one-bottom">
                    <ul>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li @click="appoint">
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的预约</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li @click="mebalance">
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">剩余课程币</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 没登陆的时候显示 -->
            <div class="dky-one" v-else>
                <div class="dky-one-top">
                    <div class="dky-one-top-left">
                        <img src="@/assets/img/avatar.jpg" class="dky-tou" />
                        <i>
                            <span>登录</span> / <span>注册</span>
                            <img src="@/assets/img/01.png" class="dky-one-min" />
                        </i>
                    </div>
                    <div class="dky-one-top-right">
                        <p class="dky-one-right-img">去约课 </p>
                    </div>
                </div>
                <div class="dky-one-bottom">
                    <ul>
                        <li>
                            <span class="dky-one-bottom-1">0</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li @click="appoint">
                            <span class="dky-one-bottom-1">0</span>
                            <p class="dky-one-bottom-2">我的预约</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li @click="mebalance">
                            <span class="dky-one-bottom-1">0</span>
                            <p class="dky-one-bottom-2">剩余课程币</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 中间邀请注册 -->
            <div class="dky-two" @click="invite">
                <div>
                    <p>邀请好友注册APP，想多重好礼</p>
                    现实特惠，多邀多得
                </div>
                <div class="dky-two-2">
                    >
                </div>
            </div>
            <!-- 相关 -->
            <div class="dky-three">
                <!-- 课程相关 -->
                <div class="dky-three-box">
                    <h2>课程相关</h2>
                    <ul>
                        <li @click="work">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                        <li @click="attention">
                            <img src="@/assets/img/img07.png" alt="">
                            <p>关注的老师</p>
                        </li>
                        <li @click="collect">
                            <img src="@/assets/img/img08.png" alt="">
                            <p>我的收藏</p>
                        </li>
                        <li @click="medownload">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>我的下载</p>
                        </li>
                    </ul>
                </div>
                <!-- 订单相关 -->
                <div class="dky-three-box">
                    <h2>订单相关</h2>
                    <ul>
                        <li @click="order">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>我的订单</p>
                        </li>
                        <li @click="site">
                            <img src="@/assets/img/img07.png" alt="">
                            <p>收货地址</p>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <!-- 我的账户 -->
                <div class="dky-three-box">
                    <h2>我的账户</h2>
                    <ul>
                        <li @click="coupon">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>优惠卷</p>
                        </li>
                        <li @click="mestudy">
                            <img src="@/assets/img/img07.png" alt="">
                            <p>学习卡</p>
                        </li>
                        <li @click="member">
                            <img src="@/assets/img/img08.png" alt="">
                            <p>会员</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <!-- 自动服务 -->
                <div class="dky-three-box">
                    <h2>自动服务</h2>
                    <ul>
                        <li @click="message">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>我的信息</p>
                        </li>
                        <li @click="opinion">
                            <img src="@/assets/img/img07.png" alt="">
                            <p>意见反馈</p>
                        </li>
                        <li>
                            <img src="@/assets/img/img08.png" alt="">
                            <p>在线客服</p>
                        </li>

                        <li @click="sets">
                            <img src="@/assets/img/img12.png" alt="">
                            <p>设置</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 占位 -->
            <div class="dky-four">
                <ban />
            </div>
        </div>
    </div>
</template>

<script>
    import ban from "@/components/tabber.vue"
    export default {
        components: {
            ban,
        },
        methods: {
            // 收藏
            collect() {
                this.$router.push({ path: "/dky-collect" })
            },
            // 下载
            medownload() {
                this.$router.push({ path: "/dky-medownload" })
            },
            // 订单
            order() {
                this.$router.push({ path: "/dky-order" })
            },
            // 地址
            site() {
                this.$router.push({ path: "/dky-site" })
            },
            // 优惠卷
            coupon() {
                this.$router.push({ path: "/dky-coupon" })
            },
            // 学习卡
            mestudy() {
                this.$router.push({ path: "/dky-mestudy" })
            },
            // 会员
            member() {
                this.$router.push({ path: "/dky-member" })
            },
            // 个人信息
            message() {
                this.$router.push({ path: "/dky-message" })
            },
            // 设置
            sets() {
                this.$router.push({ path: "/dky-sets" })
            },
            // 意见反馈
            opinion() {
                this.$router.push({ path: "/dky-opinion" })
            },
            // 要钱邀请
            invite() {
                this.$router.push({ path: "/dky-invite" })
            },
            // 作业
            work() {
                this.$router.push({ path: "/dky-work" })
            },
            // 关注老师
            attention() {
                this.$router.push({ path: "/dky-attention" })
            },
            // 预约
            appoint() {
                this.$router.push({ path: "/dky-appoint" })
            },
            //余额
            mebalance() {
                this.$router.push({ path: "/dky-mebalance" })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .dky-package {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        position: relative;
        .dky-topimg {
            width: 100%;
            height: 20%;
        }
        .dky-content {
            width: 90%;
            height: 85%;
            position: absolute;
            top: 8%;
            left: 5%;
            background-color: white;
            border-radius: 0.05rem;
            .dky-one {
                width: 100%;
                height: 4rem;
                background-color: #fff;

                .dky-one-top {
                    display: flex;
                    height: 2rem;
                    align-items: center;
                    margin-top: 0.5rem;
                    position: relative;

                    .dky-one-top-left {
                        display: flex;

                        .dky-tou {
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                            margin-left: 0.4rem;
                        }

                        i {
                            display: block;
                            font-style: normal;
                            margin: 1rem 1.1rem 0 0.1rem;
                            position: absolute;
                        }

                        .dky-one-min {
                            width: 0.4rem;
                        }
                    }

                    .dky-one-top-right {
                        position: absolute;
                        right: 0rem;
                        top: 0.15rem;

                        img {
                            width: 0.2rem;
                        }

                        .dky-one-right-img {
                            font-size: 0.1rem;
                            width: 0.9rem;
                            height: 0.4rem;
                            line-height: 0.4rem;
                            border-top-left-radius: 0.2rem;
                            border-bottom-left-radius: 0.2rem;
                            background-color: #FC5500;
                            color: white;
                            text-align: center;
                        }
                    }
                }

                .dky-one-bottom {
                    width: 100%;
                    height: 2rem;

                    ul {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        li {
                            text-align: center;

                            .dky-one-bottom-1 {
                                color: red;
                                font-size: 0.5rem;
                                font-weight: 900;
                            }

                            .dky-one-bottom-2 {
                                font-size: 0.4rem;
                                font-weight: 600;
                            }

                            .dky-one-bottom-3 {
                                color: #B3B3B3;
                                font-size: 0.24rem;
                            }
                        }
                    }
                }

            }


            .dky-two {
                width: 100%;
                height: 0.8rem;
                border-radius: 0.4rem;
                background-color: #FC5800;
                color: white;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin: 0.6rem 0;

                .dky-two-2 {
                    font-size: 0.5rem;
                }

            }


            .dky-three {
                width: 100%;

                .dky-three-box {
                    width: 100%;
                    height: 2.4rem;
                    border-bottom: 0.05rem solid #eee;
                    background-color: #fff;

                    h2 {
                        font-size: 0.4rem;
                        margin: 0.4rem 0.3rem;
                    }

                    ul {
                        width: 100%;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        text-align: center;
                        border-bottom: 0.1rem;

                        li {
                            width: 33%;

                            img {
                                width: 50%;
                                height: .8rem;
                            }
                        }
                    }
                }
            }


            .dky-four {
                width: 100%;
                height: 1.2rem;
            }
        }
    }
</style>