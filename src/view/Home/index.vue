<template>
    <div class="home_container unselectable">
        <span>首页</span>
        
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import { user } from '../../store/user'
import { storeToRefs } from 'pinia'

const userStore = user()
let { userInfo, getUserInfo } = storeToRefs(userStore)
const changeNum = () => {
    console.log(getUserInfo)
}

onMounted(()=>{
    
})

const login =async ()=>{
    const res = await sendCode({
        phone: '18852182238'
    })
    console.log(res)
}
</script>
