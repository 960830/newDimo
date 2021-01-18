<template>
  <div class="quan-box">
    <p>领券</p>
    <div>立减100</div>
    <div>立减200</div>
    <div>立减500</div>
    <p>
      <van-icon name="ellipsis" />
    </p>
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
    return {};
  },
  // 侦听器
  watch: {},
  // 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  created() {},
  //  el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  //  如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  mounted() {},
  // 组件方法
  methods: {},
  // 计算属性
  computed: {}
};
</script>

<style scoped>
.quan-box {
  width: 100%;
  height: 1rem;
  border-bottom: 0.22px solid #fafafa;
  font-size: 0.22rem;
  display: flex;
  align-items: center;
  padding-left: 0.16rem;
  box-sizing: border-box;
}

.quan-box > p {
  color: #8f8f8f;
  margin-right: 0.3rem;
}

.quan-box > div {
  width: 1.3rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
  color: red;
  border: 0.01rem solid red;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
}

.quan-box > p > .van-icon {
  margin-left: 1.34rem;
}
</style>
