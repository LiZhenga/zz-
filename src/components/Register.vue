<template>
<div class="a">
    <div class="c">
        <span><strong>注册新用户</strong></span>
    </div>
    <div class="regiter">
        <div class="main">
            <div class="content">
                <label>用户名:</label>
                <input type="text" placeholder="用户名" id="user"  v-model="user.useAccount"/>
            </div>
            <div class="content">
                <label>密码:</label>
                <input type="password" placeholder="密码" id="password"  v-model="user.password"/>
            </div>
            <button id="d" @click="register">注册</button>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router';
export default {
    name: "Register",
    data() {
        return {
            user:{
                useAccount:'',
                password:''
            }
        }
    },
    methods:{
        register(){
            if (this.user.useAccount===''||this.user.password ==='') {
                alert("请输入")
            } else {
                this.$store.commit('Register',this.user)
                router.push({path:'login'})
            }
        }
    }
};
</script>

<style>
.a{
    position: relative;
    left: 250px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(105, 104, 104, 0.9);
    margin-top: 20px;
}
.c{
    width: 1000px;
    height: 50px;
    background-color: silver;
    display: flex;
    align-items: center;
    border: 1px solid rgba(105, 104, 104, 0.9);
}
.c span{
    margin-left: 20px;
    font-size: 20px;
}
.regiter {
    margin-top: 20px;
    width: 300px;
    height: 300px;
}
.main {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.content {
    margin-top: 50px;
}
label {
    text-align: right;
}
input {
    width: 200px;
    height: 20px;
    outline: none;
}
#d {
    margin-top: 60px;
    margin-bottom: 40px;
    border: 2px solid rgba(187, 187, 187, 100);
    width: 100px;
    height: 40px;
    line-height: 20px;
    border-radius: 10px;
}
</style>