<template>
<!-- 我的学习卡 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 中间内容 -->
        <div class="dky">
            <!-- 卡片 -->
            <div class="dky-box">
                <div class="dky-top">
                    <div>一</div>
                    <div>学习卡</div>
                </div>
                <div class="dky-bottom">
                    <div>
                        <p>雅思英语学习套餐</p>
                        <p>学习卡号：<span>12123123123</span></p>
                        
                    </div>
                    <img src="../../assets/imgs/1.png" alt="">
                </div>
            </div>
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
.dky{
    width: 96%;
    margin: 0 auto;
    .dky-box{
        width: 100%;
        height: 4rem;
        border-radius: .2rem;
        background-color: #EC690E;
        color: white;
        .dky-top{
            width: 100%;
            height: 2rem;
            text-align: center;
            border-bottom: .01rem dashed white;
            div{
                font-size: .6rem;
                height: 1rem;
                line-height: 1rem;
            }
        }
        .dky-bottom{
            width: 100%;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            div{
                p{
                    margin: .3rem 0;
                }
            }
            img{
                width: 1.5rem;

            }
        }
    }
}

</style>