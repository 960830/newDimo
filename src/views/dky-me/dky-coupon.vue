<template>
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 头部导航 -->
        <div>
            <van-tabs v-model="active">
                <van-tab title="全部"></van-tab>
                <van-tab title="以使用"></van-tab>
                <van-tab title="未使用"></van-tab>
                <van-tab title="已过期"></van-tab>
            </van-tabs>
        </div>
        <!-- 优惠卡片 -->
        <div>
            <div class="dky-box">
                <div class="dky-left">
                    <i>￥</i>
                    <p>50</p>
                </div>
                <div class="dky-center">
                    <h2>现金卷</h2>
                    <p>限品类：<span>初三英语</span></p>
                    <span>2018.02.14 - 2018.02.20</span>
                </div>
                <div class="dky-right">
                    立即使用
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style lang="scss" scoped>

.dky-box{
    width: 96%;
    height: 2rem;
    margin: 0 auto;
    display: flex;
    border: .02rem solid #fafafa;
    background-color: rgb(247, 247, 247);
    .dky-left{
        flex:3;
        line-height: 2rem;
        display: flex;
        color: #EC9660;
        i{
            display: block;
            margin-top: .2rem;
        }
        p{
            font-size: 1rem;
        }

    }
    .dky-center{
        flex:6;
        color: #ccc;
        h2{
            font-size: .4rem;
            margin: .2rem 0;
            color: black;
        }
        p{
            margin-bottom: .2rem;
        }

    }
    .dky-right{
        flex:3;
        background-color: #EB6100;
        color: white;
        line-height: 2rem;
        text-align: center;
        font-size: .4rem;
        border-top-right-radius: .1rem;
        border-bottom-right-radius: .1rem;

    }
}
</style>
