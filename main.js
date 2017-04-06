require.config({
    paths : {
        jquery : "lib/jquery",
        // 解析 html 内容的库
        text : "lib/text",
        // 解析 css 内容的库
        // 注意：这个名字前面我们要加一个 $，如果不加，以后代码压缩会有问题
        $css : "lib/css",
        // backbone 框架所依赖的库
        underscore : "lib/underscore",
        // backbone 框架：注意我们的项目只用到了这个框架内的路由模块
        backbone : "lib/backbone",
        // 路由器模块
        router : "router",
        baiduTemplate : "lib/baiduTemplate",
        lazyload : "lib/jquery.lazyload.min"
    }
})

// 注意：当这里导入的不是 jquery 而是 zepto 时，函数的形参不能写，不然会报错
require(["jquery", "baiduTemplate", "router"], function ($) {
    
})