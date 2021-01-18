<template>
  <div class="box">
    <p>
      <i>
        <van-icon name="arrow-left" />
      </i>
      <span>{{ this.tet }}</span>
      <i class="icon-m">
        <van-icon name="star-o" />
      </i>
      <i>
        <van-icon name="ellipsis" @click="fenX"/>
      </i>
    </p>
  </div>
</template>

<script>
export default {
  // 组件参数 接收来自父组件的数据
  props: ['tet'],
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
  methods: {
    fenX(){
      this.$emit('fenX')
    }
  },
  // 计算属性
  computed: {}
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 0.8rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  p {
      line-height: 0.4rem;
      text-align: center;
    span {
      font-size: 0.32rem;
      text-align: center;
      margin: 0 2.38rem;
    }
    .van-icon {
      font-size: 0.28rem;
    }
    .icon-m {
        margin-right: 0.2rem;
    }
  }
}
</style>
