<template>
    <!-- 我的余额 -->
    <div>
        <!-- 头部 -->
        <headers />

        <div class="dky-package">
            <!-- 账户余额 -->
            <div class="dky-top">
                <P>账户余额：<span>5.01 学习币</span></P>
            </div>
            <!-- 分类 -->
            <div class="dky-center">
                <ul>
                    <li>
                        <div>6学习币</div>
                        <div>
                            <p>￥6.00</p>
                        </div>
                    </li>
                    <li>
                        <div>6学习币</div>
                        <div>
                            <p>￥6.00</p>
                        </div>
                    </li>
                    <li>
                        <div>6学习币</div>
                        <div>
                            <p>￥6.00</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 说明 -->
            <div class="dky-bottom">
                <h2>充值说明</h2>
                <div>
                    <ol>
                        <li>
                            1.学习币是网校中专有的一-种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品,比如课程、电子书。
                        </li>
                        <li>
                            2.充值后没有使用期限，但无法提现，退款和转赠他人。
                        </li>
                        <li>3.如遇到无法充值、充值失败等问题,请联系客服。</li>
                    </ol>
                    <van-radio-group v-model="radio">
                        <van-radio name="1" class="dky-radio"
                            ><p>
                                阅读同意 <span>重置服务协议</span>
                            </p></van-radio
                        >
                    </van-radio-group>
                </div>
            </div>
        </div>
        <button @click="xian">立即充值</button>
        <!-- 弹出框 -->
        <van-action-sheet v-model="show" title="选择支付方式">
            <div class="content">
                <van-radio-group v-model="radios">
                    <van-radio name="1" class="dky-radios">微信</van-radio>
                    <van-radio name="2" class="dky-radios">支付宝</van-radio>
                </van-radio-group>
                <div class="dky-but">立即充值</div>
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
import { ActionSheet } from "vant";
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            radio: "0",
            show: false,
            radios:"0", 
        };
    },
    methods: {
        xian() {
            this.show = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.dky-package {
    width: 96%;
    margin: 0 auto;
    .dky-top {
        font-size: 0.4rem;
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        span {
            color: blue;
        }
    }
    .dky-center {
        width: 100%;
        height: 4rem;
        background-color: rgb(247, 245, 245);
        ul {
            li {
                font-size: 0.4rem;
                font-weight: 600;
                width: 94%;
                margin: 0 auto;
                height: 1rem;
                border-radius: 0.1rem;
                border: none;
                line-height: 1rem;
                display: flex;
                justify-content: space-around;
                margin-bottom: 0.3rem;
                color: #6e6b6c;
                border: 0.02rem solid #f16102;
                background-color: #feede3;
                p {
                    color: #fe0102;
                }
            }
        }
    }
    .dky-bottom {
        overflow: hidden;
        h2 {
            height: 1rem;
            width: 100%;
            line-height: 1rem;
        }
        ol {
            color: #ccc;
        }
        .dky-radio {
            height: 1rem;
        }
    }
}
button {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: #eb6100;
    color: white;
    border: none;
    font-size: 0.4rem;
}

.content {
    width: 100%;
    height: 3rem;
    .dky-radios{
        width: 100%;
        height: 1rem;
    }
    .dky-but {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background-color: #eb6100;
        color: white;
        border: none;
        font-size: 0.4rem;
    }
}
/deep/.van-popup--safe-area-inset-bottom {
}
</style>
