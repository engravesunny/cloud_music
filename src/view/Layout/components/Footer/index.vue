<template>
    <div class="footer unselectable">

            <!-- 歌曲封面 -->
            <div class="songImg">歌曲封面</div>
            <!-- 歌曲封面 -->

            <!-- 上一曲、暂停、下一曲 -->
            <div class="songOption">
                <div class="beforeSong">上一曲</div>
                <div class="pause">暂停</div>
                <div class="nextSong">下一曲</div>
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

<style lang="less" scoped>
.footer{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-width: 500px;
    height: 75px;
    background-color: red;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    .songImg{
        width: 10%;
        background-color: #f7d5d5;
    }
    .songOption{
        width: 20%;

        display: flex;
        justify-content: space-around;
        background-color: #fff;
        .beforeSong{

        }
        .pause{

        }
        .nextSong{

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