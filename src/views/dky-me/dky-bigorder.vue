<template>
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 头部导航 -->
        <van-tabs v-model="active">
            <van-tab title="全部标签"></van-tab>
            <van-tab title="待支付"></van-tab>
            <van-tab title="待收货"></van-tab>
            <van-tab title="已完成"></van-tab>
            <van-tab title="已取消"></van-tab>
        </van-tabs>
        <!-- 下方列表 -->
        <div class="dky-big">
            <ul>
                <li>
                    <div class="dky-big-one">
                        <p>订单编号：<i>110110110110110110110</i></p>
                        <span>待支付</span>
                    </div>
                    <div class="dky-big-two">
                        <img src="../../assets/imgs/tu_30.jpg" alt="">
                        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
                    </div>
                    <div class="dky-big-there">
                        <p>
                            <i>2018-02-14</i>
                            <i>13:14:52</i>
                            共<span>1</span>件商品，实际付款：
                        </p>
                        <span>￥521.00</span>
                    </div>
                    <div class="dky-big-four">
                        <p>你还有21时09分25秒时间来支付订单超时件自动取消</p>
                        <button>立即支付</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            active:0,
        }
    },
};
</script>

<style lang="scss" scoped>
body{
    background-color: #F8F8F8;
}
.dky-big{
    width: 98%;
    margin: 0 auto;
    height: 4.2rem;
    background-color: white;
    border-bottom: .2rem solid #eee;
    .dky-big-one{
        height: .5rem;
        line-height: .5rem;
        display: flex;
        justify-content: space-between;
        p{
            color: #C2C2C2;
        }
        span{
            color: #FD9DA0;
        }
    }
    .dky-big-two{
        width: 100%;
        height: 2rem;
        display: flex;
        background-color: #FAFAFA;
        img{
            flex: 1;
            width: 35%;
            border-radius: .2rem;
        }
        p{
           flex: 5;
           margin-top: .5rem;
        }
    }
    .dky-big-there{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        border-bottom: .02rem solid #ccc;
        display:flex;
        p{
            color: #C2C2C2;
            display: flex;
            i{
                display:block;
                margin-right: .13rem;
            }
        }
    }
    .dky-big-four{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content:space-between;
        p{
            width: 60%;
            color: #FF8491;
            margin-top: .2rem;
        }
        button{
            margin-top: .25rem;
            width: 2.5rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            color: #F4C088;
            border: .02rem solid #F4C088;
            background: white;
            border-radius: .1rem;
            margin-right: .1rem;
        }
    }
}
</style>
