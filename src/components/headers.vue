<template>
    <div class="dky-tou">
        <div class="dky-top">
            <img src="../assets/imgs/tu_01.jpg" alt="">
        </div>
        <div class="dky-bottom">
            <div @click="dkygo"><img src="../assets/imgs/img0111.jpg" alt=""> </div>
            <div class="dky-title">{{this.$route.meta.title}}</div>
            <div class="dky-right">{{this.$route.meta.mage}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        methods: {
            dkygo(){
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>
.dky-tou{
    height: 1.5rem;
    background-color: #F8F8F8;
}
.dky-top{
    width: 100%;
    height: .4rem;
    img{
            width: 100%;
            height: 100%;
    }
}
.dky-bottom{
    height: .8rem;
    line-height: .8rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    
    img{
        width: .3rem;
        height: .3rem;
        margin-left: .2rem;
    }
    div{
        flex:1;
        
    }
    .dky-title{
        text-align: center;
        font-size: .4rem;
    }
    .dky-right{
        text-align: center;
    }

}
</style>