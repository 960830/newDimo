<template>
<!-- 正在下载 -->
    <div>
        <!-- 插入头部 -->
         <headers />
        
        
        <div>
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
 .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
  </style>
