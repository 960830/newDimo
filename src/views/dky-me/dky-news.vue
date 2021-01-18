<template>
    <!-- 消息通知 -->
    <div>
        <!-- 插入头部 -->
        <headers/>
        <div>
            <div class="dky-over">
                <img src="../../assets/imgs/img09.png" alt="" />
                <div>
                    <p class="dky-over-1">课程通知</p>
                    <p class="dky-over-2">
                        您的直播课程“业绩是怎样炼成的”还有半小时就开了，记得去学习哦~
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue"
export default {
    components:{headers}
};
</script>

<style lang="scss" scoped>
.dky-over {
    display: flex;
    padding: 0.6rem;
    align-items: center;
    img {
        margin-right: 0.5rem;
    }
    .dky-over-1{
        font-size: .4rem;
        margin: .2rem 0;
    }
    .dky-over-2 {
        color: #ccc;
    }
}
</style>
