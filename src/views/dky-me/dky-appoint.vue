<template>
    <!-- 我的预约 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <div>
            <van-tabs v-model="active">
                <van-tab title="待上课">内容 1</van-tab>
                <van-tab title="已上课">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            active:"",
        }
    },
};
</script>

<style lang="scss" scoped></style>
