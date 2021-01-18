<template>
  <div>
    <gyhometr />

    <nav>
      <header>
        <div class="header">
          <img src="@/assets/img/pian.png" alt />
          <div @click="tou">
            <van-icon name="arrow-left" class="xiaozi" />
          </div>
        </div>
      </header>
      <!--定位的模块-->
      <div class="plan">
        <div class="plan-zi">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt />
          <div class="plan-m">
            <p>
              <span>李湘老师</span>
            </p>
            <p>女 32岁 10年教龄 关注数1012</p>
          </div>

          <div class="planbtn">
            <img src="@/assets/img/pian1.png" alt />
            <p>关注</p>
          </div>
        </div>
        <div class="dig">
          <ul>
            <li>
              <a>创造力丰富</a>
            </li>
            <li>
              <a>为人和善</a>
            </li>
            <li>
              <a>讲课方式新颖</a>
            </li>
            <li>
              <a>颜值女老师</a>
            </li>
            <li>
              <a>讲解非专业</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn"></div>
      <div class="boxs">
        <van-tabs class="jiang" line-width="0.16rem">
          <van-tab title="讲师介绍">
            <ul>
              <li>
                <span>毕业院校</span>
                <font>北京大学</font>
              </li>
              <li>
                <span>综合评价</span>
                <font>北京大学</font>
              </li>
              <li>
                <span>授课范围</span>
                <font>考研英语、雅思、托福、四六级</font>
              </li>
              <li>
                <span>擅长科目</span>
                <font>英语</font>
              </li>
              <li>
                <span>授课价格</span>
                <font>5学习币</font>
              </li>
              <li>
                <span>授课时长</span>
                <font>23分钟一节课</font>
              </li>
              <li>
                <span>老师简介</span>
                <span class="font">
                  教学风格善于因材施教，针对不同学生的心理，采用不同的教学方法，以求达到更好的学习境界。
                  从事多年教育工作，拥有丰富的一线经验，持有高级中学教师资格证。对于专业知识苦心孤诣，
                  格物致知，对于学科知识内在联系逻辑有自己独特的见解。
                  培养学生养成习惯，对于复杂的知识娓娓道来，将复杂的知识简单化，将教材的知识生活化，更深入，
                  更直接，更生动，更活泼。
                </span>
              </li>
            </ul>
          </van-tab>
          <!--主将课程-->
          <van-tab title="主题课程" class="zhujiang" id="ke">
            <ul>
              <li>
                <div class="ke-zhu">
                  <h4>1111</h4>
                  <p>
                    <van-icon name="underway-o" class="i" />11y月90日 19：00·12月01日 00：00 |共1课时
                  </p>
                  <p>
                    <img
                      src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                      alt
                    />
                    <span>TNT--李</span>
                  </p>
                </div>
                <div class="ke-bao">
                  <p>4人已报名</p>
                  <p class="lv">免费</p>
                </div>
              </li>
              <li>
                <div class="ke-zhu">
                  <h4>1111</h4>
                  <p>
                    <van-icon name="underway-o" class="i" />11y月90日 19：00·12月01日 00：00 |共1课时
                  </p>
                  <p>
                    <img
                      src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                      alt
                    />
                    <span>TNT--李</span>
                  </p>
                </div>
                <div class="ke-bao">
                  <p>4人已报名</p>
                  <p class="lv">免费</p>
                </div>
              </li>
            </ul>
          </van-tab>
          <!--学员评价-->
          <van-tab title="学员评价">
            <van-collapse v-model="activeNames">
              <van-collapse-item title="言简意赅" name="1">内容</van-collapse-item>
            </van-collapse>
            <div class="con">
              <ul>
                <li>
                  <img
                    src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                    alt
                  />
                  <van-rate v-model="value" />
                  <p>
                    <span>言简意赅</span>
                    <span>言简意赅</span>
                    <span>言简意赅</span>
                  </p>
                </li>
                <li>
                  <img
                    src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                    alt
                  />
                  <van-rate v-model="value" />
                  <p>
                    <span>言简意赅</span>
                    <span>言简意赅</span>
                    <span>言简意赅</span>
                  </p>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </nav>
    <footer>
      <button>立即约课</button>
    </footer>
  </div>
</template>

<script>
import gyhometr from "@/components/toulist.vue";
export default {
  name: "",
  data() {
    return {
      activeNames: ["1"],
      value: 3,
    };
  },
  computed: {},
  methods: {
    //退回上一级
    tou() {
      window.sessionStorage.clear();

      this.$router.push("/gy_homes");
    },
  },
  components: {
    gyhometr,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 4rem;
  margin-top: 0.5rem;
  img {
    width: 100%;
    height: 4rem;
  }
  .xiaozi {
    color: #fff;
    position: absolute;
    font-size: 0.5rem;
    line-height: 0.8rem;
    text-indent: 0.1rem;
    top: 0.5rem;
    left: -0.05rem;
    z-index: 999;
  }
}

.plan {
  top: 0.8rem;
  left: 0.2rem;
  width: 100%;
  margin: 0 auto;
  height: 2.3rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.1rem;
  background: white;
  .plan-zi {
    height: 1.4rem;
    width: 100%;
    position: absolute;
    border-radius: 0.1rem;
    display: flex;
    margin: 0 0 0 0;
    margin-top: 0.2rem;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      margin: 0 0.2rem;
    }
    .plan-m {
      width: 100%;
      height: 1rem;
      p {
        font-size: 0.2rem;
        color: #999999;
        span {
          font-size: 0.25rem;
          color: black;
        }
      }
    }

    .planbtn {
      width: 1.3rem;
      height: 1.5rem;

      img {
        width: 0.7rem;
        height: 0.7rem;
      }
      p {
        font-size: 0.25rem;
        font-weight: bold;
        text-align: center;
        color: darkorange;
        margin: 0;
      }
    }
  }
}

nav {
  flex: 1;
}

.btn {
  width: 100%;
  height: 0.3rem;
  background: #ddd;
}

.dig {
  width: 100%;
  height: 0.8rem;
  margin-top: 1.6rem;
  display: flex;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0.1rem 0;
    li {
      width: 1.4rem;
      height: 0.4rem;
      font-size: 0.2rem;
      text-align: center;
      background: #f3f3f3;
      line-height: 0.4rem;
      a {
        font-size: 0.2rem;
        color: #878787;
      }
    }
  }
}

.boxs {
  width: 100%;
  position: relative;
  margin-top: 0.2rem;

  .jiang {
    width: 100%;
    // height: 10rem;
    margin-top: 1.2rem;
    height: 100%;
    background: #fff;
    margin-top: 0.2rem;
    ul {
      width: 100%;
      height: 4rem;
      li {
        width: 100%;
        height: 0.4rem;
        padding: 0rem;
        margin: 0.2rem 0;
        margin: 0rem;
        top: 0rem;
        line-height: 0.3rem;
        span {
          font-size: 0.2rem;
          width: 2rem;
          padding: 0 0.4rem;
          color: #989898;
        }
        font {
          font-size: 0.2rem;
          width: 10rem;
          font-family: 0.15rem;
          height: 19rem;
        }
        .font {
          font-size: 0.2rem;
          color: #2d2d2d;
        }
      }
    }
  }
}
footer {
  width: 100%;
  height: 1rem;
  bottom: 0rem;
  position: absolute;
  button {
    width: 100%;
    height: 1rem;
    color: #fff;
    font-size: 0.5rem;
    border: none;
    position: fixed;
    background: orangered;
  }
}
.zhujiang {
  ul {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    li {
      width: 90%;
      height: 3.5rem;
      border-radius: 0.05rem solid #fff;
      margin: 0.2rem auto;
      background: #fff;
      border-radius: 0.05rem;

      h4 {
        font-size: 0.3rem;
        // padding: 0.2rem 0;
      }
      .ke-zhu {
        margin: 0 auto;
        width: 97%;
        height: 2.6rem;
        // border: 1px solid black;
        border-bottom: 1px solid #ccc;
        p {
          font-size: 0.22rem;
          text-indent: 0.02rem;
          .i {
            // line-height: 0.1rem;
            padding: 0.2rem 0;
          }
        }
        p {
          width: 100%;
          height: 0.8rem;
          img {
            width: 0.5rem;
            height: 0.5rem;
            margin: 0 0.05rem;
            // display: block;
          }
          span {
            // line-height: 0.1rem;
            font-size: 0.22rem;
            margin: 0.4rem 0;
            // padding:  0 0.07rem;
            // display: flex;
          }
        }
      }
      .ke-bao {
        display: flex;
        justify-content: space-between;
        width: 96%;
        height: 0.8rem;
        p {
          font-size: 0.22rem;
          text-indent: 0.2rem;
          line-height: 1rem;
        }
        .lv {
          color: green;
          font-size: 0.36rem;
        }
      }
    }
  }
}
.con {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;

      height: 2rem;
      // border: 1px solid black;
      img {
        width: 0.8rem;
        height: 0.8rem;
        display: block;
        float: left;
        margin: 0.4rem;
      }
      p {
        height: 2rem;
        span {
          display: block;
          width: 1.4rem;
          height: 0.4rem;
          border: 1px solid #ccc;
          border-radius: 0.1rem;
          float: left;
          margin: 0.1rem 0.1rem;
        }
      }
    }
  }
}

.span {
  color: #eb6100;
  display: block;
  width: 1.5rem;
  border: 1px solid #eb6100;
  transform: scale(1, 1);
  border-radius: 0.5rem;
  margin-right: 1.6rem;
}
</style>
