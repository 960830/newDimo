<template>
    <!-- 设置 -->
    <div>
        <!-- 头部组件 -->
        <headers />
        <!-- 设置 -->
        <div class="dky">
            <van-cell-group>
                <van-field
                    label="清除缓存"
                    placeholder="50M >"
                    disabled
                >
                </van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field
                    label="设置密码"
                    placeholder="您尚未设置密码 >"
                    disabled
                >
                </van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field
                    label="当前版本"
                    placeholder="V1.2 >"
                    disabled
                >
                </van-field>
            </van-cell-group>
            <button>退出登录</button>
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
           
        };
    },
};
</script>

<style lang="scss" scoped>

/deep/.van-field__control {
    text-align: right;
}
/deep/.van-field--disabled .van-field__label{
    color: black;
}
.dky{
    width: 100%;
}
button{
    width: 80%;
    height: 1rem;
    background-color: #EB6100;
    text-align: center;
    line-height: 1rem;
    color: white;
    margin-left: 10%;
    margin-top: 2rem;
    border: none;
    border-radius: .1rem;
    font-size: .4rem;
}

</style>
