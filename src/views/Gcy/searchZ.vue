<template>
  <div>
    <search />
    <ul class="item-box">
      <li>
        <div class="item-img">
          <img src="../../../public/img/tu_11.jpg" alt />
        </div>
        <div class="item-tet">
          <div class="tet-top">
            <div class="tet-quan">券</div>
            <h3>如何成为旅游体验师</h3>
          </div>
          <p class="tet-B">845人已报名</p>
          <p class="tet-price">￥8452</p>
        </div>
      </li>
      <li>
        <div class="item-img">
          <img src="../../../public/img/tu_11.jpg" alt />
        </div>
        <div class="item-tet">
          <div class="tet-top">
            <div class="tet-quan">券</div>
            <h3>如何成为旅游体验师</h3>
          </div>
          <p class="tet-B">845人已报名</p>
          <p class="tet-price">￥8452</p>
        </div>
      </li>
      <li>
        <div class="item-img">
          <img src="../../../public/img/tu_11.jpg" alt />
        </div>
        <div class="item-tet">
          <div class="tet-top">
            <div class="tet-quan">券</div>
            <h3>如何成为旅游体验师</h3>
          </div>
          <p class="tet-B">845人已报名</p>
          <p class="tet-price">￥8452</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import search from "@/components/search.vue";
export default {
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { search },
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

<style lang="scss" scoped>
.item-box {
  width: 100%;
  height: 2.1rem;
}
li {
  width: 6.9rem;
  margin: 0 auto;
  height: 2.1rem;
  display: flex;
  padding: 0.3rem 0.3rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ddd;
}
.item-img {
  width: 2.7rem;
  height: 2.1rem;

  img {
    width: 100%;
    height: 1.5rem;
  }
}
.item-tet {
  width: 4.6rem;
  height: 1.1rem;
  padding: 0.06rem 0 0 0.24rem;
  box-sizing: border-box;

  .tet-top {
    display: flex;
    .tet-quan {
      width: 0.3rem;
      height: 0.3rem;
      border: 0.01rem solid red;
      border-radius: 0.05rem;
      text-align: center;
      line-height: 0.3rem;
      font-size: 0.2rem;
      color: red;
      margin: 0.1rem 0.12rem 0 0;
    }
    h3 {
      font-size: 0.3rem;
    }
  }
  .tet-B {
    font-size: 0.18rem;
    color: #656565;
    margin-top: 0.22rem;
  }
  .tet-price {
    font-size: 0.24rem;
    color: red;
    margin-top: 0.29rem;
  }
}
</style>