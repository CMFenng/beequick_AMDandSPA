// 使用 text 和 css 可以解析 html 内容和 css 内容
// 语法是 text! + 路径       这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的当前页面中
define([
        "text!./home.html",
        "../header/header",
        "swiper", 
        "$css!./home.css",
        "$css!../../lib/swiper-3.3.1.min.css"
        ], function (html, Header) {
    
    $(function () {
        // 导入公共 header
        Header.render("#home_header");
        
        // 模拟的轮播图数据
        var imgArr = [
            "img/banner1.jpg",
            "img/banner2.jpg",
            "img/banner3.jpg",
            "img/banner4.jpg"
        ];
        // 加载轮播图
        bannerFn(imgArr);
        
        // 模拟的主题列表数据
        var themeArr =[
            {
                url : "img/gongying.png",
                themeName : "鲜货直供"
            },{
                url : "img/food.png",
                themeName : "零食"
            },{
                url : "img/shuanmiMarket.png",
                themeName : "闪送超市"
            }
        ];
        // 加载主题列表
        themeUlFn(themeArr);
        
        // 加载种类列表
        categoryUl();
    })
    
    // 轮播图
    function bannerFn (imgArr) {
        // 将数据封装成一个对象，并利用百度模板创建 html
        var bannerObj = {
            imgArr : imgArr
        }
        // 模板生成的是一个字符串
        var bannerStr = baidu.template('banner_tpl', bannerObj);
        // 将字符串解析为 html 代码
        $('.swiper-wrapper').html(bannerStr);
        
        // 轮播图轮播效果（要先创建 html 后才可以写效果，不然会出现即使加载到图片也不会轮播的情况）
        var mySwiper = new Swiper('.swiper-container', {
            //可选选项，自动滑动
            autoplay : 3000,
            // 速度
            speed : 500,
            //手动滑动之后，依然可以自动轮播
            autoplayDisableOnInteraction : false,
            //分页器
            pagination : '.swiper-pagination',
            //环路
            loop : true
        });
    }
    
    // 主题列表
    function themeUlFn (themeArr) {
        // 将数据封装成一个对象，并利用百度模板创建 html
        var themeObj = {
            themeArr : themeArr
        }
        // 模板生成的是一个字符串
        var themeStr = baidu.template('theme_tpl', themeObj);
        // 将字符串解析为 html 代码
        $('#themeUl').html(themeStr);
    }
    
    // 种类列表
    function categoryUl () {
        // 将数据封装成一个对象，并利用百度模板创建 html
        var categoryObj = {
//              categoryArr : categoryArr
        }
        // 模板生成的是一个字符串
        var categoryStr = baidu.template('category_tpl', categoryObj);
        // 将字符串解析为 html 代码
        $('#categoryUl').html(categoryStr);
    }
    
    return {
        // 渲染页面的方法
        render : function () {
            $("#container").html(html);
        }
    }
})