import { checkSong, getSongUrl } from '@/api/search'
import { song } from '@/store/song.js'
import { storeToRefs } from 'pinia'

const songStore = song()

let { songInfo } = storeToRefs(songStore)

const dblclickSong = async(song) => {
    const isAvailable = await checkSong({
        id:song.id
    })
    console.log(song);
    if(!isAvailable.data.success){
        return ElMessage('暂无版权')
    }
    // 信息赋值到状态
    songInfo.value.name = song.name
    songInfo.value.picUrl = song.al.picUrl
    songInfo.value.ar = song.ar
    songInfo.value.playDuration = song.dt
    // 搜索歌曲插入播放列表,id相同歌曲删除
    if(songInfo.value.songList.length){
        if(!songInfo.value.songList.some(item=>item.id === song.id)){
            songInfo.value.songList.push(song)
        }
    } else {
        songInfo.value.songList.push(song)
    }
    // 切换当前播放歌曲
    songInfo.value.currentPlayingSong = song

    // 获取歌曲url
    const { data } = await getSongUrl({
        id:song.id
    })
    songInfo.value.songUrl = data.data[0].url
    // 当前底部播放栏状态存入本地存储 使其持久化
    localStorage.setItem('PLAYING_STATE',JSON.stringify(songInfo.value))
}

export default dblclickSong