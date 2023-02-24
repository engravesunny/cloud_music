import { song } from '@/store/song.js'
import { storeToRefs } from 'pinia'

const songStore = song()

let { songInfo } = storeToRefs(songStore)

import playSong from './playSong'

const nextSong = (isOK) => {
    if(songInfo.value.songList.length&&songInfo.value.songList.length === 1){
        playSong(songInfo.value.songList[0])
    }
    if(isOK){
        // 下一首
        if(songInfo.value.songList.length) {
            let next = 0
            songInfo.value.songList.forEach((item,index) => {
                if(item.id === songInfo.value.currentPlayingSong.id) {
                    next = index + 1
                }
            });
            if(next-1 === songInfo.value.songList.length-1) {
                next = 0
            }
            playSong(songInfo.value.songList[next])
        } else {
            return 
        }
    } else {
        // 上一首
        if(songInfo.value.songList.length) {
            let next = 0
            songInfo.value.songList.forEach((item,index) => {
                if(item.id === songInfo.value.currentPlayingSong.id) {
                    next = index - 1
                }
            });
            if(next === -1) {
                next = songInfo.value.songList.length-1
            }
            playSong(songInfo.value.songList[next])
        } else {
            return 
        }
    }
}

export default nextSong