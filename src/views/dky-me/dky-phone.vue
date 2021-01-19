<template>
<!-- 修改名字 -->
    <div class="dky-box">
        <!-- 添加头部组件 -->
        <headers @xphone="xphone"/>
        <div class="dky-name">
            <input v-model="value" placeholder="请输入手机号" />
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue"
export default {
    components:{headers},
    data() {
        return {
            value: "",
        };
    },
    methods: {
        xphone() {
            console.log(1);
            this.$store.commit("xphone",this.value)
        }
    }

};
</script>

<style lang="scss" scoped>
.dky-box {
    background-color: #f8f8f8;
    overflow: hidden;
    .dky-name {
        display:inline-block;
        margin-top: 0.5rem;
        background-color: white;
        input{
            width: 100vw;
            height: 1rem;
            border: none;
            font-size: .4rem;
            padding-left: .5rem;
        }
    }
}
</style>
