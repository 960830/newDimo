<template>
    <!-- 会员列表 -->
    <div>
        <!-- 头部组建 -->
        <headers />
        <!-- 卡片 -->
        <div>
            <!--卡片 -->
            <div class="dky-box">
                <div>
                    <img src="../../assets/imgs/huiyuan.png" />
                </div>
                <div class="dky-center">
                    <h1>青铜会员</h1>
                    <p>年卡仅需132元</p>
                    <p>仅限18 岁以下学生购买</p>
                </div>
                <p>
                    <button @click="kaimember">立即开通</button>
                </p>
            </div>
            <div class="dky-box">
                <div>
                    <img src="../../assets/imgs/huiyuan.png" />
                </div>
                <div class="dky-center">
                    <h1>白银会员</h1>
                    <p>年卡仅需132元</p>
                    <p>仅限18 岁以下学生购买</p>
                </div>
                <p>
                    <button @click="kaimember">立即开通</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    methods: {
        kaimember(){
            this.$router.push({path:"/dky-kaimember"})
        }
    },
};
</script>

<style lang="scss" scoped>
.dky-box{
    width: 100%;
    height: 2rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: .1rem solid #F8F8F8;
    img{
        flex: 2;
        width: 1rem;
    }
    .dky-center{
        p{
            color:#cccccc;
            margin: .1rem 0;
        }
    }
    button{
        background-color: #CCA57C;
        border: none;
        width: 1.5rem;
        height: .7  rem;
        border-radius: .05rem;
    }
}
</style>
