// 开发环境APi
var baseURL = "http://api-breakingnews-web.itheima.net"
$.ajaxPrefilter(function (option) {
    option.url = baseURL + option.url;
    // 将后面 需要headers的添加判断后封装
    // 身份认证
    if (option.url.indexOf("/my/") != -1) {
        option.headers= {
            Authorization: localStorage.getItem('token') || ''
          }
    }
    // 身份拦截 拦截所有响应
    option.complete = function (res) {
        console.log(res);
        console.log(res.responseJSON);
        var obj = res.responseJSON;
        if (obj.status == 1 && obj.message == "身份认证失败!") {
            localStorage.removeItem("token");
            location.href ="/login.html"
        }
        
        
        
    }
})
