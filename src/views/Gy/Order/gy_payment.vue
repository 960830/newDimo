<template>
  <div>
    <gyhometr />

    <!-- 返回上一级区域 -->
    <div class="index"></div>
    <van-divider />
    <!-- 订单信息区域 -->
    <div class="nav">
      <ul>
        <li>
          <span class="nav1">订单信息</span>
        </li>
        <li>
          <span class="btn">订单号:</span>
          <span class="btn1">2018062800001</span>
        </li>
        <li>
          <span class="btn2">应付金额:</span>
          <span class="btn3">5学习币</span>
        </li>
      </ul>
    </div>
    <van-divider />
    <!-- 订单信息区域 -->
    <div class="zhiming">
      <ul class="zhi">
        <li>
          <p class="hy">选择支付方式</p>
          <div class="zd1">
            <div class="zd2">
              <van-icon name="gold-coin" />
              <p class="zp1">学习币( 余额 1 )</p>
              <p class="zp2">学习币余额不足,需充值4</p>
            </div>
          </div>
          <span>请您在30分钟内完成支付,否则订单会被自动取消</span>
        </li>
      </ul>
    </div>

    <div class="footer">
      <button>去充值</button>
    </div>
  </div>
</template>

<script>
import gyhometr from "@/components/toulist.vue";
export default {
  name: "",
  data() {
    return {
      radio: "1",
    };
  },
  components: {
    gyhometr,
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}

.index {
  width: 100%;
  height: 1.5rem;
}

.nav {
  width: 100%;
  height: 2.3rem;
  ul {
    width: 100%;
    height: 2rem;
    li {
      width: 100%;
      height: 0.5rem;
      line-height: 0.1rem;
      margin-top: 0.2rem;
      text-indent: 0.2rem;
      margin-bottom: 0.2rem;
      .nav1 {
        color: #ddd;
        font-size: 0.2rem;
      }
      .btn {
        color: #898989;
        font-size: 0.3rem;
        width: 100%;
        height: 0.3rem;
      }

      .btn1 {
        font-size: 0.3rem;
        font-weight: bold;
        color: black;
        margin-left: 0.2rem;
      }
      .btn2 {
        font-size: 0.3rem;
        color: #898989;
      }
      .btn3 {
        font-size: 0.3rem;
        font-weight: bold;
        color: red;
        margin-left: 0.1rem;
      }
    }
  }
}

.zhi {
  li {
    width: 6.3rem;
    height: 3rem;
    margin-left: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    .hy {
      height: 0.3rem;
      font-size: 0.2rem;
      margin-top: 0.15rem;
      color: #ddd;
    }
    .zd1 {
      width: 5rem;
      margin-left: 0.22rem;
      .zd2 {
        display: flex;
        flex-wrap: wrap;
        height: 1.2rem;
        margin-top: 0.2rem;
        .zp1 {
          font-size: 0.28rem;
          font-weight: bold;
          line-height: 0.3rem;
          height: 0.6rem;
        }
        .zp2 {
          font-size: 0.22rem;
          color: #999999;
          margin-top: -0.5rem;
          margin-left: 0.8rem;
        }
      }
    }
    span {
      width: 100%;
      font-size: 0.2rem;
      color: red;
    }
  }
}

.van-icon {
  height: 0.4rem;
  font-size: 0.6rem;
  color: orangered;
  margin-right: 0.2rem;
}

.footer {
  width: 100%;
  height: 6.8rem;
  background: #fafafa;
  button {
    width: 5rem;
    height: 1.2rem;
    margin-top: 4rem;
    font-size: 0.3rem;
    margin-left: 15%;
    color: #fff;
    background: orangered;
    border: none;
  }
}
</style>
