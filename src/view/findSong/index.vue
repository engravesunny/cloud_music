<template>
    <el-scrollbar>
        <div class="findSongContainer unselectable">
            <swiper :items="bannerList"></swiper>

            <!-- 推荐歌单 -->
            <div class="suggest_playlist">
                <suggestList :highPlayList="highPlayList"></suggestList>
            </div>
            <!-- 推荐歌单 -->

        </div>
    </el-scrollbar>
    
</template>

<script setup>
import suggestList from './components/suggestList.vue'
import swiper from './components/swiper.vue';
import { getHotBanner, getHighPlayList } from '@/api/songList'

let bannerList = reactive([])

let highPlayList = reactive([])

onMounted(async()=>{
    const { data } = await getHotBanner({
        type:0
    })
    data.banners.forEach(item => {
        bannerList.push(item)
    });
    const res = await getHighPlayList({
        limit:50
    })
    res.data.playlists.forEach((item,index)=>{
        highPlayList.push(item)
    })
    console.log(highPlayList);
})

</script>

<style lang="less" scoped>
.findSongContainer{
    .suggest_playlist{
        padding: 20px;
    }
}
</style>