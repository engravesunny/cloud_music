<template>
    <div>
        <h2>
            推荐歌单
        </h2>
        <div class="playlist_container">
            <ul>
                <li v-for="item in highPlayList" :key="item.id">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let props = defineProps(['highPlayList'])
onMounted(()=>{
    // console.log(highPlayList);
})
</script>

<style>

</style>