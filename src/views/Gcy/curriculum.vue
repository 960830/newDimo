<template>
  <div>
    <van-sticky :offset-top="0">
      <!-- 搜索 -->
      <van-search shape="round" placeholder="请输入搜索关键词" />
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
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <div class="curric">
      <ul v-for="(item,index) in curriculumList" :key="index" @click="dJx(item.id)">
        <li>
          <img :src="item.cover_img" alt="">
        </li>
        <li>
          <p>{{ item.title }}</p>
          <p>
            <span>{{ item.sales_num }}人已报名</span>
            <span >{{ item.has_buy=0?"":"免费" }}</span>
          </p>
        </li>
      </ul>
    </div>
    <ban />
  </div>
</template>

<script>
  import Kclist from "@/components/Kclist.vue";
  import ban from "@/components/tabber.vue";
  import { curriculum,Details } from "@/util/api.js";
  export default {
    // 组件参数 接收来自父组件的数据
    props: [],
    // 局部注册的组件
    components: { Kclist, ban },
    // 组件状态值
    data() {
      return {
        curriculumList: []
      };
    },
    // 侦听器
    watch: {},
    // 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
    async created() {
      let obj = {
        page:1,
        limit:10
      }
      const {data:res} = await curriculum(obj)
      if(res.code !== 200) return this.$toast.fail('数据获取失败')
      this.curriculumList = res.data.list
      console.log(this.curriculumList);
    },
    //  el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
    //  如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
    mounted() {
    },
    // 组件方法
    methods: {
      async dJx(id){
        this.$router.push({
          path:'/xaingq',query:{id}})
      }
    },
    // 计算属性
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .fen-item {
    width: 100%;
  }

  .fen-item>li {
    width: 100%;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.1rem 0.1rem;
    box-sizing: border-box;
    margin: 0.4rem 0;
  }

  .pai-item {
    width: 100%;
    font-size: 0.3rem;
    text-align: center;
  }

  .pai-item>p {
    margin: 0.5rem 0;
  }

  .shai-fen {
    width: 100%;
    padding: 0.24rem 0.28rem;
    box-sizing: border-box;
  }

  .shai-fen>p {
    font-size: 0.22rem;
    color: #656565;
  }

  .shai-fen>ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }

  .shai-fen>ul>li {
    width: 23%;
    height: 0.6rem;
    font-size: 0.26rem;
    background: #ddd;
    text-align: center;
    line-height: 0.6rem;
    margin-top: 0.24rem;
  }

  .curric {
    width: 100%;
    height: 2rem;
    margin-top: 0.3rem;
  }

  .curric>ul {
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 0.1rem;
  }

  .curric>ul>li:nth-child(1) {
    width: 40%;
    height: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .curric>ul>li:nth-child(1)>img {
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }
  .curric>ul>li:nth-child(2) {
    width: 60%;
    height: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .curric>ul>li:nth-child(2)>p:nth-child(1){
    font-size: 0.36rem;
  }
  .curric>ul>li:nth-child(2)>p:nth-child(2){
    margin-top: 0.74rem;
  }
  .curric>ul>li:nth-child(2)>p:nth-child(2)>span:nth-child(1){
    font-size: 0.28rem;
    overflow: hidden;
  }
  .curric>ul>li:nth-child(2)>p:nth-child(2)>span:nth-child(2){
    font-size: 0.32rem;
    float: right;
  }
</style>