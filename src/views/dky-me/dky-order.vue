<template>
    <div class="dky-box">
        <headers />
        <div>
            <!-- 支付后消失的盒子 -->
            <div class="dky-one" v-show="one">
                <span>待支付</span>
                <p>您还有21时09分25秒时间来付款，订单超时将自动取消</p>
            </div>
            <!-- 支付后变成已完成 -->
            <div class="dky-one1" v-show="one1">
                <i>已完成</i>
            </div>
        </div>

        <!-- 书本信息 -->
        <div class="dky-two">
            <img src="../../assets/imgs/tu_30.jpg" alt="" />
            <div>
                <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
                <span>￥119.00</span>
            </div>
        </div>
        <!-- 订单编号 -->
        <div class="dky-three">
            <ul>
                <li>订单编号：1101120012819278</li>
                <li>下单时间：2018-02-14 13:14:52</li>
                <li>支付方式：在线支付</li>
            </ul>
        </div>
        <!-- 价格详情 -->
        <div class="dky-four">
            <ol>
                <li>商品原价：￥1119.00</li>
                <li>会员：￥20.00</li>
                <li>优惠卷：￥20.00</li>
                <li>实付金额：<span>￥79.00</span></li>
            </ol>
        </div>
        <!-- 按钮前 -->
        <div class="dky-five" v-show="one">
            <div class="dky-five-top" @click="pay">立即支付</div>
            <div class="dky-five-bottom" @click="mpay">取消订单</div>
        </div>
        <!-- 按钮前 -->
        <div class="dky-five1" v-show="one1">
            <div class="dky-five-top" @click="goevaluate">去评价</div>
        </div>
        <!-- q嵌入的内容 -->
        <van-overlay :show="show" @click="goevaluate">
            <div class="wrapper">
                <div class="block">
                    <div class="dky-in">
                        <div class="dky-in1">
                            <span>星级：</span><van-rate v-model="value" />
                        </div>
                        <div class="dky-in2">
                            <p>标签：</p>
                            <div>
                                <ul>
                                    <li>效果好(190)</li>
                                    <li>效果好(190)</li>
                                    <li>效果好(190)</li>
                                    <li>效果好(190)</li>
                                    <li>效果好(190)</li>
                                </ul>
                            </div>
                        </div>
                        <div class="dky-in3">
                            <span>内容：</span>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div class="dky-in4">
                            <div
                                class="dky-in4-left"
                                @click.stop="show = false"
                            >
                                取消
                            </div>
                            <div>确定</div>
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import { ref } from "vue";
import { Dialog } from "vant";
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            one: true,
            one1: false,
            show: false,
            value: 0,
        };
    },

    methods: {
        pay() {
            this.one = false;
            this.one1 = true;
        },
        mpay() {
            Dialog.confirm({
                title: "提示",
                message: "订单取消后不可恢复，确认取消吗？",
            })
                .then(() => {
                    // on confirm
                })
                .catch(() => {
                    // on cancel
                });
        },
        goevaluate() {
            this.show = true;
        },
        setup() {
            const value = ref(3);
            return { value };
        },
    },
};
</script>

<style lang="scss" scoped>
.dky-box {
    width: 100%;
    height: 100%;
    position: relative;
    .dky-one {
        color: red;
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;
        width: 100%;
        height: 1.8rem;
        border-bottom: 0.02rem solid #eee;
    }
    .dky-one1 {
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;
        width: 100%;
        height: 0.8rem;
        border-bottom: 0.02rem solid #eee;
        i {
            color: black;
        }
    }
    .dky-two {
        width: 100%;
        height: 1.8rem;
        padding: 0.2rem 0.2rem;
        box-sizing: border-box;
        border-bottom: 0.02rem solid #eee;
        display: flex;
        img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0.1rem;
        }
        div {
            p {
                padding: 0.1rem 0.3rem;
                font-size: 0.3rem;
            }
            span {
                color: #c2c2c2;
                margin-left: 0.2rem;
            }
        }
    }
    .dky-three {
        width: 100%;
        height: 2rem;
        border-bottom: 0.02rem solid #eee;
        color: #b9b9b9;
        ul {
            li {
                padding: 0.1rem 0.2rem;
            }
        }
    }
    .dky-four {
        width: 100%;
        text-align: right;
        ol {
            li {
                padding: 0.2rem;
                span {
                    color: red;
                }
            }
        }
    }
    .dky-five {
        width: 3rem;
        height: 3rem;
        position: absolute;
        right: 0.2rem;
        bottom: 0.1rem;
        text-align: center;
        .dky-five-top {
            font-size: 0.4rem;
            width: 3rem;
            line-height: 1rem;
            color: #ed9328;
            height: 1rem;
            border: 0.05rem solid #ed9328;
            border-radius: 0.1rem;
            margin: 0.8rem 0.1rem 0.3rem 0;
        }
        .dky-five-bottom {
            // font-size: .4rem;
            width: 3rem;
            line-height: 0.5rem;
            color: #a9a9a9;
            height: 0.5rem;
            border: 0.05rem solid #a9a9a9;
            border-radius: 0.1rem;
            margin: 0.3rem 0.1rem 0.3rem 0;
        }
    }
    .dky-five1 {
        width: 3rem;
        height: 3rem;
        position: absolute;
        right: 0.2rem;
        bottom: 0.1rem;
        text-align: center;
        .dky-five-top {
            font-size: 0.4rem;
            width: 3rem;
            line-height: 1rem;
            color: #ed9328;
            height: 1rem;
            border: 0.05rem solid #ed9328;
            border-radius: 0.1rem;
            margin: 0.8rem 0.1rem 0.3rem 0;
        }
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .block {
        width: 7rem;
        height: 9rem;
        border-radius: 0.5rem;
        background-color: #fff;
        .dky-in4 {
            width: 100%;
            display: flex;
            text-align: center;
            div {
                width: 50%;
                height: 0.9rem;
                line-height: 1rem;
                border-top: 0.02rem solid #eee;
                color: #eb6100;
            }
            .dky-in4-left {
                border-right: 0.02rem solid #eee;
            }
        }
        .dky-in {
            width: 6.4rem;
            height: 7rem;
            margin: 1rem auto 0;
            background-color: pink;
        }
        .dky-in2 {
            margin: 0.8rem 0;
            display: flex;
            p {
                flex: 2.2;
            }
            div {
                flex: 12;
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        width: 1.61rem;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        border: 0.02rem solid #eb6100;
                        color: #eb6100;
                        margin-bottom: 0.2rem;
                        margin-right: 0.15rem;
                    }
                }
            }
        }
        .dky-in3 {
            display: flex;
            span {
                flex: 2;
            }
            textarea {
                flex: 8;
            }
        }
    }
}
</style>
