<template>
  <div>
    <!-- 1.0获取state中存储的变量sum $store.state.sum -->
    当前值为：<el-tag type="danger">{{$store.state.sum}}</el-tag><el-button @click="headleAdd">+1</el-button>
    <!-- 4.0store.getters.属性名来获取计算属性值 -->
    <el-tag>{{$store.getters.evenOdd}}</el-tag>
  </div>
</template>
<script>
export default {
  methods: {
    headleAdd () {
      // 2.0触发触发mutations中的函数，让sum值加1 通过this.$store.commit(函数名)
      // this.$store.commit('addSum')

      // 3.0通过this.$store.dispatch(函数名)来触发
      // this.$store.dispatch('triggerAddSum')

      // 5.0也可以传参数
      this.$store.dispatch('triggerAddSumN', 10)
    }
  }
}
</script>

<style>

</style>
