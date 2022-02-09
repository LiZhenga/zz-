<template>
    <div>
        <div id="tabs">
            <div class="option">
                <div class="save" @click="save">
                    <img src="../assets/保存.png" >
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                <span v-show="show1">{{$route.query.title}}</span>
                <textarea name="title" v-show="show2" v-model="blog.title" id="title" ></textarea>
                <button @click="show">修改</button>
            </div>
            <div class="content">
                <p v-show="show3">
                    {{$route.query.content}}
                </p>
                <textarea name="content" id="content" v-show="show4" v-model="blog.content"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
    export default {
        name:'Recompose',
        mounted(){console.log(this);},
        data() {
            return {
                show1:true,
                show2:false,
                show3:true,
                show4:false,
                blog:{
                    index:this.$route.query.index,
                    title:this.$route.query.title,
                    content:this.$route.query.content
                }
            }
        },
        methods:{
            show(){
                this.show1 = false
                this.show2 = true
                this.show3 = false
                this.show4 = true
            },
            save(){
                this.show1 = true
                this.show2 = false
                this.show3 = true
                this.show4 = false
                router.back()
                this.$store.commit('changeBlog',this.blog)
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
    cursor:pointer;
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
    display: flex;
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
.title span{
    margin-right: 20px;
    margin-top: 20px;
}
#title{
    margin-top: -20px;
    margin-right: 20px;
    outline: none;
    border: none;
    width: 240px;
    height: 70px;
    color: rgba(76, 74, 95, 100);
    font-size: 48px;
    font-family: SourceHanSansSC-black;
}
.title button{
    margin-top: 5px;
    height: 50px;
    width: 50px;
    border: none;
    background-color: rgba(232, 235, 253, 100);
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
    text-align: left;
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