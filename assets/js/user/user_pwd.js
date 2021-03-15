$(function () {
    var form = layui.form;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        // 操作里面的登录密码校验 value是repwd的值
        // 需求2 密码的再次确认
        newPwd: function (value, ) {
            // console.log(value);
  
            const pwd = $(' input[name="oldPwd"]').val()
  
            if (value == pwd) {
                return "新旧密码相同"
            }
        },
        rePwd: function (value, ) {
            // console.log(value);
  
            const pwd = $(' input[name="newPwd"]').val()
  
            if (value !== pwd) {
                return "两次输入的新密码不一致"
            }
        }
    })


    $(".layui-form").on("submit",function (e) {
        e.preventDefault();
        $.ajax({
          type:'post',
          url:'/my/updatepwd',
          data:$(this).serialize(),
          success:(res)=>{
              if (res.status != 0) return layui.layer.msg(res.message);
              layui.layer.msg('恭喜你修改密码成功')

              $(".layui-form")[0].reset()
            }
            
        })
        
    })
    
})