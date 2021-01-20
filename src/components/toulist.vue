
<template>
  
    <div class="head">
      <img src="@/assets/img/dan.png" alt />
    </div>

</template>

<script>

export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
html,body {
  
  .head {
    width: 100%;
    height: 0.4rem;
    position: fixed;
    z-index: 999;
    top: -0.53rem;
    img {
      width: 100%;
      height: 0.4rem;
      overflow: hidden;
    }
  }
}
</style>
