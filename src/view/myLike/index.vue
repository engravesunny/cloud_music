<template>
  <el-scrollbar>
    <div>
      <songListPage :songListInfo="songListInfo" ></songListPage>
    </div>
  </el-scrollbar>
</template>

<script setup>
import songListPage from '../../components/songListPage/index.vue'
import { getUserSongList } from '@/api/myFavourite'
import { getUserInfoDetail } from '@/api/user.js'
import { user } from '@/store/user.js'
import { storeToRefs } from 'pinia';
const userStore = user()
const {userInfo} = storeToRefs(userStore)

const songListInfo = reactive([])

onMounted(async()=>{
  if(!userInfo.value.id){
    const {data} = await getUserInfoDetail()
    userInfo.value.nickname = data.profile.nickname
    userInfo.value.avatarUrl = data.profile.avatarUrl
    userInfo.value.id = data.account.id
  }
  try {
    const {data} = await getUserSongList({
      uid:userInfo.value.id
    })
    songListInfo.push(data.playlist[0])
  } catch (error) {
    Promise.reject(error)
  }
})

</script>

<style>

</style>