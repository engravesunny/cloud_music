<template>
    <div class="footer unselectable">

            <!-- 歌曲封面 -->
            <div class="songImg">
                <img :src="songState.picUrl" alt="">
            </div>
            <!-- 歌曲封面 -->

            <!-- 歌曲名称 -->
            <div class="songInfo">
                <div class="songName shenglue">{{ songState.name }}</div>
                <div class="songAr shenglue">{{ mulArShow(songState.ar) }}</div>
            </div>
            <!-- 歌曲名称 -->

            <!-- 上一曲、暂停、下一曲 -->
            <div class="songOption">
                <div class="beforeSong iconfont"><p>&#xe63c;</p></div>
                <div class="pause iconfont" @click="isPlaying = !isPlaying">
                    <span v-if="isPlaying">&#xe87a;</span>
                    <span v-else>&#xe87c;</span>
                </div>
                <div class="nextSong iconfont"><p>&#xe63e;</p></div>
            </div>
            <!-- 上一曲、暂停、下一曲 -->

            <!-- 进度条、时间 -->
            <div class="timeProgress">进度条、时间</div>
            <!-- 进度条、时间 -->

            <!-- 播放模式 -->
            <div class="playMode">播放模式</div>
            <!-- 播放模式 -->

            <!-- 音量 -->
            <div class="volume">音量</div>
            <!-- 音量 -->

            <!-- 播放列表 -->
            <div class="playList">播放列表</div>
            <!-- 播放列表 -->
    </div>
</template>

<script setup>
// 引入图标
import '@/assets/icon/iconfont/iconfont.css'
// 引入多歌手分割工具
import mulArShow from '../../../../utils/mulArShow';
// 引入底部播放栏状态信息
import { song } from '@/store/song.js'
import { storeToRefs } from 'pinia'
const songStore = song()
let isPlaying = ref(false)
let songState = JSON.parse(localStorage.getItem('PLAYING_STATE'))
// 初始化
onBeforeMount(() => {
    let { songInfo } = storeToRefs(songStore)
    if(songInfo.value.name){
        let songState = songInfo.value
    } else {
        songInfo.value = JSON.parse(localStorage.getItem('PLAYING_STATE'))
        songState = songInfo.value
    }
})
</script>


<style lang="less" scoped>
.footer{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    background-color: #fff;
    min-width: 1250px;
    height: 75px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    .songImg{
        width: 6%;
        box-sizing: border-box;
        img{
            border-radius: 10px;
            margin-left: 20px;
            width: 50px;
        }
    }
    .songInfo{
        display: flex;
        flex-direction: column;
        width: 10%;
        .songName{
            font-size: 16px;
        }
        .songAr{
            font-size: 12px;
        }
    }
    .songOption{
        width: 10%;
        height: 75px;
        line-height: 75px;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        .beforeSong{
            font-size: 18px;
            cursor: pointer;
        }
        .pause{
            padding-bottom: 2px;
            font-size: 20px;
            cursor: pointer;
        }
        .nextSong{
            font-size: 18px;
            cursor: pointer;
        }
        .beforeSong:hover, .pause:hover, .nextSong :hover{
            color: #716f6f;
        }
    }
    .timeProgress{
        flex: 1;
        background-color: #f2bebe;
    }
    .playMode{
        width: 5%;
        background-color: #837d7d;
    }
    .volume{
        background-color: #8f75f9;
        width: 5%;
    }
    .playList{
        background-color: #e85050;
        width: 5%;
    }
}   
</style>