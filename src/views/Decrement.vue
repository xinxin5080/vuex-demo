<template>
  <div>
    当前值为：<el-tag type="danger">{{sum}}</el-tag><el-button @click="triggerAddSum2">-1</el-button>
    当前值为：<el-tag type="danger">{{sum}}</el-tag><el-button @click="triggerAddSumN(5)">-n</el-button>
    <p>{{sum2}}</p>
    <p>{{evenOdd}}</p>
  </div>
</template>
<script>
// 1.0引进mapState函数,他可以用来获取state中多个属性的值
// 4.0引进mapGetters函数,他可以用来获取getter中多个计算属性的值
// 2.0引进mapMutations函数,他可以用来获取Mutations中多个函数
// 3.0引进mapActions函数,用来获取actions中多个函数
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  // 计算属性
  computed: {
    // 1.0展示变量的数据
    ...mapState(['sum', 'sum2']),
    // 4.0展示计算后的数据
    ...mapGetters(['evenOdd'])
  },
  methods: {
    // 2.0 minusSum为Mutations的函数
    ...mapMutations(['minusSum']),
    // 3.0通过triggerAddSum2函数作为点击事件触发Mutations的函数
    // 5.0通过triggerAddSumN函数作为点击事件触发Mutations的函数,带参数
    ...mapActions(['triggerAddSum2', 'triggerAddSumN'])
  }

}
</script>

<style>

</style>
