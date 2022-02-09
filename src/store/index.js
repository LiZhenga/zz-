import Vue from 'vue'
import Vuex from 'vuex'
import blog from './blog'
import users from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    blog,
    users
  }
})
// console.log(Store.state.users.users);
// console.log(Store.state.blog.blog);

