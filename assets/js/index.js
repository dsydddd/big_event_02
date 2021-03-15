$(function () {
  getUserInof()
  // 点击退出按钮 弹出层提示
  var layer=layui.layer
  $("#btnLogout").on("click", function (index) {
    layer.alert('您确定退出吗', {
      skin: 'layui-layer-molv' //样式类名
      ,closeBtn: 0
    }, function () {
      localStorage.removeItem("token");
    location.href = "/login.html"
      
      });
    });
  /*   localStorage.removeItem("token");
    location.href = "/login.html" */
  })



function getUserInof() {
    $.ajax({
      type:'get',
      url:'/my/userinfo',
   /*    headers: {
        Authorization: localStorage.getItem('token') || ''
      }, */
      success:(res)=>{
        if (res.status != 0) {
          return layui.layer.msg(res.message, {icon: 5});
      }
      // 头像和文字渲染
      renderAvatar(res.data);
    }
      
    })
}
function renderAvatar(user) {
  // console.log(user);
  // 1.渲染用户名，如果有昵称以昵称为准
  let name = user.nickname || user.username;
  $("#welcome").html("欢迎&nbsp;&nbsp;" + name);
  // 2.渲染头像; 判断图片头像是否存在
  if (user.user_pic == null) {
      // 隐藏图片头像, 渲染文字头像
      $(".layui-nav-img").hide();
      $(".text-avatar").show().html(name[0].toUpperCase());
  } else {
      // 渲染图片头像，隐藏文字头像
      $(".layui-nav-img").show().attr("src", user.user_pic);
      $(".text-avatar").hide();
  }
}
