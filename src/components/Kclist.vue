<template>
  <div>
    <van-nav-bar title="课程列表">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item title="分类">
      <ul class="fen-item">
        <li>
          <p>初一</p>
          <p>数学</p>
        </li>
        <li>
          <p>初二</p>
          <p>英语</p>
        </li>
        <li>
          <p>初三</p>
          <p>化学</p>
        </li>
      </ul>
      </van-dropdown-item>
      <van-dropdown-item title="排序" class="pai-item">
        <p>回家</p>
        <p>放学</p>
        <p>睡觉</p>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" class="shai-item">
        <div class="shai-fen">
          <p>类别</p>
          <ul>
            <li>全部</li>
            <li>直播课</li>
            <li>公开课</li>
            <li>一对一</li>
          </ul>
        </div>
        <div class="shai-fen">
          <p>讲师</p>
          <ul>
            <li>全部</li>
            <li>杨幂</li>
            <li>宋祖儿</li>
            <li>迪丽热巴</li>
            <li>李沁</li>
          </ul>
        </div>
        <div class="shai-fen">
          <p>价格</p>
          <ul>
            <li>全部</li>
            <li>10元</li>
            <li>20元</li>
            <li>15元</li>
          </ul>
        </div>
        <div class="shai-but">
          <van-button>重置</van-button>
          <van-button type="warning">确认</van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
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
.box {
  width: 100%;
  margin-top: 0.28rem;
  .box-p {
    font-size: 0.32rem;
    text-align: center;
  }
}
.fen-item {
  width: 100%;
  li {
    width: 100%;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.1rem 0.1rem;
    box-sizing: border-box;
    margin: 0.4rem 0;
  }
}
.pai-item {
  width: 100%;
  font-size: 0.3rem;
  text-align: center;
  p {
    margin: 0.5rem 0;
  }
}
.shai-fen {
  width: 100%;
  padding: 0.24rem 0.28rem;
  box-sizing: border-box;
  p {
    font-size: 0.22rem;
    color: #656565;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.2rem;
    li {
      width: 23%;
      height: 0.6rem;
      font-size:0.26rem; 
      background: #ddd;
      text-align: center;
      line-height: 0.6rem;
      margin-top: 0.24rem;
    }
  }
}
.shai-but {
  width: 100%;
  height: 1.02rem;
  .van-button {
    width: 50%;
    height: 100%;
  }
}
</style>
