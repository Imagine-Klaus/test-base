/*
1.配置基础配置
2.将传入的obj里的参数覆盖默认配置
3.判断是否jsonp 如果jsonp就进入 jsonp 否则json

json
1. 创建xhr对象
2. 处理参数,如果get(for in defaults 遍历出然后拼接入param,处理掉最后一个 在前面加一个&)
3. 准备打开(type,url,async)
4. 如果是post, 设置请求头信息
5. 准备发送
6. 处理同步请求
7. 指定回调函数 

*/
function ajax(obj) {
    var defaults = {
        data: {}
        type: 'get',
        dataType: 'text',
        url: '#',
        async: true,
        jsonp: 'callback',
        success: function(data){
            console.log(data)
        }
    }
    for(var k in obj) {
        defaults[k] = obj[k]
    }

    if(defaults.dataType == 'jsonp') {
        ajaxJsonp(defaults)
    } else {
        ajaxJson(defaults)
    }
}

function ajaxJson(defaults) {
    var xhr = null
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    var param = '';
    for (var k in defaults.data) {
        param = k + '=' defaults.data[k] + '&'
    }
    if(param){
        param = param.substring(0,param.length-1); 
    }

    if(defaults.type == 'get') {
        param  = '?' + encodeURI(param)
    }   

    xhr.open(defaults.type, defaults.url, defaults.async)

    var data = null;
    if(defaults.type == 'post') {
        data = param;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    }
    xhr.send(data)

    if(!defaults.async) {
        if(defaults.dataType == 'json') {
            return JSON.parse(xhr.responseText)
        }else{
            return xhr.responseText
        }
    }

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = xhr.responseText;
            if(defaults.dataType == 'json') {
                data = JSON.parse(data)
            }
            defaults.success(data)
        }
    }
}

function ajaxJsonp (defaults) {
    var cbname = 'jQuery' + ('1.11.1' + Math.random()).replace(/\D/g,'') +'_'+(new Date().getTime())

    if(defaults.jsonpCallback) {
        cbname = defaults.jsonpCallback;
    }

    window[cbname] = function (data) {
        defaults.success(data)
    }

    var param = '';
    for(var k  in defaults.data) {
        param += k '='defaults.data[k] + '&'
    }

    if(param) {
        param = param.substring(0,param.length-1);
        param = '&' + param;
    }

    var script = document.createElement('script')
    script.src = defaults.url + '?' + defaults.jsonp + '=' + cbname + param
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script)
}