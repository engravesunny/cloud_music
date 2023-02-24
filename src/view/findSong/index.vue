<template>
    <el-scrollbar>
        <div class="findSongContainer unselectable">
            <swiper :items="bannerList"></swiper>

            <!-- 推荐歌单 -->
            <div class="suggest_playlist">
                <suggestList :suggestLists="suggestLists" :title="suggestListsTitle"></suggestList>
            </div>
            <!-- 推荐歌单 -->

            <!-- 精品歌单 -->
            <div class="suggest_playlist">
                <highList :suggestLists="highPlayList" :title="highPlayListTitle"></highList>
            </div>
            <!-- 精品歌单 -->
        </div>
    </el-scrollbar>
    
</template>

<script setup>
import highList from './components/highList.vue'
import suggestList from './components/suggestList.vue'
import swiper from './components/swiper.vue';
import { getHotBanner, getHighPlayList, getDailyList } from '@/api/songList'

let bannerList = reactive([])

let highPlayList = reactive([])
let highPlayListTitle = '精品歌单'
let suggestLists = reactive([])
let suggestListsTitle = '推荐歌单'
onMounted(async()=>{
    const { data } = await getHotBanner({
        type:0
    })
    data.banners.forEach(item => {
        bannerList.push(item)
    });
    const res1 = await getHighPlayList({
        limit:50,
        cat:'ACG'
    })
    console.log(res1);
    res1.data.playlists.forEach((item,index)=>{
        highPlayList.push(item)
    })
    const res2 = await getDailyList({
        limit:14
    })
    res2.data.result.forEach((item,index)=>{
        suggestLists.push(item)
    })
})

</script>

<style lang="less" scoped>
.findSongContainer{
    padding-bottom: 75px;
    .suggest_playlist{
        padding: 20px;
    }
}
</style>