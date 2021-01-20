<template>
  <div>
    <div>
      <div class="header">
        <van-icon name="arrow-left" @click="tui()" />
      </div>

      <div class="body">
        <div class="bodys">
          <img src="@/assets/img/img02.jpg" alt />
        </div>

        <div class="mine">
          <span>
            <img src="@/assets/img/img05.jpg" alt />
          </span>

          <div>
            <van-field placeholder="请输入手机号" type="phone" v-model="phone" />
            <!-- <button>获取验证码</button> -->
          </div>
        </div>

        <div class="mine">
          <span>
            <img src="@/assets/img/img06.jpg" alt />
          </span>

          <div>
            <van-field placeholder="请输入验证码" type="password" v-model="password" />
          </div>
        </div>

        <div class="mine_deng">
          <button @click="login()">登录</button>
          <ul>
            <p>找回密码</p>
            <li>注册/验证码登录</li>
          </ul>
        </div>
      </div>

      <div class="mine_but">
        <p></p>
        <span>或从以下方式登录</span>
        <p></p>
      </div>

      <div class="footer">
        <div class="mine-foot">
          <ul>
            <li>
              <img src="@/assets/img/img03.jpg" alt />
              <i>微信登录</i>
            </li>
            <li>
              <img src="@/assets/img/img04.jpg" alt />
              <i>QQ登录</i>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      id="moveDiv"
      class="foot"
      @mousedown="down()"
      @touchstart="down()"
      @mousemove="move()"
      @touchmove="move()"
      @mouseup="end()"
      @touchend="end()"
    >
      <van-icon name="comment" />
    </div>
  </div>
</template>

<script>
import { login } from "@/util/api.js";
export default {
  name: "",
  data() {
    return {
      phone: "15810195203",
      password: "",
      flags: false,
      position: { x: 0, y: 0 },
    };
  },

  computed: {},
  methods: {
    //返回上一级
    tui() {
      this.$router.go("-1");
    },

    //登录接口调用
    async login() {
      // login().then(res =>{
      //   console.log(res);
        
      // })
      let { data } = await login({
        mobile: this.phone,
        type: 1,
        password: "6666666666",
      });
      console.log(data);
      if (data.code == 200) {
        window.sessionStorage.setItem(
          "remember_token",
          data.data.remember_token
        );
        this.$router.push("gy_homes");
      }
    },

    // 实现移动端拖拽
    down() {
      this.flags = true;
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft;
      this.dy = moveDiv.offsetTop;
    },
    move() {
      if (this.flags) {
        let touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        //添加限制：只允许在屏幕内拖动
        const maxWidth = document.body.clientWidth - 54; //屏幕宽度减去悬浮框宽高
        const maxHeight = document.body.clientHeight - 54;
        if (this.xPum < 0) {
          //屏幕x限制
          this.xPum = 0;
        } else if (this.xPum > maxWidth) {
          this.xPum = maxWidth;
        }
        if (this.yPum < 0) {
          //屏幕y限制
          this.yPum = 0;
        } else if (this.yPum > maxHeight) {
          this.yPum = maxHeight;
        }
        moveDiv.style.left = this.xPum + "px";
        moveDiv.style.top = this.yPum + "px";
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function () {
            //   // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
            //   // event.preventDefault(); //jq 阻止冒泡事件
            //   // event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.4rem;
  .van-icon {
    line-height: 1rem;
    padding-left: 0.2rem;
    font-size: 0.4rem;
  }
}

.body {
  width: 100%;
  height: 8rem;
  text-align: center;
  //   padding: 0 0.3rem 0 0.3rem;
  .bodys {
    width: 100%;
    height: 2.5rem;
  }
  img {
    width: 5.15rem;
    height: 1.52rem;
    line-height: 1.52rem;
    padding: 0.5rem 0 0 0;
  }
}

.mine {
  width: 100%;
  height: 1.5rem;
  display: flex;
  span {
    width: 1.36rem;
    height: 0.73rem;
    line-height: 0.73rem;
    display: block;
    text-align: center;
    img {
      width: 0.3rem;
      height: 0.36rem;
      margin: 0;
    }
  }
  div {
    width: 5.47rem;
    height: 1rem;
    line-height: 0.68rem;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    .van-field {
      width: 3.8rem;
      height: 0.68rem;
      font-size: 0.26rem;
      border: none;
    }
    button {
      width: 1.6rem;
      height: 0.5rem;
      background: #eb6100;
      color: #ffffff;
      border: none;
      display: block;
      font-size: 0.2rem;
      line-height: 0.5rem;
    }
  }
}

.mine_deng {
  width: 100%;
  height: 1.58rem;
  padding-top: 0.3rem;
  text-align: center;
  button {
    width: 6.15rem;
    height: 0.9rem;
    background: #eb6100;
    border: none;
    color: #ffff;
    font-size: 0.36rem;
    border-radius: 10px;
    display: block;
    margin-left: 0.65rem;
  }
  ul {
    height: 0.6rem;
    display: flex;
    padding-top: 0.2rem;
    align-items: center;
    p {
      width: 4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.22rem;
      color: #999999;
      margin-left: -0.88rem;
    }
    li {
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.22rem;
      color: #999999;
      margin-left: 2rem;
    }
  }
}

.mine_but {
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    width: 2.15rem;
    height: 0.05rem;

    background-color: #f4f4f4;
  }
  span {
    font-size: 0.23rem;
    color: #9999;
  }
}

.footer {
  width: 100%;
  height: 2.5rem;
  //   padding-top: 0.8rem;

  .mine-foot {
    width: 100%;
    height: 1.99rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    ul {
      width: 3.56rem;
      height: 1.52rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        width: 50%;
        height: 0.42rem;
        line-height: 0.42rem;
        text-align: center;
        i {
          display: block;
          height: 0.42rem;
          line-height: 0.42rem;
          font-size: 0.22rem;
          text-align: center;
          color: #a8a8a8;
          font-style: normal;
        }
        img {
          width: 0.69rem;
          height: 0.69rem;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}

.foot {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  text-align: center;
  background: blue;
  position: fixed;
  top: 1rem;
  .van-icon {
    font-size: 0.8rem;
    line-height: 1.3rem;
    margin-top: 0.1rem;
    color: #fff;
  }
}
</style>
