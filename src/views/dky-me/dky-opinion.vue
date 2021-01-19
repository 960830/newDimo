<template>
    <!-- 意见反馈 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <div class="dky-text">
            <textarea
                name=""
                id=""
                cols="50"
                rows="10"
                placeholder="请输入你的问题或反馈"
            ></textarea>
        </div>
        <div class="dky-bottom">
            <button>
                提交
            </button>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
};
</script>

<style lang="scss" scoped>
.dky-text {
    width: 100%;
    height: 3rem;
    text-align: center;
}
.dky-bottom {
    width: 100%;
    
    button {
        width: 90%;
        margin-left: 5%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: white;
        background-color: #eb6100;
        border: none;
        border-radius: .2rem;
        margin-top: 1.5rem;

    }
}
</style>
