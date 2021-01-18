<template>
  <div class="Course">
    <header>
      <van-nav-bar title="特色课" class="headers">
        <van-icon name="search" slot="right" size="0.4rem" @click="search()" />
      </van-nav-bar>

      <!-- 下拉菜单 -->
      <van-dropdown-menu active-color="#1989fa">
        <!-- 下拉菜单分类区域 -->
        <van-dropdown-item class="downs" title="分类" ref="item" active-color="orangered">
          <p class="ti">年级</p>
          <ul class="nian">
            <li v-for="(item,index) in pinglist.nian" :key="index">
              <p>{{item}}</p>
            </li>
          </ul>
          <p class="ti">学课</p>
          <ul class="xue">
            <li v-for="(ite,ind) in pinglist.xue" :key="ind">
              <p>{{ite}}</p>
            </li>
          </ul>
          <div>
            <van-button color="#7232dd">重置</van-button>
            <van-button color="#7232dd" plain>确定</van-button>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item
          class="downs"
          title="排序"
          v-model="value1"
          :options="option1"
          style="text-align:center"
        />
        <!-- 筛选 -->
        <van-dropdown-item class="downs" title="筛选" ref="item">
          <ul class="xue" style="padding:0.3rem 0">
            <li v-for="(val,ind) in pinglist.ke" :key="ind">
              <p>{{val}}</p>
            </li>
          </ul>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>

    <nav>
      <!-- 讲师信息 -->
      <ul class="teacher" to="/Course_details">
        <li v-for="(item,index) in pinglist.teacher" :key="index" @click="detail()">
          <p class="hh1">{{item.name}}</p>
          <span class="times">
            <p>
              <van-icon name="underway-o" />
              {{item.time}}
            </p>
            <p>|&nbsp;&nbsp;{{item.shi}}</p>
          </span>
          <div class="people">
            <img :src="item.head" alt />
            <p>{{item.names}}</p>
          </div>
          <div class="money">
            <p>{{item.people}}</p>
            <b>{{item.money}}</b>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      pinglist: [],
      value1: 0,
      value2: "a",
      value3: "b",
      option1: [
        { text: "综合", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
    };
  },

  mounted() {
    this.getdata();
  },

  computed: {},
  methods: {
      //获取特色课数据并渲染
    getdata() {
      this.$axios.get("./data.json").then((res) => {
        console.log(res);
        this.pinglist = res.data;
      });
    },

    //点击名师课堂跳转课堂详情
    detail(){
        this.$router.push('/indexqing')
    }
  },
};
</script>

<style lang="scss" scoped>
header,
div,
p,
hr,
h2,
h3,
h4,
b,
span {
  margin: 0;
  padding: 0;
  list-style: none;
}
.van-nav-bar__title {
  max-width: none;
}
.van-grid-item {
  border: none;
}
body,
html,
.Course {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.downs {
  // text-align: center;
  .ti {
    font-size: 0.24rem;
    color: #646464;
    padding: 0.32rem 0 0.2rem 0.25rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: #f5f5f5 0.01rem solid;
    padding-bottom: 0.2rem;
    li {
      display: block;
      width: 25%;
      color: #646464;
      font-size: 0.24rem;
      margin-bottom: 0.14rem;
      p {
        display: block;
        width: 1.4rem;
        margin: auto;
        padding: 0.1rem;
        text-align: center;
        background: #f5f5f5;
        border-radius: 0.08rem;
      }
      p:hover {
        background: orangered;
        color: white;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    line-height: 0rem;
    .van-button {
      display: block;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      border-radius: 0.1rem;
    }
  }
}

nav {
  flex: 1;
  overflow: scroll;

  .teacher {
    background: #dce5ff;
    padding: 0.3rem;
    li {
      padding: 0.2rem 0.2rem 0.08rem;
      background: white;
      border-radius: 0.1rem;
      margin: 0.2rem 0;
      .hh1 {
        font-size: 0.42rem;
        font-weight: bold;
      }
      .times {
        font-size: 0.26rem;
        line-height: 0.8rem;
        display: flex;
        align-items: center;
        p {
          padding-right: 0.2rem;
          color: #666;
        }
      }
      .people {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.45);
        height: 1rem;
        border-bottom: 0.01rem solid #eee;
        p{
            font-size: 0.3rem;
            color: darkorange;
        }
        img {
          width: 0.5rem;
          padding: 0 0.2rem;
        }
      }
      .money {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 0.7rem;
        p {
          font-size: 0.3rem;
          color: rgba(0, 0, 0, 0.45);
        }
        b {
          color: red;
          background: url(https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png)
            no-repeat left;
          background-size: 0.3rem;
          padding-left: 0.4rem;
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
