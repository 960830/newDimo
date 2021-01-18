<template>
    <div>
        <!-- 头部组件 -->
        <headers />
        <div class="dky-sex">
            <!-- 男 -->
            <van-row class="dky-sex-1">
                <van-col span="20">男</van-col>
                <van-col span="4">
                    <van-radio-group v-model="radio">
                        <van-radio name="男"></van-radio>
                    </van-radio-group>
                </van-col>
            </van-row>
            <!-- 女 -->
            <van-row class="dky-sex-1">
                <van-col span="20">女</van-col>
                <van-col span="4">
                    <van-radio-group v-model="radio">
                        <van-radio name="女"></van-radio>
                    </van-radio-group>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            radio: "",
        };
    },
};
</script>

<style lang="scss" scoped>
.dky-sex {
    margin-top: 0.4rem;
    .dky-sex-1 {
        margin: 0.2rem;
        display: block;
        font-size: 0.5rem;
    }
}
</style>
