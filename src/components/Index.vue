<template>
    <div>
      <div class="nav-bottom">
        <div class="tabs">
          <a href="#"><span>个人中心</span></a>
          <a href="#"><span>社区</span></a>
          <a href="#"><span>好友动态</span></a>
          <a href="#"><span>私信</span></a>
        </div>
    </div>
<!-- 内容 -->
  <div class="container">
    <!-- 左侧 -->
    <div class="container-left">
      <div id="all">
          <img src="../assets/文件.png">
          <span>所有博文</span>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="container-right">
      <div v-for="(m,index) in $store.state.blog.blog" :key="index" class="blog">
        <router-link :to="{
          path:'/details',
          query:{
            index:index,
            title:$store.state.blog.blog[index].title,
            content:$store.state.blog.blog[index].content
          }
          }">
          <span>{{m.title}}</span>
          <p class="desc">{{m.content}}</p>
        </router-link>
      </div>
      <div class="new">
        <router-link to="/newBlog"><img src="../assets/新建.png"></router-link>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
  export default {
    name:'Index',
  }
</script>

<style>
.nav-bottom{
  width: 1440px;
  height: 82px;
  line-height: 20px;
  background-color: rgba(226, 229, 249, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
}
.tabs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 259px;
  margin-top: 15px;
  left: 259px;
  top: 228px;
  width: 744px;
  height: 48px;
  color: rgba(255, 255, 255, 100);
  font-size: 33px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.tabs a{
  text-decoration: none;
  color: #FFFFFF;
}
.container{
  display: flex;
}
.container-left{
  margin-left: 18px;
  margin-top: 15px;
}
#all{
  display: flex;
  justify-content: center;
  align-items: center;
  left: 18px;
  top: 310px;
  width: 190px;
  height: 61px;
  line-height: 20px;
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(222, 223, 227, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 100);
}
#all img{
  left: 35px;
  top: 321px;
  width: 38px;
  height: 38px;
}
#all span{
  margin-top: 10px;
  width: 112px;
  height: 41px;
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.new a img{
  position:absolute;
  left: 1268px;
  top: 874px;
  width: 120px;
  height: 120px;
}
.container-right{
  margin-left: 19px;
  width: 1211px;
  height: 729px;
  line-height: 20px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.blog{
  margin-left: 44px;
  margin-top: 33px;
  height: 68px;
  width: 1125px;
  border-style: none none solid none;
}
.blog a{
  text-decoration: none;
  width: 112px;
  height: 29px;
  color: rgba(16, 16, 16, 100);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.blog a span{
  margin-left: -950px;
  margin-bottom: 10px;
}
.desc{
  font-size: 14px;
  font-weight: 400;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>