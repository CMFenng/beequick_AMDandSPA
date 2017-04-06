// 使用 text 和 css 可以解析 html 内容和 css 内容
// 语法是 text! + 路径       这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的当前页面中
define(["text!./cart.html", "$css!./cart.css"], function (html) {
    
    $(function () {
        // 加载购物车物品列表
        shopCartListTr();
    })
    
    // 购物车物品列表
    function shopCartListTr () {
        // 将数据封装成一个对象，并利用百度模板创建 html
        var shopCartListObj = {
//              shopCartListArr : shopCartListArr
        }
        // 模板生成的是一个字符串
        var shopCartListStr = baidu.template('shopCartList_tpl', shopCartListObj);
        // 将字符串解析为 html 代码
        $('#shopCartList tbody').html(shopCartListStr);
    }
    
    return {
        // 渲染页面的方法
        render : function () {
            $("#container").html(html);
        }
    }
})