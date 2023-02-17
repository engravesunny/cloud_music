<template>
    <div class="search_container unselectable">
        <div class="search_title unselectable">
            搜索 {{ testSearchText }}
        </div>
        <div class="search_type_option">
            搜索类型选择
        </div>
        <div class="search_result">
            搜索结果
        </div>
    </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

const testSearchText = ref('关键词')
const searchText = inject('searchText')
</script>

<style lang="less" scoped>
.search_container{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    .search_title{
        height: 80px;
        box-sizing: border-box;
        padding-left: 30px;
        line-height: 80px;
        font-size: 20px;
        font-weight: 700;
        background-color: pink;
    }
    .search_type_option{
        height: 50px;
        background-color: skyblue;
    }
    .search_result{
        flex: 1;
        background-color: gray;
    }
}
</style>
