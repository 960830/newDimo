<template>
    <div>
        <div class="search">
            <van-icon name="arrow-left" size="30" />
            <van-search shape="round" placeholder="请输入搜索关键词" />
            <span>取消</span>
        </div>
    </div>
</template>

<script>
    export default {
        // 组件参数 接收来自父组件的数据
        props: [],
        // 局部注册的组件
        components: {},
        // 组件状态值
        data() {
            return {

            };
        },
        // 侦听器
        watch: {},
        // 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
        created() {

        },
        //  el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
        //  如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
        mounted() {

        },
        // 组件方法
        methods: {

        },
        // 计算属性
        computed: {

        }
    };
</script>

<style scoped>
.search {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0.28rem;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #ddd;
    }
    .van-search {
        width: 5.2rem;
        height: 0.4rem;
    }
    span {
        width: 0.58rem;
        text-align: center;
        font-size: 0.14rem;
        color: #d1d1d1;
    }
</style>