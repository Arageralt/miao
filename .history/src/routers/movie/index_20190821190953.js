export default{
    path:'/movie',
    component : ()=>import('@/views/Movie'),
    // 二級路由配置，path名字自己取盡量相似
    children :[
        {
            path:'city',
            component : () => import('@/components/City')
        },
        {
            path:'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component : () => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        },
        {
            path:'detail',
            components:{
                detail
            }
        }
    ]
}