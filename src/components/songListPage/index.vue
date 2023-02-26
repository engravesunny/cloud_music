<template>
    <div v-loading="loading||!songList_info[0]" class="songListPage_container unselectable">
        <!-- 歌单信息 -->
        <div v-if="songList_info[0]" class="songList_Info">
            <!-- 歌单封面（左边） -->
            <div v-if="songList_info[0]" class="list_cover">
                <img :src="songList_info[0].coverImgUrl" alt="">
            </div>
            <!-- 歌单封面（左边） -->

            <!-- 其他信息（右边） -->
            <div v-loading="!songList_info[0]" class="other_info">
                <!-- 歌单标题 -->
                <div v-if="songList_info[0]" class="list_title">
                    <h3>{{ songList_info[0].name }}</h3>
                </div>
                <!-- 歌单标题 -->

                <!-- 创建信息 -->
                <div v-if="songListInfo.creator" class="found_info">
                    <!-- 创建者昵称 -->
                    <div class="createAvatar">
                        <img :src="songList_info[0].creator.avatarUrl" alt="">
                    </div>
                    <div class="found_name">{{ songList_info[0].creator.nickname }}</div>
                    <!-- 创建者昵称 -->

                    <!-- 创建日期 -->
                    <div class="found_date">{{ formatDate(songList_info[0].createTime)+'创建' }}</div>
                    <!-- 创建日期 -->
                </div>
                <!-- 创建信息 -->

                <!-- 播放全部按钮 -->
                <div class="playall_btn">
                    <el-button @click="playAll(songList)" class="iconfont" type="primary" round style="background:rgba(247, 116, 192,1)">&#xe87c;播放全部</el-button>
                </div>
                <!-- 播放全部按钮 -->

                <!-- 其他信息 -->
                <div class="rest_info">
                    
                    <!-- 歌曲总数 -->
                    <div class="songs_total">歌曲：{{ songList_info[0].trackCount }}</div>
                    <!-- 歌曲总数 -->

                    <!-- 播放量 -->
                    <div class="songs_playtotal">播放：{{ songList_info[0].playCount }}</div>
                    <!-- 播放量 -->
                </div>
                <!-- 其他信息 -->
            </div>
            <!-- 其他信息（右边） -->

        </div>
        <!-- 歌单信息 -->

        <!-- 歌曲列表 -->
        <singleSong v-loading="!songList.length" :songTotal="0" :current-pages="0" :result="songList"></singleSong>
        <!-- 歌曲列表 -->
    </div>
</template>

<script setup>
import playAll from '@/utils/playAll.js'
import formatDate from '@/utils/formatDate.js';
import singleSong from '../singleSong/index.vue'
import { getSongListAllSong } from '@/api/songList.js'
import { Loading } from 'element-plus/es/components/loading/src/service';
const props = defineProps(['songListInfo'])
let timer = null
let loading = ref(false)
let songList = reactive([])

let songList_info = reactive([])

onMounted(async()=>{
    timer = setInterval(async() => {
        if(props.songListInfo[0]){
            clearInterval(timer)
            timer = null
            songList_info.push(props.songListInfo[0])
            const {data} = await getSongListAllSong({
                id:props.songListInfo[0].id
            })
            data.songs.map(item=>{
                songList.push(item)
            })
        }
    }, 200);
})
watch(props,async(val)=>{
            loading.value = true
            const {data} = await getSongListAllSong({
                id:val.songListInfo[0].id
            })
            songList_info.pop()
            songList_info.push(val.songListInfo[0])
            const num = songList.length
            for(let i=0;i<num;i++){
                songList.pop()
            }
            data.songs.map(item=>{
                songList.push(item)
            })
            
            loading.value = false
        },{
            deep:true
        })

</script>

<style lang="less" scoped>
.songListPage_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    .songList_Info {
        width: 100%;
        height: 300px;
        .list_cover {
            float: left;
            margin: 50px 20px 50px 50px;
            width: 200px;
            height: 200px;
            background-color: #fff;
            border-radius: 25px;
            overflow: hidden;
            img{
                width: 200px;
                height: 200px;
            }
        }
        .other_info{
            float: left;
            margin: 50px 0;
            width: 500px;
            height: 200px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .list_title{
                margin: 8px;
            }
            .found_info{
                padding-left: 10px;
                display: flex;
                font-size: 14px;
                .createAvatar{
                    width: 25px;
                    img{
                        border-radius: 50%;
                        width: 25px;
                    }
                }
                .found_name{
                    margin: 8px;
                }
                .found_date{
                    margin: 8px;
                }
            }
            .playall_btn{
                margin: 8px;
            }
            .rest_info{
                font-size: 14px;
                display: flex;
                .songs_total{
                    margin: 8px;
                }
                .songs_playtotal{
                    margin: 8px;
                }
            }
        }
    }
}
</style>