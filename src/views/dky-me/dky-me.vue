<template>
<!-- 包含登录和未登录状态 -->
    <div class="dky-package">
        <!-- 我的页面上方的半圆图片 -->
        <div>
            <img
                src="../../assets/imgs/user_bg.ab306a5c.png"
                alt=""
                class="dky-topimg"
            />
        </div>
        
        <!-- 下面的总体内容 -->
        <div class="dky-content">
            <!-- 带有头像的盒子      登录的时候显示 -->
            <div class="dky-one" v-if="token">   
                <div class="dky-one-top">
                    <div class="dky-one-top-left">
                        <img
                            src="../../assets/imgs/avatar.jpg"
                            class="dky-tou"
                        />
                        <i>
                            小文师弟
                            <img
                                src="../../assets/imgs/01.png"
                                class="dky-one-min"
                            />
                        </i>
                    </div>
                    <div class="dky-one-top-right"> <img src="../../assets/imgs/02.png" /></div>
                </div>

                <div class="dky-one-bottom">
                    <ul>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 没登陆的时候显示 -->
            <div class="dky-one" v-else>
                <div class="dky-one-top">
                    <div class="dky-one-top-left">
                        <img
                            src="../../assets/imgs/avatar.jpg"
                            class="dky-tou"
                        />
                        <i>
                            <span>登录</span> / <span>注册</span>
                            <img
                                src="../../assets/imgs/01.png"
                                class="dky-one-min"
                            />
                        </i>
                    </div>
                    <div class="dky-one-top-right">
                         <p class="dky-one-right-img">去约课 </p>
                    </div>
                </div>    
                <div class="dky-one-bottom">
                    <ul>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                        <li>
                            <span class="dky-one-bottom-1">10</span>
                            <p class="dky-one-bottom-2">我的课程</p>
                            <i class="dky-one-bottom-3">-已购选课程学习-</i>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- 中间邀请注册 -->
            <div class="dky-two">
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
                        <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img07.png" alt="">
                            <p>我的作业</p>
                        </li> 
                        <li>
                            <img src="../../assets/imgs/img08.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                    </ul>
                </div>
                <!-- 订单相关 -->
                <div class="dky-three-box">
                    <h2>订单相关</h2>
                    <ul>
                        <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img07.png" alt="">
                            <p>我的作业</p>
                        </li> 
                        <li>
                            <img src="../../assets/imgs/img08.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                    </ul>
                </div>
                <!-- 我的账户 -->
                <div class="dky-three-box">
                    <h2>我的账户</h2>
                    <ul>
                        <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img07.png" alt="">
                            <p>我的作业</p>
                        </li> 
                        <li>
                            <img src="../../assets/imgs/img08.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                    </ul>
                </div>
                <!-- 自动服务 -->
                <div class="dky-three-box">
                    <h2>自动服务</h2>
                    <ul>
                        <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img07.png" alt="">
                            <p>我的作业</p>
                        </li> 
                        <li>
                            <img src="../../assets/imgs/img08.png" alt="">
                            <p>我的作业</p>
                        </li>
                         <li>
                            <img src="../../assets/imgs/img12.png" alt="">
                            <p>我的作业</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 占位 -->
            <div class="dky-four">
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 最大盒子
.dky-package {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    // 上面半圆的图
    .dky-topimg {
        width: 100%;
        height: 20%;
    }
    // 下面的内容
    .dky-content {
        width: 90%;
        height: 85%;
        position: absolute;
        top: 8%;
        left: 5%;
        background-color: white;
        border-radius: 0.05rem;
        // 关于头像的盒子
        .dky-one {
            width: 100%;
            height: 4rem;
            background-color: #fff;
            .dky-one-top {
                display: flex;
                height:2rem;
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
                        margin: 0.2rem 1.1rem 0 0.1rem;
                        // position:absolute;
                    }
                    .dky-one-min {
                        width: 0.4rem;
                    }
                }
                .dky-one-top-right{
                    position: absolute;
                    right: 0rem;
                    top: 0.15rem;
                    img{
                        width: 0.2rem;
                    }
                    .dky-one-right-img{
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
            .dky-one-bottom{
                width: 100%;
                height: 2rem;
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    li{
                        text-align: center;
                        .dky-one-bottom-1{
                            color: red;
                            font-size: 0.5rem;
                            font-weight: 900;
                        }
                        .dky-one-bottom-2{
                            font-size: 0.4rem;
                            font-weight: 600;
                        }
                        .dky-one-bottom-3{
                            color: #B3B3B3;
                            font-size: 0.24rem;
                        }
                    }
                }
            }

        }
        // 邀请的盒子
        .dky-two{
            width:100%;
            height: 0.8rem;
            border-radius: 0.4rem;
            background-color: #FC5800;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 0.6rem 0;
            
            .dky-two-2{
                font-size: 0.5rem;
            }
             
        }
        // 相关的内容
        .dky-three{
            width: 100%;
            .dky-three-box{
                width: 100%;
                height: 2.4rem;
                border-bottom: 0.05rem solid #eee;
                background-color: #fff;
                h2{
                    font-size: .4rem;
                    margin: 0.4rem 0.3rem;
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align: center;
                    border-bottom: 0.1rem;
                    li{
                        img{
                            width: 50%;
                        }
                    }
                }
            }
        }
        //  占位的盒子
        .dky-four{
            width: 100%;
            height: 1.2rem;
        }
    }
}
</style>
