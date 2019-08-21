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
            path:'detail/movieId',
            components:{
                detail : ()=>import('@/views/Movie/detail')
            },
            props:{
                detail : true
            }
            //路由组件传参
// 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

// 使用 props 将组件和路由解耦：

        }
    ]
}