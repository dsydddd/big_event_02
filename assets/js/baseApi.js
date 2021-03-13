// 开发环境APi
var baseURL = "http://api-breakingnews-web.itheima.net"
$.ajaxprefilter(function (option) {
    option.url = baseURL + option.url;
    
})