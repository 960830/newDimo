<template>
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 兑换输入框 -->
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="卡号"
                    label="卡号"
                    placeholder="请输入学习卡号"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="请输入学习卡密码"
                />
                <div style="margin: 16px;">
                    <van-button
                        round
                        block
                        type="info"
                        native-type="submit"
                        @click="show"
                        >立即兑换</van-button
                    >
                </div>
            </van-form>
        </div>
        <!-- 带地址的遮盖层 -->
        <van-overlay :show="show1">
            <div class="wrapper">
                <div class="block">
                    <div class="dky-in">
                        <h2>提示</h2>
                        <p class="dky-in1">
                            学习卡中包含食物商品，请选择你的收货地址
                        </p>
                        <div class="dky-in2">
                            <p><i>木木</i>：<span>154****6478</span></p>
                            <p class="dky-in3">
                                北京海淀区西二旗天才聚集地
                                <a href="/dky-site">更换地址</a>
                            </p>
                        </div>
                        <div class="dky-in4">
                            <div
                                class="dky-in4-left"
                                @click.stop="show1 = false"
                            >
                                取消
                            </div>
                            <div @click="add">确定</div>
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import headers from "../../components/headers.vue";
import { Dialog } from "vant";
export default {
    components: { headers },
    data() {
        return {
            username: "",
            password: "",
            show1: false,
        };
    },
    methods: {
        onSubmit() {},
        show() {
            if (this.username != "") {
                Dialog.alert({
                    title: "提示",
                    message: "兑换成功",
                }).then(() => {
                    // on close
                });
            } else {
                Dialog.confirm({
                    title: "提示",
                    message: "学习卡中包含食物商品，请设置你的收货地址",
                    confirmButtonText: "去设置",
                    cancelButtonText: "放弃兑换",
                })
                    .then(() => {
                        // on confirm
                        console.log(1);
                        this.show1 = true;
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        },
        add() {
            this.show1=false;
            Dialog.alert({
                title: "提示",
                message: "兑换成功",
            }).then(() => {
                // on close
            });
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/.van-button--info {
    background-color: #eb6100;
    border-radius: 0.1rem;
    border: 0.02rem solid #eb6100;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.block {
    width: 6rem;
    height: 4.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    .dky-in {
        width: 100%;
        height: 100%;
        position: relative;
        h2 {
            width: 100%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: 0.4rem;
        }
        .dky-in1 {
            color: #ccc;
            font-size: 0.25rem;
            text-align: center;
            margin: 0.2rem 0;
        }
        .dky-in2 {
            margin: 0.3rem 0.4rem;
            .dky-in3 {
                margin: 0.3rem 0;
                a {
                    color: #eb8b4f;
                    border-bottom: 0.01rem solid #eb8b4f;
                }
            }
        }
        .dky-in4 {
            border-top: 0.02rem solid #eee;
            position: absolute;
            bottom: 0rem;
            width: 100%;
            display: flex;
            text-align: center;
            div {
                width: 50%;
                height: 0.9rem;
                line-height: 1rem;
                color: #eb6100;
            }
            .dky-in4-left {
                border-right: 0.02rem solid #eee;
            }
        }
    }
}
</style>
