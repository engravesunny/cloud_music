<template>
    <div class="search">
        <div class="search_outline">

            <!-- 搜索图标 -->
            <div class="search_icon unselectable">
                <el-icon><Search style="width: 30px; height: 30px;cursor: pointer;" /></el-icon>
            </div>
            <!-- 搜索图标 -->

            <!-- 搜索输入区域 -->
            <div class="search_input unselectable">
                <input type="text" v-model="searchText" :placeholder="placeholder" @keydown.enter="fn">
            </div>
            <!-- 搜索输入区域 -->

        </div>
        <div v-if="suggestList.length" class="suggest">
            <div class="suggest_title">猜你想搜</div>
            <ul>
                <li class="suggest_cell" v-for="(item,index) in suggestList" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

// 搜索功能
let placeholder = ref('春节名曲 过年必备')
let searchText = ref('')
const fn = () => {
    console.log(searchText.value);
}
let suggestList = reactive([])
</script>

<style lang="less" scoped>
.search{
    position: relative;
    display: flex;
    float: left;
    margin-top: 14px;
    margin-left: 100px;
    width: 30%;
    height: 30px;
    background-color: #fff;
    .search_outline{
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 34px;
        border-radius: 25px;
        background: rgba(0, 0, 0, 0.1);
        .search_icon{
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            padding-top: 14px;
        }
        .search_input{
            width: 100%;
            input{
                width: 100%;
                border: none;
                background: rgba(0,0,0,0);
                outline: none;
            }
        }
    }
    .suggest{
        position: absolute;
        top: 50px;
        left: 0;
        width: 400px;
        max-height: 80vh;
        border-radius: 10px;
        overflow: hidden;
        box-shadow:3px 0 5px -5px #000;
        background-color: #fff;
        .suggest_title{
            padding:10px 10px 10px 10px;
            font-size: 20px;
            font-weight: 700;
        }
        .suggest_cell{
            padding-left: 20px;
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            line-height: 30px;
        }
        .suggest_cell:hover{
            background-color: #ffebeb;
        }
    }
}

</style>