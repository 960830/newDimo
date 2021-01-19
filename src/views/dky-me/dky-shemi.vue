<template>
    <!-- 设置密码 -->
    <div>
        <!-- 头部 -->
        <headers />
        <!-- 中间 -->
        <van-form validate-first>
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="value1"
                placeholder="请输入手机号"
            />
            <!-- 通过 validator 进行函数校验 -->
            <van-field
                v-model="value2"
                placeholder="请输入验证码"
            />
            <!-- 通过 validator 进行异步函数校验 -->
            <van-field
                v-model="value3"
                placeholder="请输入新密码"
            />
            <p style="color:#ccc;margin-left:.3rem;">6-20位英文，数字，符号，去分大小写</p>
            <div style="margin: 16px;" class='dky-but'>
                <van-button round block type="info" native-type="submit"
                    >提交</van-button
                >
            </div>
        </van-form>

        <div class="dky">
            获取验证码
        </div>
    </div>
</template>

<script>
import headers from "../../components/headers.vue";
export default {
    components: { headers },
    data() {
        return {
            value1:"",
            value2:"",
            value3:"",
        }
    },
};
</script>

<style lang="scss" scoped>
.van-button--info{
    background-color: #EB6100;
    border: none;
}
.van-button--round{
    border-radius: .1rem;
}
/deep/.van-form{
    position: relative;
}
.dky{
    width: 2rem;
    height: .5rem;
    line-height: .5rem;
    background-color: #EB6100;
    color: white;
    text-align: center;
    border-radius: .1rem;
    position:absolute;
    top: 1.7rem;
    right: .3rem;
    
}

</style>
