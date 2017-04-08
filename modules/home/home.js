// 使用 text 和 css 可以解析 html 内容和 css 内容
// 语法是 text! + 路径       这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的当前页面中
define(["text!./home.html", "../header/header", "$css!./home.css", "lazyload"], function (html, Header) {
    
    // 导入公共 header
    function getHeader() {
        Header.render("#home_header");
    }
    
    // 请求轮播图和菜单项数据
    function getSlideAndMenuDataByTpl () {
        $.getJSON("http://h5.yztctech.net/api/axf/apihome.php", null,
        function (resultData) {
            // 轮播图
            var bannerStr = baidu.template('banner_tpl', resultData.data);
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
            
            // 菜单项
            var themeStr = baidu.template('theme_tpl', resultData.data);
            // 将字符串解析为 html 代码
            $('#themeUl').html(themeStr);
        })
    }
    
    // 种类列表
    function categoryUl () {
        // 将数据封装成一个对象，并利用百度模板创建 html
        var categoryObj = {};
        // 模板生成的是一个字符串
        var categoryStr = baidu.template('category_tpl', categoryObj);
        // 将字符串解析为 html 代码
        $('#categoryUl').html(categoryStr);
    }
    
    //ES6 首页热卖数据
    function getHotDataByES6 () {
        $.getJSON('http://h5.yztctech.net/api/axf/apihomehot.php', null, 
        function (resultData) {
            var str = ``;
            for (var tempHot of resultData.data) {
                str += `<a href="javascript:0;" class="hot_content_item">
                            <img data-original="${ tempHot.img }" alt="" />
                            <p class="title">${ tempHot.name }</p>
                            <p>
                                <span class="best">精选</span>
                                <span class="maizeng">${ tempHot.pm_desc }</span>
                            </p>
                            <p class="weight">${ tempHot.specifics }</p>
                            <p class="price_container">
                                <span class="now_price">￥${ tempHot.price }</span>
                                <span class="original_price">￥${ tempHot.market_price }</span>
                            </p>
                            <span class="add">+</span>
                        </a>`;
            }
            
            $('#hot_content').html(str);
            console.log($('#hot_content img'));
            console.log($('#hot_content img').lazyload());
            
            //懒加载, 注意:img 不要设置src属性, 把数据存储在data-original属性中
            $('#hot_content img').lazyload({
                effect : 'fadeIn'
            })
        })
    }
    
    
    
    return {
        // 渲染页面的方法
        render : function () {
            $("#container").html(html);
            
            // 导入头部数据
            getHeader();
            
            // 请求轮播图和菜单项数据
            getSlideAndMenuDataByTpl();
            
            // 加载种类列表
            categoryUl();
            
            //请求首页热卖数据
            getHotDataByES6();
        }
    }
})