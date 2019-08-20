
module.exports={
  devServer: {
    proxy:{
      '/api':{
        target :'http://39.97.33.178',
        changeOrigin:true
        //代理城市接口地址
      }
    }
  
}
   
     
// baseUrl:'/',//根路径
// outputDir:'dist',//构建输出目录
// assetsDir:'assets',//
// lintOnSave: false,
// devSever:{
//     open:true,
//     host:'localhost',
//     port:8080,
//     https:false,
//     hotOnly:false,
    // proxy:{//配置跨域
    //     // '/api':{
    //     //     target:'http//localhost:5000/api/',
    //     //     ws:true,
    //     //     changeOrigin:true,
    //     //     pathRewirte:{
    //     //         '^/api':''
    //         }
    //     }
        
    // },


};