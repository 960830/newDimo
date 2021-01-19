<template>
    <!-- 开通会员 -->
    <div>
        <!--  头部组件 -->
        <headers />
        <div class="dky-big">
            <div class="dky-box">
                <div class="dky-top">
                    <div class="dky-top1">
                        <img src="../../assets/imgs/huiyuan.png" alt="" />
                    </div>
                    <div class="dky-top2">
                        <p>木木</p>
                        <span>开通会员想更多权限</span>
                    </div>
                </div>
                <div class="dky-center">
                    <ul>
                        <li>
                            <i>包月</i>
                            <p>￥<span>15.00</span></p>
                        </li>
                        <li>
                            <i>包月</i>
                            <p>￥<span>15.00</span></p>
                        </li>
                        <li>
                            <i>包月</i>
                            <p>￥<span>15.00</span></p>
                        </li>
                    </ul>
                </div>
                <div class="dky-bottom">
                    <h2>会员特权</h2>
                    <ol>
                        <li>
                            <img src="../../assets/imgs/img09.png" alt="" />
                            <p>课程全场八折</p>
                        </li>
                        <li>
                            <img src="../../assets/imgs/img09.png" alt="" />
                            <p>会员课程免费看</p>
                        </li>
                    </ol>
                </div>
            </div>

            <div class="dky-but">
                立即购买
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
};
</script>

<style lang="scss" scoped>
// 
.dky-box {
    width: 96%;
    margin: 0 auto;
    .dky-top {
        height: 1rem;
        display: flex;
        .dky-top1 {
            width: 2rem;
            height: 1rem;
            text-align: center;
            img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
        }
        .dky-top2 {
            p {
                margin-bottom: 0.2rem;
                font-weight: 700;
            }
            span {
                color: #ccc;
            }
        }
    }
    .dky-center {
        width: 100%;
        height: 2rem;
        background-color: #f8f8f8;
        ul {
            height: 2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
                height: 1.7rem;
                width: 1.6rem;
                border-radius: 0.1rem;
                background-color: white;
                text-align: center;
                i {
                    display: block;
                    margin: 0.3rem 0;
                }
                p {
                    color: red;
                    font-weight: 600;
                    font-size: 0.4rem;
                }
            }
        }
    }
    .dky-bottom {
        margin-top: 0.2rem;
        h2 {
            height: 0.6rem;
            line-height: 0.6rem;
        }
        ol {
            margin-top: 0.3rem;
            display: flex;
            justify-content: space-around;
            color: #ccc;
            li {
                text-align: center;
            }
        }
    }
}
.dky-but {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: white;
    background-color: #EB6100;
}
</style>
