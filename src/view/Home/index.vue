<template>
    <div class="home_container unselectable">
        <span>首页</span>
    </div>
</template>

<script setup>

const login =async ()=>{
    const res = await sendCode({
        phone: '18852182238'
    })
    console.log(res)
}
</script>
