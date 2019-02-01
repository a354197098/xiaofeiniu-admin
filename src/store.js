import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //公共数据读取方法：this.$store.state.adminName
  state: {  //当前数据状态 类似 data
    adminName:'',   //当前登录管理员名字
    globalSettings:{  //项目全局设置信息
      apiUrl:'http://127.0.0.1:8090'  //初始默认值
    }
  },
  //公共数据修改 this.$store.commit('setAdminName','boos')
  mutations: { //进化(既修改state) 类似 methods
    setAdminName(state,value){
      state.adminName = value
    },
    setGlobalSettings(state,value){
      state.globalSettings = value
    }
  },
  actions: {

  }
})
