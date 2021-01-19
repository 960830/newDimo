<template>
    <!-- 我的作业 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <div>
            <van-tabs v-model="active">
                <van-tab title="未上传">内容 1</van-tab>
                <van-tab title="待批阅">内容 2</van-tab>
                <van-tab title="已完成">内容 3</van-tab>
               
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
            active:""
        }
    },

};
</script>

<style lang="scss" scoped></style>
