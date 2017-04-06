// 这里如果不导入 backbone，会报错：Backbone is not defined
// 注意：Backbone 是框架中的一个类名，并不是全局的
define(["backbone"], function () {
    // 构建路由器
    var Router = Backbone.Router.extend({
        routes: {
            // 属性是 index.html 中的锚点值
            // 值是点击该锚点触发的功能逻辑
            "home" : function () {
                require(["./modules/home/home"], function (Home) {
                    // 调用页面渲染的方法
                    Home.render();
                })
            },
            "market" : function () {
                require(["./modules/market/market"], function (Market) {
                    // 调用页面渲染的方法
                    Market.render();
                })
            },
            "cart" : function () {
                require(["./modules/cart/cart"], function (Cart) {
                    // 调用页面渲染的方法
                    Cart.render();
                })
            },
            "my" : function () {
                require(["./modules/my/my"], function (My) {
                    // 调用页面渲染的方法
                    My.render();
                })
            },
            // 除了以上路由规则以外的情况
            "*action" : function () {
                location.hash = "home";
            }
        }
    });
    
    // 路由构建好后，需要进行实例化
    new Router();
    // 驱动路由的 URL
    Backbone.history.start();
})