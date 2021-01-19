<template>
  <div class="box">
    <touD :tet="tet" @fenX="fenX" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banlist" :key="index">
        <img :src="item.banner_img" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="item-heard">
      <h3>雅思七日冲刺</h3>
      <p class="heard-p"><span class="heard-s heard-sp">￥</span><span class="heard-s heard-span">1998.0</span><span
          class="heard-span heard-m">免费</span><span class="heard-vip">vip专享</span></p>
      <p class="heard-t"><span>06.08 - 08.08</span><span class="t-ks">共54个课时</span><span>8763人已报名</span></p>
    </div>
    <quan />
    <van-tabs active="a">
      <van-tab title="课程详情" name="a" class="kcXq">内容 1</van-tab>
      <van-tab title="课题大纲" name="b">
        <van-collapse v-model="activeName">
          <van-collapse-item title="01 旅游体验师 （上）" name="1">内容</van-collapse-item>
          <van-collapse-item title="01 旅游体验师 （中）" name="2">内容</van-collapse-item>
          <van-collapse-item title="01 旅游体验师 （下）" name="3">内容</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="课程评价" name="c">
        <div class="pinjia">
          <div>
            <!-- <img src="@/assets/img/1.jpg" alt=""> -->
          </div>
          <div>
            <p>AU辅助</p>
            <div class="rate-box">
              <van-rate v-model="value" :size="12" color="#ffd21e" void-icon="star" void-color="#eee" />
            </div>

            <p>很棒的大大的撒的撒大的撒的撒的撒大撒大的撒的撒大撒的撒的撒的撒的挨打撒的阿瑟东</p>
            <p>2018-01-01 18:00</p>
          </div>
        </div>
        <div class="pinjia">
          <div>
            <!-- <img src="@/assets/logo.png" alt=""> -->
          </div>
          <div>
            <p>AU辅助</p>
            <div class="rate-box">
              <van-rate v-model="value" :size="12" color="#ffd21e" void-icon="star" void-color="#eee" />
            </div>

            <p>很棒的大大的撒的撒大的撒的撒的撒大撒大的撒的撒大撒的撒的撒的撒的挨打撒的阿瑟东</p>
            <p>2018-01-01 18:00</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <btn />

    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options"/>
  </div>
</template>

<script>
  import touD from "@/components/touD.vue";
  import quan from "@/components/quan.vue"
  import btn from "@/components/btn.vue"
  export default {
    // 组件参数 接收来自父组件的数据
    props: [],
    // 局部注册的组件
    components: { touD, quan, btn },
    // 组件状态值
    data() {
      return {
        tet: "课程详情",
        banlist: [],
        activeName: ['1'],
        value: 4,

        showShare: false,
        options: [
          [
            { name: '微信', icon: 'wechat' },
            { name: '微博', icon: 'weibo' },
            { name: 'QQ', icon: 'qq' },
            { name: 'QQ', icon: 'qq' },
          ]
        ]
      };
    },
    // 侦听器
    watch: {},
    // 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
    created() { },
    //  el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
    //  如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
    mounted() {
      this.bannerImg()
    },
    // 组件方法
    methods: {
      // 轮播图
      async bannerImg() {
        const { data: res } = await this.$axios.get('/api/app/banner')
        if (res.code !== 200) return this.$toast.fail('数据请求失败')
        this.banlist = res.data
      },
      // 分享
      fenX() { 
        this.showShare = true
      }
    },
    // 计算属性
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.2rem;
    height: 4.18rem;
    text-align: center;
    background-color: #39a9ed;
  }

  .van-swipe-item>img {
    width: 100%;
    height: 4.18rem;
  }

  .item-heard {
    width: 100%;
    height: 2.2rem;
    border-bottom: 0.22px solid #fafafa;
    padding: 0.38rem 0 0 0.16rem;
    box-sizing: border-box;
  }

  h3 {
    font-size: 0.28rem;
    margin-bottom: 0.2rem;
  }

  .heard-p {
    height: 0rem;
    line-height: 0rem;
    display: flex;
    align-items: center;
  }

  .heard-s {
    color: red;
  }

  .heard-sp {
    font-size: 0.18rem;
  }

  .heard-span {
    font-size: 0.24rem;
  }

  .heard-m {
    color: #009d00;
    margin-left: 0.56rem;
  }

  .heard-vip {
    display: block;
    width: 0.9rem;
    height: 0.32rem;
    background: #daae7f;
    font-size: 0.18rem;
    text-align: center;
    line-height: 0.32rem;
    margin-left: 0.3rem;
  }

  .heard-t {
    font-size: 0.18rem;
    color: #949494;
    display: flex;
    margin-top: 0.42rem;
  }

  .t-ks {
    display: block;
    width: 1.64rem;
    height: 0.22rem;
    text-align: center;
    border-left: 0.01rem solid #949494;
    border-right: 0.01rem solid #949494;
    margin: 0rem 0.16rem;
  }

  .kcXq {
    font-size: 0.22rem;
    padding: 0.26rem 0.17rem 0rem 0.38rem;
    box-sizing: border-box;
  }

  .pinjia {
    width: 100%;
    height: 2.36rem;
    padding: 0.32rem 0.3rem 0rem 0.3rem;
    box-sizing: border-box;
    display: flex;
  }

  .pinjia>div:nth-child(1) {
    width: 0.54rem;
    height: 100%;
  }

  .pinjia>div:nth-child(1)>img {
    width: 0.54rem;
    height: 0.54rem;
    border-radius: 50%;
  }

  .pinjia>div:nth-child(2) {
    width: 6.36rem;
    padding-left: 0.14rem;
    box-sizing: border-box;
  }

  .pinjia>div:nth-child(2)>p:nth-child(1) {
    font-size: 0.2rem;
    margin-top: 0.36rem;
  }

  .pinjia>div:nth-child(2)>p:nth-child(3) {
    font-size: 0.22rem;
    color: #979797;
    margin: 0.26rem 0rem 0.16rem 0rem;
  }

  .pinjia>div:nth-child(2)>p:nth-child(4) {
    font-size: 0.18rem;
    color: #979797;
  }

  .rate-box {
    overflow: hidden;
    margin-top: 0.06rem;
  }

  .van-rate {
    float: left;
  }
  .van-share-sheet__option {
    width: 30%;
  }
  /* .van-share-sheet__options {
    height: 5rem;
  } */
  /* .van-share-sheet {
    font-size: 3rem;
    height: 5rem;
  } */
</style>