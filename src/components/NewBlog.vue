<template>
    <div>
        <div id="tabs">
            <div class="back" @click="back">
                <img src="../assets/3.1 返回1.png">
            </div>
            <div class="option">
                <div class="save" @click="save">
                    <img src="../assets/保存.png" >
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                    标题：<textarea name="title"  v-model="blog.title" id="title" ></textarea>
                </div>
            <div class="content">
                <textarea name="content" id="content" v-model="blog.content"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
    export default {
        name:'NewBlog',data() {
            return {
                blog:{
                    title:'',
                    content:''
                }
            }
        },
        methods:{
            back(){
                router.back()
            },
            save(){
                this.$store.commit('createBlog',this.blog)
                router.push({path:'/'})
            }
        },
    }
</script>

<style>
#tabs{
    left: 0px;
    top: 208px;
    width: 1440px;
    height: 89px;
    line-height: 20px;
    background-color: rgba(110, 118, 142, 100);
    border: 1px solid rgba(187, 187, 187, 100);
}
.back{
    margin-left: 21px;
    margin-top: 16px;
    cursor:pointer;
}
.back img{
    width: 56px;
    height: 56px;
}
.option{
    display: flex;
    justify-content: space-between;
    width: 283px;
    position: absolute;
    left: 1080px;
    top: 320px;
}
.save img{
    left: 1080px;
    top: 230px;
    width: 50px;
    height: 50px;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0px;
    top: 297px;
    width: 1440px;
    height: 727px;
    line-height: 20px;
    background-color: rgba(232, 235, 253, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 100);
}
.title{
    align-self: flex-start;
    margin-left: 149px;
    margin-top: 29px;
    width: 508px;
    height: 70px;
    color: rgba(76, 74, 95, 100);
    font-size: 48px;
    text-align: center;
    font-family: SourceHanSansSC-black;
    border-style: none none solid none;
}
#title{
    margin-top: -10px;
    margin-right: 20px;
    outline: none;
    border: none;
    width: 240px;
    height: 70px;
    color: rgba(76, 74, 95, 100);
    font-size: 48px;
    font-family: SourceHanSansSC-black;
}
.content{
    width: 1440px;
    height: 628px;
    line-height: 20px;
    background-color: rgba(198, 208, 236, 100);
    text-align: center;
}
.content p{
    margin-top: 16px;
    margin-left: 81px;
    width: 1150px;
    height: 463px;
    color: rgba(16, 16, 16, 100);
    font-size: 25px;
    text-align: right;
    line-height: 120%;
    font-family: SourceHanSansSC-regular;
}
#content{
    margin-top: 19px;
    margin-left: -25px;
    outline: none;
    border: none;
    width: 1150px;
    height: 463px;
    line-height: 20px;
    color: rgba(16, 16, 16, 100);
    font-size: 25px;
    font-family: SourceHanSansSC-regular;
    line-height: 120%;
    }
</style>