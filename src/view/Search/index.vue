<template>
    <div class="search_container unselectable">
        <div class="search_title unselectable">
            搜索 <span style="font-size:21px">{{ testSearchText }}</span>
        </div>
        <div class="search_type_option">
            <ul class="type_list">
                <li :class="{active: searchType===1}" @click="e=>changeSearchType(e)">单曲</li>
                <li :class="{active: searchType===1000}" @click="e=>changeSearchType(e)">歌单</li>
                <li :class="{active: searchType===100}" @click="e=>changeSearchType(e)">歌手</li>
                <li :class="{active: searchType===10}" @click="e=>changeSearchType(e)">专辑</li>
                <li :class="{active: searchType===1014}" @click="e=>changeSearchType(e)">视频</li>
                <li :class="{active: searchType===1009}" @click="e=>changeSearchType(e)">播客</li>
                <li :class="{active: searchType===1002}" @click="e=>changeSearchType(e)">用户</li>
            </ul>
        </div>
        <div class="search_result">
            <keep-alive>
                <component :is="searchTypeComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, shallowRef } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { search } from '@/api/search'
import singleSong from '@/components/singleSong/index.vue'
import ablum from './components/ablum/index.vue'
import artists from './components/artists/index.vue'
import songList from './components/songList/index.vue'
import cloudUser from './components/cloudUser/index.vue'
import video from './components/video/index.vue'
import podcasts from './components/podcasts/index.vue'
const route = useRoute()

// 搜索关键词展示
const testSearchText = ref('关键词')

// 搜索结果
const searchResult = reactive([])
// 搜索类型
const searchType = ref(1)
const searchTypeComponent = shallowRef(singleSong)

// 搜索类型转义
const tranalateType = (type) => {
    switch (type) {
        case '单曲':
            return {typeCode:1,typeName:'singleSong'}
        case '专辑':
            return {typeCode:10,typeName:'ablum'}
        case '歌手':
            return {typeCode:100,typeName:'artists'}
        case '歌单':
            return {typeCode:1000,typeName:'songList'}
        case '用户':
            return {typeCode:1002,typeName:'cloudUser'}
        case 'MV':
            return {typeCode:1004,typeName:'MV'}
        case '视频':
            return {typeCode:1014,typeName:'video'}
        case '播客':
            return {typeCode:1009,typeName:'podcasts'}
        default:
            return false;
    }
}
// 获取搜索关键词歌曲
const getSearchSongs = async () => {
    const { searchValue } = route.query
    testSearchText.value = searchValue
    const {data} = await search({
        keywords:searchValue
    })
    data.result.songs.forEach(item=>{
        searchResult.push(item)
    })
    console.log(searchResult);
}

// 切换搜索类型
const changeSearchType = async (e) => {
    const res = tranalateType(e.target.innerText)
    searchType.value = res.typeCode
    switch (res.typeName) {
        case 'singleSong':
            searchTypeComponent.value = singleSong
            break;
        case 'ablum':
            searchTypeComponent.value = ablum
            break;
        case 'artists':
            searchTypeComponent.value = artists
            break;    
        case 'songList':
            searchTypeComponent.value = songList
            break;  
        case 'cloudUser':
            searchTypeComponent.value = cloudUser
            break;  
        case 'video':
            searchTypeComponent.value = video
            break;  
        case 'podcasts':
            searchTypeComponent.value = podcasts
            break;  
        default:
            break;
    }
}

onMounted(()=>{
    // 初始化获取歌曲
    getSearchSongs()
})  

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
    }
    .search_type_option{
        height: 50px;
        margin: 20px 0;
        .type_list{
            width: 100%;
            height: 100%;
            display: flex;
            li{
                box-sizing: border-box;
                margin: auto 30px;
                height: 100%;
                padding: 13px;
                transition: all 0.1s;
            }
            .active{
                font-size: 17px;
                font-weight: 700;
                border-bottom: 2px solid gray;
            }
        }
    }
    .search_result{
        flex: 1;
    }
}
</style>
