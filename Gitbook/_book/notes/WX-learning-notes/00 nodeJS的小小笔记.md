
> ----------------------------------------------     微信小程序   ---------------------------------------------------------
# 1.小程序:依赖于微信这个平台,'用完即走'的特点;
>   它的接口:小程序和微信提供的;
>   app开头的文件,都是一些公用的文件;

# 2. .json后缀的文件的作用:
    1> 更改主页;
    2> 设置窗口外观(背景色,字体颜色,字体内容,是否设置下拉刷新);
>   注:状态栏(navigationBarTextStyle)仅支持White和black两种颜色;
>   注:含有style的属性都是只支持两种颜色(light&drake,White&black);

# 3.debug
    将一些调试信息在控制台打印出来;

# 4.逻辑层(用JS完成):
    1> 生命周期事件;
    2> 获取数据;
    3> 页面事件处理;

# 5.小程序不支持 DOM,BOM操作;
    1> 支持ECMA ;
    2> 支持微信APIs ;

# 6.console.log()可以使用,因为微信自身实现了console.log();

# 7.微信内部提供自身的API(可操作文件,网络,媒体);
    1> wx.request();
    2> wx.saveFile();
    3> wx.ChooseImage();

# 8.应用的生命周期(app.js中通过App({...})注册)
    App({
>    创建实例对象
        onLaunch:function(){
>        在整个应用启动时触发,只触发一次
            ...
        },
        onShow:function(options){
>        应用显示到屏幕上(即前台显示了,小程序界面);
>           options每次成为焦点状态都会触发;
            ...
        },
        onHide:function(){
>        隐藏到后台(微信界面);
        },
        onError:function(msg){
>        程序出错时触发,只能捕获到运行阶段的异常(可以认为他在onLoad阶段触发);
>        msg为字符串;
        },
        foo:'bar',
        say (){
            ...
        }
>        除了钩子函数,还可以自定义全局成员,后续页面可以共享(别的页面通过var app = getApp(),app.foo或app.say()获取);
    })

# 9.手动抛出异常;
    throw new Error('hello error');

# 10.页面的生命周期(用 Page({...}) 创建);
    Page({
        data:{
            foo:''
        },
        onLoad(){
>        这个页面即将要工作了(类似于Onlaunch),适合做数据的初始化;
            this.setData({
                foo:'hello js';
            })
            ...
        },
        onShow(){
>       页面进入焦点状态(前台展示);
            ...
        },
        onReady(){
>       页面渲染完成,进入onReady          
            wx.setNavigationBarTitle({
                title:'foo'
            })
            ...
        },
        onHide(){
>       页面进入后台状态; 
            ...
        },
        onUnload(){
>       当页面被销毁的时候触发(可以用于页面被销毁之前保存一些页面的状态);            
            ...
        }
    })

# 11.数据绑定:
    <text>{{message}}</text>
    <text>{{message + 1}}</text>
    <input value='{{message}}'/>
>   mustache小胡子语法    
    Page({
        data:{
>       在data中,只能暴露数据成员,不能暴露函数;
            message:'hello world'
        }
    })

# 12.WXML语法中:
    1> 属性必须要写属性值,且属性值必须加 "";
        <checkbox checked="true"></checkbox>
>   属性的值如果,只是在""内部,他永远是字符串;
>   mustache可以申明有类型的值;

# 13.视图层引用函数:
    <view>
        <text>{{foo.addPostfix(mesage)}}</text>
    </view>
    <wxs module='foo'>
        module.exports = {
            addPostfix:function(input){
                return input+'hello';
            }
        }
    </wxs>

# 14.
































































