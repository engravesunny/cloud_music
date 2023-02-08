<template>
    <div class="home_container">
        首页
        <el-button type="primary"></el-button>
        <div style="font-size: 20px">
            <!-- 由于SVG图标默认不携带任何属性 -->
            <!-- 你需要直接提供它们 -->
            <Edit style="width: 1em; height: 1em; margin-right: 8px" />
            <Share style="width: 1em; height: 1em; margin-right: 8px" />
            <Delete style="width: 1em; height: 1em; margin-right: 8px" />
            <Search style="width: 1em; height: 1em; margin-right: 8px" />
            <el-button @click="login">发送验证码</el-button>
        </div>
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
