<template>
    <div>
        <h2>
            {{title}}
        </h2>
        <div class="playlist_container">
            <ul>
                <li v-for="item in suggestLists" :key="item.id">
                    <img :src="item.coverImgUrl" alt="">
                    <div class="name">{{item.name}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let props = defineProps(['suggestLists','title'])
onMounted(()=>{
    // console.log(highPlayList);
})
</script>

<style lang="less" scoped> 
.playlist_container{
    width: 100%;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        li{
            margin: 10px;
            width: 17%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            img{
                width: 180px;
                border-radius: 10px;
            }
            .name{
                height: 40px;
                padding: 3px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;  //增加允许在单词内换行
            }
        }
    }
}
</style>