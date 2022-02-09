<template>
    <div>
        <!-- uuuuu -->
        <div id="tabs">
            <div class="back" @click="back">
                <img src="../assets/3.1 返回1.png" alt="">
            </div>
            <div class="option">
                <div class="recompose">
                    <router-link :to="{
                        path:'/recompose',
                        query:{
                            index:$route.query.index,
                            title:$route.query.title,
                            content:$route.query.content
                            }
                    }">
                    <img src="../assets/修改.png">
                    </router-link>
                </div>
                <div class="delete" @click="remove">
                    <img src="../assets/删除.png">
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title"><span>{{$store.state.blog.blog[$route.query.index].title}}</span></div>
            <div class="content">
                <p>
                    {{$store.state.blog.blog[$route.query.index].content}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
    export default {
        name:'Details',
        mounted(){console.log(this);},
        mounted(){console.log(this.$store.state.blog.blog[this.$route.query.index]);},
        methods:{
            back(){
                router.back()
            },
            remove(){
                this.$store.commit('removeBlog',this.$route.query.index)
                router.back()
            }
        }
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
.recompose img{
    width: 52px;
    height: 52px;
}
.delete img{
    width: 54px;
    height: 54px;
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
</style>