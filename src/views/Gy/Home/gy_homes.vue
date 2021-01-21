<template>
  <div class="HH">
    <gyhometr />
    <div class="home">
      <div class="up1">
        <div>
          <img src="@/assets/img/tu_04.jpg" alt class="upi1" />
          <img src="@/assets/img/tu_07.jpg" alt class="upi2" />
        </div>
      </div>

      <!-- 轮播图开始 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="banner">
        <van-swipe-item>
          <img src="@/assets/img/tu_11.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/tu_11.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/tu_11.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/tu_11.jpg" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 轮播图结束 -->

      <!-- 名师开始 -->
      <div class="mingshi">
        <ul>
          <li @click="tiao1()">
            <img src="@/assets/img/tu_14.jpg" alt />
            <p>特色课</p>
          </li>
          <li @click="tiao2()">
            <img src="@/assets/img/tu_16.jpg" alt />
            <p>课表</p>
          </li>
          <li @click="tiao3()">
            <img src="@/assets/img/tu_18.jpg" alt />
            <p>约课</p>
          </li>
        </ul>
      </div>

      <!-- 专题开始 -->
      <div class="zhuan">
        <p>专题</p>
      </div>

      <!-- 图开始 -->
      <div class="yasi">
        <div class="left">
          <p>雅思语法专题</p>
          <img src="@/assets/img/ii_06.jpg" alt />
        </div>
        <div class="right">
          <div class="top">
            <img src="@/assets/img/ii_03.jpg" alt />
            <p>雅思语法专题</p>
          </div>
          <div class="down">
            <img src="@/assets/img/ii_09.jpg" alt />
            <span>耶斯写作专题</span>
          </div>
        </div>
      </div>

      <!-- 直播开始 -->
      <div class="zhuan">
        <p>直播</p>
      </div>

      <div class="yingyu">
        <ul>
          <li>
            <img src="@/assets/img/tu_26.jpg" alt />
            <p>雅思英语七日培训班</p>
          </li>
          <li>
            <img src="@/assets/img/tu_26.jpg" alt />
            <p>雅思英语七日培训班</p>
          </li>
          <li>
            <img src="@/assets/img/tu_26.jpg" alt />
            <p>雅思英语七日培训班</p>
          </li>
          <li>
            <img src="@/assets/img/tu_26.jpg" alt />
            <p>雅思英语七日培训班</p>
          </li>
          <li>
            <img src="@/assets/img/tu_26.jpg" alt />
            <p>雅思英语七日培训班</p>
          </li>
        </ul>
      </div>

      <!-- 今日开始 -->
      <div class="jinri">
        <div class="jintou">
          <p class="jinke">今日好课</p>
          <span>更多 ></span>
        </div>
        <!-- 图片加字开始 -->
        <ul>
          <li>
            <img src="@/assets/img/tu_30.jpg" alt />
            <p class="rip1">不只是一份毕业设</p>
            <div>
              <p class="rip2">
                <img src="@/assets/img/tu_03.jpg" alt class="rii1" />520
              </p>
              <p class="rip3">
                <img src="@/assets/img/tu_05.jpg" alt class="rii2" />520
              </p>
              <p class="rip4">￥ 1998.0</p>
            </div>
          </li>
          <li>
            <img src="@/assets/img/tu_30.jpg" alt />
            <p class="rip1">不只是一份毕业设</p>
            <div>
              <p class="rip2">
                <img src="@/assets/img/tu_03.jpg" alt class="rii1" />520
              </p>
              <p class="rip3">
                <img src="@/assets/img/tu_05.jpg" alt class="rii2" />520
              </p>
              <p class="rip4">￥ 1998.0</p>
            </div>
          </li>
          <li>
            <img src="@/assets/img/tu_30.jpg" alt />
            <p class="rip1">不只是一份毕业设</p>
            <div>
              <p class="rip2">
                <img src="@/assets/img/tu_03.jpg" alt class="rii1" />520
              </p>
              <p class="rip3">
                <img src="@/assets/img/tu_05.jpg" alt class="rii2" />520
              </p>
              <p class="rip4">￥ 1998.0</p>
            </div>
          </li>
          <li>
            <img src="@/assets/img/tu_30.jpg" alt />
            <p class="rip1">不只是一份毕业设</p>
            <div>
              <p class="rip2">
                <img src="@/assets/img/tu_03.jpg" alt class="rii1" />520
              </p>
              <p class="rip3">
                <img src="@/assets/img/tu_05.jpg" alt class="rii2" />520
              </p>
              <p class="rip4">￥ 1998.0</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="zhitou" v-for="item in indexlist" :key="item.channel_info.id">
        <div class="ming">
          <h4>{{item.channel_info.name}}</h4>
          <span>更多 ></span>
        </div>

        <p class="zhong">
          <ul>
            <li v-for="(el,index) in item.list" :key="index">
              <img :src="el.teacher_avatar" alt />
              <!-- <div class="zd1">
                <div class="zd2">
                  <p class="zp1"></p>
                  <p class="zp2"></p>
                </div>
              </div> -->
            </li>
          </ul>
        </p>
      </div>
      
    </div>
    <tab />
  </div>
</template>

<script>
import gyhometr from "@/components/toulist.vue";
import tab from "@/components/tabber.vue";
import { getlist } from "@/util/api.js";
import { indexlist } from "@/util/api.js";
export default {
  name: "",
  data() {
    return {
      indexlist: [],
    };
  },

  components: {
    gyhometr,
    tab
  },

  mounted() {
    //获取banner轮播图
    getlist().then((res) => {
      console.log(res);
    });

    //获取首页列表
    indexlist().then((res) => {
      console.log(res);
      this.indexlist = res.data;
    });
  },

  computed: {},
  methods: {
    //跳转特色课详情
    tiao1() {
      this.$router.push("/gy_index");
    },

    //跳转课表详情
    tiao2() {
      this.$router.push("/gy_calendar");
    },

    //跳转名师详情
    tiao() {
      this.$router.push("/gy_hometr");
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
  display: none;
  overflow: scroll;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
body {
  margin: 0;
}
.HH {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.home {
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;

  overflow-x: hidden;
}

.header {
  margin-top: 0.5rem;
}

.up1 {
  width: 7.5rem;
  margin-top: 0.25rem;
  div {
    width: 6.9rem;
    height: 0.88rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .upi1 {
      height: 0.7rem;
      display: block;
      width: 1.76rem;
    }
    .upi2 {
      height: 0.42rem;
      display: block;
      width: 0.34rem;
    }
  }
}

.banner {
  width: 7.5rem;
  height: 4.16rem;
  img {
    width: 7.5rem;
    height: 4.16rem;
  }
}

.mingshi {
  ul {
    width: 7.5rem;
    height: 1.78rem;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3%;
      padding-top: 0.26rem;
      img {
        height: 0.8rem;
        width: 0.8rem;
        display: block;
        margin: 0 auto;

      }
      p {
        font-size: 0.3rem;
        color: #646464;
        text-align: center;
      }
    }
  }
}

.zhuan {
  padding-left: 0.3rem;
  height: 1.04rem;
  margin-top: 0.26rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  p {
    width: 0.86rem;
    font-size: 0.3rem;
    font-weight: bold;
    text-align: right;
    border-left: 0.06rem solid red;
  }
}

.yasi {
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;
}
.left {
  width: 3.5rem;
  border-right: 0.01rem solid #f6f6f6;
  height: 2.98rem;
  p {
    font-size: 0.3rem;
    margin-top: 0.3rem;
    margin-left: 0.32rem;
  }
  img {
    display: block;
    height: 1.64rem;
    width: 1.84rem;
    margin: 0 auto;
    margin-top: 0.06rem;
  }
}
.right {
  width: 3.49rem;
  .top {
    border-bottom: 0.01rem solid #f6f6f6;
    display: flex;
    flex-wrap: wrap;
    height: 1.48rem;
    align-items: center;
    img {
      height: 0.9rem;
      display: block;
      width: 0.92rem;
      margin-left: 0.44rem;
    }
    p {
      font-size: 0.3rem;
      margin-left: 0.15rem;
    }
  }
  .down {
    height: 1.49rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    img {
      height: 0.9rem;
      display: block;
      width: 0.92rem;
      margin-left: 0.44rem;
    }
    span {
      display: block;
      font-size: 0.3rem;
      margin-left: 0.15rem;
    }
  }
}

.yingyu {
  width: 7.5rem;
  ul {
    width: 7.5rem;
    background: #fafafa;
    display: flex;
    overflow-x: scroll;
    padding-left: 0.28rem;
    padding-bottom: 0.3rem;
    li {
      width: 2.9rem;
      background: rgb(19, 13, 13);
      border-radius: 0.2rem;
      margin-right: 0.16rem;
      img {
        display: block;
        margin: 0 auto;
        width: 2.7rem;
        height: 1.5rem;
  
      }
      p {
        font-size: 0.3rem;
        font-weight: bold;
        margin-left: 0.1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        width: 2.16rem;
        line-height: 0.74rem;
      }
    }
  }
}

.jinri {
  padding-left: 0.3rem;
  border-bottom: 0.3rem solid #fafafa;
  .jintou {
    height: 0.9rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    p {
      font-size: 0.28rem;
      width: 5.98rem;
      border-left: 0.06rem solid red;
      padding-left: 0.22rem;
    }
    span {
      display: block;
      font-size: 0.2rem;
      color: #bebebe;
    }
  }
  ul {
    width: 7.2rem;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 3.32rem;
      margin-right: 0.24rem;
      img {
        width: 3.32rem;
        display: block;
        height: 1.84rem;
      }
      .rip1 {
        line-height: 0.5rem;
        font-size: 0.28rem;
      }
      div {
        display: flex;
        flex-wrap: wrap;
     
        .rip2 {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          font-size: 0.16rem;
          color: #cdcdcd;
          .rii1 {
            width: 0.26rem;
            height: 0.15rem;
            margin-right: 0.11rem;
          }
        }
        .rip3 {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          font-size: 0.16rem;
          color: #cdcdcd;
          margin-left: 0.1rem;
          .rii2 {
            width: 0.2rem;
            height: 0.15rem;
            margin-right: 0.11rem;
          }
        }
        .rip4 {
          font-size: 0.21rem;
          color: red;
          font-weight: bold;
          text-align: right;
          width: 1.74rem;
        }
      }
    }
  }
}

.zhitou {
  width: 6.9rem;
  height:4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .ming {
    width: 6.9rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    h4 {
      font-size: 0.28rem;
      font-weight: bold;
      border-left: 0.06rem solid red;

      padding-left: 0.22rem;
    }
    span {
      font-size: 0.2rem;
      color: #bebebe;
      display: block;
    }
  }
  .zhong{
     width: 6.3rem;
     height: 1rem;
     background: blue;
    ul{
      width: 6.3rem;
      height: 1rem;
      li{
        width: 6.3rem;
        height: 1rem;
        border: 0.02rem solid #fafafa;

        img{
           width: 0.88rem;
          height: 0.88rem;
          display: block;
        }
      }
    }
  }
}
</style>
