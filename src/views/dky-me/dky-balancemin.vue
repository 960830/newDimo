<template>
    <!-- 余额明细 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 明细 -->
        <div>
            <div class="dky-box">
                <div class="dky-top">
                    <p>充值</p>
                    <span>+ 30：00</span>
                </div>
                <div class="dky-bottom">
                    <p>余额：60：00</p>
                    <p>2019-12-20</p>
                </div>
            </div>
            <div class="dky-box">
                <div class="dky-top">
                    <p>消费《雅思七天冲刺》</p>
                    <span>- 30：00</span>
                </div>
                <div class="dky-bottom">
                    <p>余额：60：00</p>
                    <p>2019-12-20</p>
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
    width: 100%;
    height: 1.6rem;
    margin-bottom:.3rem;
    .dky-top {
        width: 96%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        span {
            color: red;
        }
    }
    .dky-bottom {
        width: 96%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        color: #ccc;
    }
}
</style>
