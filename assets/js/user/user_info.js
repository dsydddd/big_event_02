$(function () {
    var form = layui.form
    form.verify({
        nickname:function () {
            if (value.length > 6) {
                return "昵称在1至6位之间!"
            }
            
        }
    })
    // 用户渲染
    var layer = layui.layer;
    initUserInfo()
    function initUserInfo() {
        $.ajax({
          type:'get',
          url:'/my/userinfo',
       
          success:(res)=>{
              if (res.status !== 0) return layer.msg(res.message);
              form.val("formUserInfo", res.data )
          }
        })
        
    }
    // 3点击渲染页面
    $("#btnReset").on("click",function (e) {
        e.preventDefault()

        initUserInfo()
    })
    // 4修改用户信息
    $(".layui-form").on('submit',function (e) {
        e.preventDefault()
        $.ajax({
          type:'post',
          url:'/my/userinfo',
          data:$(tihis).serialize(),
          success:(res)=>{
              if (res.status !== 0) return layer.msg(res.message);
              layer.msg("恭喜你 用户信息修改成功")
              window.parent.getUserInof()
          }
        })
        
    })
    
})