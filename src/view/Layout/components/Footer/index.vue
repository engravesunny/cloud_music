<template>
    <div class="footer unselectable">

            <!-- 歌曲封面 -->
            <div v-if="songState.picUrl" class="songImg">
                <img :src="songState.picUrl" alt="">
            </div>
            <!-- 歌曲封面 -->

            <!-- 歌曲名称 -->
            <div v-if="songState.name" class="songInfo">
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
            <div class="timeProgress">
                <audio ref="aud" v-if="songState.songUrl" controls class="aud">
                    <source ref="src" :src="songState.songUrl" />
                </audio>
            </div>
            <!-- 进度条、时间 -->

            <!-- 播放模式 -->
            <div class="playMode">
                <div v-if="songState.playMode===0" class="seqPlay iconfont" @click="changePlayMode">&#xea6f;</div>
                <div v-if="songState.playMode===1" class="loopPlay iconfont" @click="changePlayMode">&#xe66c;</div>
                <div v-if="songState.playMode===2" class="singlePlay iconfont" @click="changePlayMode">&#xe66d;</div>
                <div v-if="songState.playMode===3" class="randomPlay iconfont" @click="changePlayMode">&#xe66b;</div>
            </div>
            <!-- 播放模式 -->

            <!-- 音量 -->
            <div class="volume iconfont"><span class="icon">&#xe605;</span></div>
            <!-- 音量 -->

            <!-- 播放列表 -->
            <div class="playList iconfont" @click="playListShow"><span class="icon">&#xe62d;</span></div>
            <!-- 播放列表 -->
    </div>
</template>

<script setup>
import { getSongUrl } from '@/api/search'
// 引入图标
import '@/assets/icon/iconfont/iconfont.css'
// 引入多歌手分割工具
import mulArShow from '../../../../utils/mulArShow';
// 引入底部播放栏状态信息
import { song } from '@/store/song.js'
import { storeToRefs } from 'pinia'
const songStore = song()
let { songInfo } = storeToRefs(songStore)

const aud = ref(null)
const src = ref(null)
const getDom = getCurrentInstance()

let songUrl = ref('1')


// 播放状态 暂停/播放
let isPlaying = ref(false)

// 播放状态暂存
let songState = reactive({})
songState = JSON.parse(localStorage.getItem('PLAYING_STATE'))
// 初始化
onBeforeMount(() => {
    if(songInfo.value.name){
        let songState = songInfo.value
    } else {
        if(localStorage.getItem('PLAYING_STATE')){
            songInfo.value = JSON.parse(localStorage.getItem('PLAYING_STATE'))
        }
        songState = songInfo.value
    }
    
})

// 展示播放列表
const playListShow = () => {
    console.log(songState.songList);
}
// 改变播放模式
const changePlayMode = () => {
    songInfo.value.playMode++
    if(songInfo.value.playMode===4){
        songInfo.value.playMode = 0
    }
}

watch(()=>songInfo,(newval)=>{
    console.log('songInfo',newval);
    console.log(getDom.refs);
    if(getDom.refs.src){
        getDom.refs.src.src = newval.value.songUrl
        console.log(getDom.refs.src.src);
        console.log(newval.value.songUrl);
        document.querySelector('audio').play()
    }
},{
    deep:true
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
    min-width: 900px;
    height: 75px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    .songImg{
        width: 90px;
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
        width: 100px;
        .songName{
            font-size: 16px;
        }
        .songAr{
            font-size: 12px;
        }
    }
    .songOption{
        width: 180px;
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
    }
    .playMode{
        width: 40px;
        box-sizing: border-box;
        padding: 10px;
        .iconfont{
            cursor: pointer;
            font-size: 20px;
            font-weight: 700;
            color: #000000;
        }
    }
    .volume{
        width: 40px;
        box-sizing: border-box;
        padding: 10px;
        .icon{
            font-size: 22px;
            cursor: pointer;
            color: #000000;
        }
    }
    .playList{
        width: 40px;
        box-sizing: border-box;
        padding: 10px;
        .icon{
            font-size: 27px;
            cursor: pointer;
            color: #000000;
        }
    }
    
    .icon:hover,.iconfont:hover{
        color: #716f6f;
    }
}   
</style>