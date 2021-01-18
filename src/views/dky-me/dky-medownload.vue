<template>
    <!-- 我的下载 -->
    <div>
        <!-- 插入头部 -->
         <headers />
       
        
        <div>
            <!-- 正在下载的 -->
            <van-card
                num="35.4k/s"
                desc="雅思语法入门(直播回放课)"
                title="正在缓存"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
        </div>
        <!-- 下载完成的 -->
        <div>
            <div class="dky-over">
                <img src="../../assets/imgs/img09.png" alt="" />
                <div>
                    <p>课程名字</p>
                    <p class="dky-over-2">
                        <span>10个视频</span>
                        |
                        <span>100M</span>
                    </p>
                </div>
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
.dky-over {
    display: flex;
    padding: 0.6rem;
    align-items: center;
    img {
        margin-right: 0.5rem;
    }
    .dky-over-2 {
        color: #ccc;
        display: block;
        margin-top: 0.1rem;
    }
}
</style>
