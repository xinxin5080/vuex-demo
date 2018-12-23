// 0.1引进vuex
import Vuex from 'vuex'
import Vue from 'vue'
// 0.2使用
Vue.use(Vuex)

// 1.0state用来暂存数据
const state = {
  sum: 0,
  sum2: 10
}
// 2.0mutations中的函数用于修改state的数据
const mutations = {
  addSum: (state) => {
    state.sum += 1
  },
  minusSum: (state) => {
    state.sum -= 1
  },
  addSumN: (state, n) => {
    state.sum += n
  }
}
// actions中的函数用于触发mutations中的函数
// 它的函数里面也可以发送异步请求
const actions = {
  triggerAddSum: obj => {
    // 3.0通过obj中commit属性触发addSum
    obj.commit('addSum')
  },
  triggerAddSum2: obj => {
    obj.commit('minusSum')
  },
  // 5.0也可以传参数
  triggerAddSumN: (obj, n) => {
    obj.commit('addSumN', n)
  }
}

// getters中存放类似计算属性的函数
const getters = {
// 4.0定义判断sum奇偶的计算属性
  evenOdd: (state) => state.sum % 2 === 0 ? '奇' : '偶'
}

// 0.3创建Vuex中store容器对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
