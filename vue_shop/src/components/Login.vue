<template> 
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
               <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules"  label-width="80px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>            
        </div> 
    </div>     
</template>
<script>
export default {
    data(){
        return{
              //登录表单数据绑定对象
              loginForm:{
                username:"123",
                password:"123"
            },
            // 设置表单验证
            loginFormRules:{
                username:[{required:true,message:"请输入用户名",trigger:"blur"},
                {min:3,max:10,message:"长度在3-10个字符",trigger:"blur"}],
                password:[{required:true,message:"请输入密码",trigger:"blur"},
                {min:6,max:15,message:"长度在6-15个字符",trigger:"blur"}]
            },
            
        };
        
    },
    methods:{
        // 点击重置按钮，重置表单
          resetLoginForm(){
              this.$refs.loginFormRef.resetFields();
          },
          login(){
              this.$refs.loginFormRef.validate(async valid=>{
                //   console.log(valid);
                if(!valid)return;
                // 对result进行解构：const result = await this.$http.post("login",this.loginForm);
                const {data:res} = await this.$http.post("login",this.loginForm);
                if(res.meta.status!==200) return this.$message.error("登录失败！");
                this.$message.success("登录成功！！");
                // 1.将登录之后的token保存到客户端的sessionStorage中
                // 1.1项目中除了登录之外的其他API接口，必须在登录之后才能访问
                // 1.2token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
                window.sessionStorage.setItem("token",res.data.token);
                this.$router.push("/home");
              });
          }
    }
    
};
</script>
<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius:3px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    .avatar_box{
        height:130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        // 让V和外边圈有间隔，有个圆环一样的东西，padding
        padding: 10px;
        position:absolute;
        left:50%;
        transform:translate(-50%,-50%);
        // 阴影
        box-shadow:0 0 10px #ddd;
        background-color: #fff;
        img{
            width:100%;
            height:100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }    
}
.login_form{
        position:absolute;
        // 让输入框填满form表单，width设为100%
        width:100%;
        bottom:0;
        padding:0 60px 0 0;
        //收回溢出边界
        box-sizing:border-box;
    }
.btns{
    // 设置成弹性盒模型
    display: flex;
    // 居右对齐
    justify-content: flex-end;
}
</style>