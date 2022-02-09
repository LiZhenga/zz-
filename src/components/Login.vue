<template>
<div class="a">
    <div class="b">
        <span><strong>用户登录</strong></span>
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
            <button @click="login">登录</button>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router'
    export default {
        name:'Login',
        data() {
        return {
            user:{
                useAccount:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            if (this.user.useAccount===''||this.user.password==='') {
                alert("请输入")
            } else {
                var a = false
                for (let index = 0; index < this.$store.state.users.users.length; index++) {
                    if (this.user.useAccount===this.$store.state.users.users[index].useAccount &&this.user.password===this.$store.state.users.users[index].password) {
                        a = true
                    }
                }
                if (a) {
                    this.$store.commit('Login')
                    router.push({path:'/'})
                }
                else{
                    alert("请输入正确的用户名或密码")
                }
            }
        }
    }
    }
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
.b{
    width: 1000px;
    height: 50px;
    background-color: silver;
    display: flex;
    align-items: center;
    border: 1px solid rgba(105, 104, 104, 0.9);
}
.b span{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 100px;
    height: 50px;
    font-size: 20px;
    color: rgb(252, 0, 0);
    background-color: rgb(252, 252, 252);
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
button {
    margin-top: 60px;
    margin-bottom: 40px;
    border: 2px solid rgba(187, 187, 187, 100);
    width: 100px;
    height: 40px;
    line-height: 20px;
    border-radius: 10px;
    background-color: greenyellow;
}
</style>