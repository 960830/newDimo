<template>
<!-- 百家云网校条例 -->
    <div>
        <!-- 头部 -->
        <headers />
        <div class="dky-package">
            <p>甲方:北京百家视联科技有限公司</p>
            <p>乙方:当前用户手机号+姓名</p>
            <div>
                甲方为北京百家视联科技有限公司推广产品提供方，
                乙方从事网校产品渠道推广员。经双方协商，甲方
                同意乙方作为甲方产品的推广员，甲乙双方根据《中华
                人民共和国合同法》等相关法律法规的规定，本着互惠
                互利原则，达成本协议:
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
.dky-package{
    width: 96%;
    margin: 0 auto;
    color: rgb(95, 92, 92);
    p{
        margin: .4rem 0;
    }
    div{
        text-indent: .6rem;
    }
}
</style>