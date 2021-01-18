<template>
    <!-- 课程提醒 -->
    <div>
        <!-- 头部 -->
         <headers />
        
        
        <!-- 小盒子 -->
        <div class="dky-one">
            <p>5月20日 13：26</p>
            <div>
                您报名的课程《雅思七日冲刺》开课了！赶紧加入直播间
                进行学习吧...<span>进入直播间>></span>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue"
export default {
    components:{headers},
    };
</script>

<style lang="scss" scoped>
.dky-one {
    width: 100%;
    height: 2rem;
    border-bottom: 0.04rem solid #eee;
    color: #b3b3b3;
    p {
        width: 2.4rem;
        height: 0.4rem;
        background-color: #cccccc;
        color: white;
        text-align: center;
        margin: 0.5rem 30%;
        line-height: 0.4rem;
    }
    div {
        padding: 0 .4rem;
        span {
            color: #e64e54;
        }
    }
}
</style>
