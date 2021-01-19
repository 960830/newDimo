<template>
    <!-- 个人信息 -->
    <div>
        <!-- 加入头部组件 -->
        <headers />

        <div>
            <!-- 头像 -->
            <p>
                <van-cell is-link title="头像" @click="show = true" />
                <van-action-sheet
                    v-model="show"
                    :actions="actions"
                    cancel-text="取消"
                    close-on-click-action
                    @cancel="onCancel"
                />
            </p>
            <!-- 姓名 -->
            <p>
                <van-cell is-link title="姓名" @click="altername">
                    <span></span>
                </van-cell>
            </p>
            <!-- 手机号码 -->
            <p>
                <van-cell is-link title="手机号码" @click="phone">
                    <span></span>
                </van-cell>
            </p>
            <!-- 性别 -->
            <p>
                <van-cell is-link title="姓别" @click="altersex" />
            </p>
            <!-- 出生日期 -->
            <p>
                <van-cell is-link title="出生日期" @click="birthday = true" />
                <van-popup
                    v-model="birthday"
                    position="bottom"
                    :style="{ height: '50%' }"
                >
                    <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        title="选择年月日"
                        :min-date="minDate"
                        :max-date="maxDate"
                    />
                </van-popup>
            </p>
            <!-- 实在城市 -->
            <p>
                <van-cell is-link title="所在城市" @click="city = true" />
                <van-popup
                    v-model="city"
                    position="bottom"
                    :style="{ height: '50%' }"
                >
                    <van-area title="所在城市" />
                </van-popup>
            </p>
            <!-- 年级 -->
            <p>
                <van-cell is-link title="年级" @click="grade = true" />

                <van-action-sheet
                    v-model="grade"
                    :actions="gradename"
                    cancel-text="取消"
                    close-on-click-action
                    @cancel="onCancel"
                />
            </p>
            <!-- 学科 -->
            <p>
                <van-cell is-link title="学科" @click="subject = true" />
                <van-overlay :show="subject">
                    <div class="wrapper" @click.stop="subject = false">
                        <div class="block">
                            <h2>学科选择</h2>
                            <ul>
                                <li>语文</li>
                                <li>数学</li>
                                <li>英语</li>
                                <li>物理</li>
                                <li>化学</li>
                                <li>生物</li>
                                <li>政治</li>
                                <li>历史</li>
                                <li>地理</li>
                            </ul>
                            <van-button round type="primary" size="large"
                                >确认</van-button
                            >
                        </div>
                    </div>
                    van-
                </van-overlay>
            </p>
        </div>
    </div>
</template>z

<script>
// import { message } from "@/utility/http";
import {message} from "@/utility/api.js"
import headers from "@/components/headers.vue";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
    components: { headers },
    created() {
        // message().then(rel=>{
        //     console.log(rel);
        // })
        message().then(res =>{
            console.log(res);
        })
    },
    data() {
        return {
            //定义的头像
            show: false,
            actions: [{ name: "拍照" }, { name: "从手机相册添加" }],
            //定义时间
            birthday: false,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            //定义城市
            city: false,
            //定义年级
            grade: false,
            gradename: [{ name: "高一" }, { name: "高二" }, { name: "高三" }],
            //定义学科
            subject: false,
        };
    },
    methods: {
        // 头像的事件
        onCancel() {
            Toast("取消");
        },
        // 性名
        altername() {
            this.$router.push({ path: "/dky-alterName" });
        },
        // 性别
        altersex() {
            this.$router.push({ path: "/dky-sex" });
        },
        // 手机号
        phone() {
            this.$router.push({ path: "/dky-phone" });
        },
    },
};
</script>

<style lang="scss" scoped>
.content {
    padding: 0.16rem 0.16rem 1.6rem;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 3rem;
    height: 3rem;
    border-radius: 0.2rem;
    background-color: #fff;
    text-align: center;
    ul {
        margin: 0.02rem 0;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        li {
            width: 30%;
            height: 0.3rem;
            line-height: 0.3rem;
            border-radius: 0.05rem;
            background-color: #f5f5f5;
            color: #6a6a6a;
            margin: 0.1rem 0;
        }
    }
}
</style>
