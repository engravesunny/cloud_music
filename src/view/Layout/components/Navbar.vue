<template>

    <div class="top_menu">
        <!-- logo -->
        <div class="logo">111</div>
        <!-- logo -->

        <!-- 搜索框 -->
        <div class="search"></div>
        <!-- 搜索框 -->

        <!-- 用户头像 -->
        <div class="user"></div>
        <!-- 用户头像 -->
    </div>

</template>

<style lang="less">
.top_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background: #000;
    .logo{
        width: 50px;
        height: 50px;
        background-color: #fff;
    }
    .search{
        width: 50%;
        height: 50px;
        background-color: #fff;
    }
    .user{
        width: 50px;
        height: 50px;
        background-color: #fff;
    }
}
</style>