<template>
    <div class="user">
        <div class="user_container">

            <!-- 用户头像 -->
            <div class="user_avatar unselectable" >
                <!-- 登录后 -->
                <img v-if="user_avatar" @click="down_menu_show=!down_menu_show" :src="user_avatar" alt="">
                <!-- 未登录 -->
                <img v-else @click="login" src="@/assets/img/default_avatar.png" alt="">
            </div>
            <!-- 用户头像 -->

            <!-- 用户昵称 -->
            <!-- 已登录 -->
            <div v-if="user_name" class="user_name unselectable" @click="down_menu_show=!down_menu_show">{{ user_name }}</div>
            <!-- 未登录 -->
            <div v-else @click="login" class="user_name unselectable"> 请登录 </div>
            <!-- 用户昵称 -->

            <!-- 下拉图标 -->
            <el-icon v-if="user_name" :size="15" style="cursor: pointer;" @click="down_menu_show=!down_menu_show"><ArrowDown /></el-icon>
            <!-- 下拉图标 -->

            <!-- 下拉菜单 -->
            <div v-if="down_menu_show" class="bg_border" @click="down_menu_show=false">
                <div v-if="down_menu_show" class="down_menu">
                    <ul>
                        <li>
                            个人信息
                        </li>
                        <li>
                            关于
                        </li>
                        <li>
                            退出登录
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 下拉菜单 -->
        </div>

        <!-- 登录窗口 -->

        <Login v-if="showLoginBox" v-model:showLoginBox="showLoginBox"></Login>

        <!-- 登录窗口 -->
    </div>
</template>

<script setup>
import Login from './Login.vue'


let user_name = ref('')
let user_avatar = ref('')
let down_menu_show = ref(false)
let showLoginBox = ref(false)
const login = () => {
    showLoginBox.value = true
    // 调用接口
    user_name.value = '若知是梦何须醒'
    user_avatar.value = 'src/assets/img/avatar.jpg'
}
</script>

<style lang="less" scoped>
.user{
    position: relative;
    display: flex;
    float: right;
    margin-right: 40px;
    height: 60px;
    .user_container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        .user_avatar{
            cursor: pointer;
            img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
        }
        .user_name{
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            padding: 0 10px;
            box-sizing: border-box;
            width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .down_menu{
        z-index: 999;
        position: absolute;
        top: 60px;
        right: 40px;
        width: 150px;
        max-height: 80vh;
        border-radius: 10px;
        overflow: hidden;
        box-shadow:3px 0 5px -5px #000;
        background-color: #fff;
        li{
            padding-left: 20px;
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            line-height: 30px;
        }
        li:hover{
            background-color: #ffebeb;
        }
    }
    .bg_border{
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        width:100vw;
        height: 100vh;
    }
}
</style>