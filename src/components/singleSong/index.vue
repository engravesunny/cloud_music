<template>
    <div class="singleSongContainer">

        <!-- 歌曲列表 -->

        <!-- 表头标题 -->
        <div class="singleSongTitle">
            <div class="option">操作</div>
            <div class="songName">音乐标题</div>
            <div class="artistName">歌手</div>
            <div class="ablumName">专辑</div>
            <div class="timeLength">时长</div>
            <div class="hotLength">热度</div>
        </div>

        <!-- 歌曲列表内容 -->
        <div class="songList">
            <ul>
                <li v-for="(item,index) in result" :key="item.id" @dblclick="dblclickSong(item)">
                    <div class="option">
                        <div class="index">{{ (index+1)<10?'0'+(index+1):(index+1) }}</div>
                        <div class="iconfont">&#xe8ab;</div>
                    </div>
                    <div class="songName">
                        {{ item.name }}
                    </div>
                    <div class="artistName">
                        <div class="showName">
                            {{ mulArShow(item.ar) }}
                        </div>
                    </div>
                    <div class="ablumName">{{ item.al.name }}</div>
                    <div class="timeLength">{{ formatTime(item.dt) }}</div>
                    <div class="hotLength">{{ item.pop }}</div>
                </li>
            </ul>
        </div>
        <!-- 歌曲列表内容 -->

        <!-- 列表分页导航 -->
        <div class="page">
            <el-pagination
                :page-size="100"
                :pager-count="11"
                :current-page="currentPages+1"
                layout="prev, pager, next"
                :total="songTotal.value"
                @current-change="currentChange"
            />
        </div>
        <!-- 列表分页导航 -->

        </div>

</template>

<script setup>
import '@/assets/icon/iconfont/iconfont.css'
import { search } from '@/api/search'
// 分割多歌手工具
import mulArShows from '@/utils/mulArShow.js'
// 引入底部播放栏状态信息
import { song } from '@/store/song.js'
import { storeToRefs } from 'pinia'

const mulArShow = mulArShows

const songStore = song()

let { songInfo } = storeToRefs(songStore)


const route = useRoute()
const router = useRouter()

// 当前页码
const currentPage = ref(0)
let props = defineProps(['result','songTotal','currentPages'])
const emit = defineEmits(['updatePage'])

let results = computed(()=>{ return result })

// 毫秒转 分:秒
const formatTime= (a)=> {
        let m = 0
        let s = 0
        m = Math.floor(a/60000)
        s = Math.floor((a%60000)/1000)
        const tos = (a) => {
            if(a<10){
                return '0'+a
            } else {
                return a.toString()
            }
        }
        return tos(m) + ':' + tos(s)

}

// 页码改变
const currentChange = (page)=>{
    currentPage.value = page
    emit('updatePage',currentPage)
}

// 双击播放
const dblclickSong = (song) => {
    songInfo.value.name = song.name
    songInfo.value.picUrl = song.al.picUrl
    songInfo.value.ar = song.ar
    // 搜索歌曲直接插入播放列表
    songInfo.value.songList.push(song)
    // 切换当前播放歌曲
    songInfo.value.currentPlayingSong = song

    // 当前底部播放栏状态存入本地存储 使其持久化
    localStorage.setItem('PLAYING_STATE',JSON.stringify(songInfo.value))
    console.log(song);
    console.log(songInfo);
}
</script>

<style lang="less" scoped>
.singleSongContainer{
    width: 100%;
    height: 100%;
    .singleSongTitle{
        display: flex;
        justify-content: flex-start;
        width: 100%;
        font-size: 14px;
        color: #888888;
        .option{
            box-sizing: border-box;
            padding-left: 80px;
            width: 10.2%;
        }
        .songName{
            box-sizing: border-box;
            padding-left: 40px;
            width: 30%;
        }
        .artistName{
            width: 20%;
        }
        .ablumName{
            width: 20%;
        }
        .timeLength{
            width: 10%;
        }
        .hotLength{
            width: 10%;
        }
    }
    .songList{
        font-size: 14px;
        li{
            // position: relative;
            width: 100%;
            height: 40px;
            background-color: #FAFAFA;
            display: flex;
            line-height: 40px;
            box-sizing: border-box;
            .option{
                box-sizing: border-box;
                padding-left: 80px;
                width: 10.2%;
                display: flex;
                justify-content: flex-start;
                .index{
                    margin-left: -40px;
                }
                .iconfont{
                    margin-left:28px;
                    cursor: pointer;
                }
            }
            .songName{
                box-sizing: border-box;
                padding-left: 40px;
                width: 30%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                padding-right: 10px;
            }
            .artistName{
                width: 20%;
                box-sizing: border-box;
                padding-right: 10px;
                .showName{
                    width: 200px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .ablumName{
                width: 20%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                padding-right: 10px;
            }
            .timeLength{
                width: 10%;
            }
            .hotLength{
                width: 10%;
            }
        }
        li:nth-child(2n){
            background-color: #fff;
        }
        li:hover{
            background-color: #f2f2f3;
        }
    }
    .page{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>