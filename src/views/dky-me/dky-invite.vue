<template>
<!-- 邀请 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <div class="dky-img">
            <img src="../../assets/imgs/yaoqing.png" alt="">
        </div>
        <div class="dky-bottom">
            <p class="dky-left">分享到微信</p>
            <p class="dky-right">分享到微信</p>
        </div>

    </div>
</template>

<script>
import headers from '../../components/headers.vue'
    export default {
  components: { headers },
        
    }
</script>

<style lang="scss" scoped>
.dky-img{
    width: 100%;
    height: 9.4rem;
    border-bottom: .01rem solid #ccc ;

    img{
        width: 100%;
        height: 9rem;
        border-bottom-left-radius: .1rem;
        border-bottom-right-radius: .1rem;
    }
}
.dky-bottom{
    width: 100%;
    height: 1rem;
    display:flex;
    justify-content: space-around;
    margin-top: .6rem;
    text-align: center;
    line-height: 1rem;
    color: white;
    
    .dky-left{
        width: 3rem;
        height: 1rem;
        background-color: #A5DB52;
        border-radius: .2rem;
    }
    .dky-right{
        width: 3rem;
        height: 1rem;
        background-color: #F8AB52;
        border-radius: .2rem;
    }
}
</style>