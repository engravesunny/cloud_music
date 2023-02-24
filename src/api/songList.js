import request from '@/utils/request'

// 轮播图
export const getHotBanner = params=>request({
    url:'/banner'
})

// 精品歌单

export const getHighPlayList = params=>request({
    url:'/top/playlist/highquality',
    params
})
