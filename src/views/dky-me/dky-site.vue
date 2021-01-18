<template>
    <div>
        <!-- 头部组建 -->
        <headers />
        <!-- 没有地址时显示 -->
        <div v-if="show1">
            <van-empty description="暂无地址" />
        </div>
        <div v-else>
            <div class="dky-box">
                <div class="dky-box-one">
                    <p>木木 154****6478</p>
                    <p>北京海淀区西二旗天才聚集地</p>
                </div>
                <div class="dky-box-two">
                    <p>
                        <van-radio-group v-model="radio">
                            <van-radio name="1">默认地址</van-radio>
                        </van-radio-group>
                    </p>
                    <p class="dky-box-two1">
                        <button>编辑</button>
                        <button @click="del" :style="{color:sc?'red':''}">删除</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
import { Dialog } from 'vant';
export default {
    components: { headers },
    data() {
        return {
            radio: "0",
            sc:false,
            show1:false,
        };
    },
    methods: {
        del() {
            this.sc = true
            Dialog.confirm({
                title: "提示",
                message: "收货地址删除不可恢复，确定删除吗？",
            })
                .then(() => {
                    // on confirm
                    this.sc = false
                })
                .catch(() => {
                    // on cancel
                    this.sc = false

                });
        },
    },
};
</script>

<style lang="scss" scoped>
.dky-box {
    width: 96%;
    height: 2.6rem;
    margin: 0 auto;
    border-bottom: 0.2rem solid #eee;
    background-color: #fafafa;
    .dky-box-one {
        width: 100%;
        height: 1.5rem;
        border-bottom: 0.02rem solid #ccc;
        p {
            margin: 0.2rem 0.3rem;
        }
    }
    .dky-box-two {
        height: 1rem;
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        .dky-box-two1 {
            button {
                width: 1.5rem;
                height: 0.6rem;
                line-height: 0.6 rem;
                margin-right: 0.3rem;
                background-color: white;
                border: 0.02rem solid #ccc;
                color: #ccc;
                border-radius: 0.3rem;
            }
        }
    }
}
</style>
