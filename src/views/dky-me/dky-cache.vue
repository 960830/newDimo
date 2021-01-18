<template>
<!-- 全选和删除 -->
    <div class="dky-box">
        <headers />
       
        
        <van-checkbox-group v-model="result" ref="checkboxGroup" style="background:white">
            <van-row>
                <van-col span="4">
                    <van-checkbox name="a" class="dky-quan"></van-checkbox>
                </van-col>
                <van-col span="20">
                    <van-swipe-cell>
                        <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            class="goods-card"
                            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <template #right>
                            <van-button
                                square
                                text="删除"
                                type="danger"
                                class="delete-button"
                            />
                        </template>
                    </van-swipe-cell>
                </van-col>
            </van-row>
        </van-checkbox-group>

        <div class="dky-bottom">
            <p @click="color" :v-show="p1" :style="p1==true?'background:#EB6100;color:white':''">全选</p>
            <p @click="color2" :v-show="p2" :style="p2==true?'background:#EB6100;color:white':''">删除</p>
        </div>
    </div>
</template>

<script> 
import headers from "../../components/headers.vue"
export default {
    components:{headers},
    data() {
        return {
          result:[],
          p1:false,
          p2:false,

        }
    },
    methods: {
        checkAll() {
            this.$refs.checkboxGroup.toggleAll(true);
        },
        color(){
            this.p1=true
            this.p2=false
        },
        color2(){
            this.p1=false
            this.p2=true
        }
    },
};
</script>

<style lang="scss" scoped>
.dky-quan{
    margin-top: .8rem;
}
.goods-card {
    margin: 0;
    background-color: white;
}
.dky-box{
    background-color: #F8F8F8;
}
.dky-bottom{
    width: 100%;
    height: 1.5rem;
    background-color: pink;
    position:fixed;
    bottom:0;
    display:flex;
    background-color: #fff;
    border-top: .03rem solid #eee;
    p{
        font-size: .4rem;
        width: 100%;
        height: 100%;
        line-height: 1.5rem;
        text-align: center;
        border-right: .03rem solid #eee;
    }
}

.delete-button {
    height: 100%;
}
</style>
