// 创建audio标签，赋值src，并播放
// songUrl:歌曲url，isLoop:是否循环
const createAudio = (songUrl,isLoop) => {
    // 如果已有audio标签，就删除它
    const audios = document.querySelectorAll('audio')
    if(audios){
        for(let i=0;i<audios.length;i++){
            audios[i].remove()
        }
    }
    const audio = document.createElement('audio')
    audio.src = songUrl
    audio.loop=isLoop
    audio.style = 'display:none;'
    document.body.appendChild(audio)
    // 音乐就绪
    audio.addEventListener("canplaythrough",function () {
        audio.play()
    });
}

export default createAudio;