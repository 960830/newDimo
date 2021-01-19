<template>
  <div>
    <gyhometr />
    <div class="header">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '380px' }"
      />
    </div>

    <div class="nav">
      <div class="nav1">
        <p>当日课程</p>
      </div>

      <div class="nav2">
        <div class="nav3">
          <span class="btn"></span>
          <van-icon name="clock-o" />
        </div>
        <div class="nav3">
          <span></span>
          <van-icon name="clock-o" />
        </div>
        <div class="nav3">
          <span></span>
          <van-icon name="clock-o" />
        </div>
        <div class="nav3">
          <span></span>
          <van-icon name="clock-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gyhometr from "@/components/toulist.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    gyhometr,
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0rem;
  padding: 0rem;
  bottom: 0rem;
  overflow: hidden;
}

.header {
  margin-top: 0.5rem;
}

.nav {
  width: 100%;
  .nav1 {
    width: 100%;
    height: 0.8rem;
    background: #fafafa;
    p {
      font-size: 0.2rem;
      color: rgb(34, 34, 34);
      line-height: 0.8rem;
      text-indent: 0.2rem;
    }
  }
}

.nav2 {
  width: 100%;
  height: 5rem;
  padding-left: 0.2rem;
  span {
    display: block;
    width: 0.03rem;
    height: 1rem;
    margin-left: 0.1rem;
    border-left: 0.03rem solid #ddd;
  }
  .btn{
    height: 0.3rem;
    margin-top: 0.2rem;
  }
  .van-icon {
    font-size: 0.3rem;
    display: flex;
    color: #ddd;
  }
  .nav3 {
    height: 1rem;
    box-sizing: border-box;
  }
}
</style>
