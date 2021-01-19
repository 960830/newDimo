<template>
    <!-- 关注 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <div>
            <div class="dky-box">
                <div class="dky-left">
                    <img src="../../assets/imgs/avatar.jpg" alt="" />
                </div>
                <div class="dky-center">
                    <p>李湘老师<i>已关注</i></p>
                    <p>
                        <span>女</span>
                        <span>32岁</span>
                        <span>10年教龄</span>
                    </p>
                </div>
                <div class="dky-right">
                    <button>查看情况</button>
                </div>
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
.dky-box {
    width: 90%;
    height: 1.5rem;
    background-color: white;
    border-radius:.1rem;
    border: 0.01rem solid #eee;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .dky-left {
        flex: 1;
        margin-left: .2rem;
        img {
            width: 1rem;
        }
    }
    .dky-center {
        flex: 3;
        p {
            display: flex;
            i {
                display: block;
                font-size: 0.2rem;
                color: #fe5816;
                margin-left: .2rem;
            }
            span{
                margin-right: .2rem;
                color: #ccc;
            }
        }

    }
    .dky-right {
        flex: 1;
        height: 1rem;
        button {
            width: 1.5rem;
            height: .5rem;
            margin-top: 0.3rem;
            background-color: #F65807;
            color: white;
            border: none;
            margin-right: .2rem;
        }
    }
}
</style>
