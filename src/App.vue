<template>
  <div id="app">
    <div id="root">
      <div id="nav">
      <div class="nav-top">
        <div class="user">
          <img src="./assets/logo.jpg" id="head-image">
          <div class="header">
            <span>博客</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
    <div id="footer">
      <span v-html="'李政&copy;2022'"></span>
    </div>
    </div>
  </div>
</template>


<style>
*{
  padding: 0;
  margin: 0;
}
.nav-top{
  left: 0px;
  top: 0px;
  width: 1440px;
  height: 213px;
  line-height: 20px;
  background-color: rgba(173, 181, 206, 100);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 100);
}
.user{
  display: flex;
}
#head-image{
  margin-top: 46px;
  margin-left: 53px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
}
.header{
  display: flex;
  flex-direction: column;
}
.header span{
  margin-left: 20px;
  margin-top: 100px;
  width: 585px;
  height: 58px;
  color: rgba(16, 16, 16, 100);
  font-size: 36px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
#footer{
  padding-left: 720px;

}
</style>
