<template>
    <div class="singleSongContainer">
        <div class="singleSongTitle">
            <div class="songName">音乐标题</div>
            <div class="artistName">歌手</div>
            <div class="ablumName">专辑</div>
            <div class="timeLength">时长</div>
            <div class="hotLength">热度</div>
        </div>
        <div class="songList">
            <ul>
                <li>
                    <div class="index">序号</div>
                    <div class="likeIcon">红心</div>
                    <div class="songName">音乐标题</div>
                    <div class="artistName">歌手</div>
                    <div class="ablumName">专辑</div>
                    <div class="timeLength">时长</div>
                    <div class="hotLength">热度</div>
                </li>
                <li>
                    <div class="index">序号</div>
                    <div class="likeIcon">红心</div>
                    <div class="songName">音乐标题</div>
                    <div class="artistName">歌手</div>
                    <div class="ablumName">专辑</div>
                    <div class="timeLength">时长</div>
                    <div class="hotLength">热度</div>
                </li>
                <li>
                    <div class="index">序号</div>
                    <div class="likeIcon">红心</div>
                    <div class="songName">音乐标题</div>
                    <div class="artistName">歌手</div>
                    <div class="ablumName">专辑</div>
                    <div class="timeLength">时长</div>
                    <div class="hotLength">热度</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>



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
        .songName{
            box-sizing: border-box;
            padding-left: 150px;
            width: 40%;
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
        li{
            width: 100%;
            height: 40px;
            background-color: #FAFAFA;
            display: flex;
            .songName{
                width: 40%;
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
        li:nth-child(2n){
            background-color: #fff;
        }
    }
}
</style>