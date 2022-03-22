<template>
  <div>
      <EsHeader></EsHeader>
      <h1 class="app-container">this is app.vue</h1>
      <EsFooter></EsFooter>
  </div>
</template>

<script>
import EsHeader from './components/es-header/EsHeader.vue'
import EsFooter from './components/es-footer/EsFooter.vue'

export default {
  name:'MyApp',
  components: {
    EsHeader,
    EsFooter
  },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      // 通过组件实例this 访问到全局挂载的 $http 属性
      const {data: res} = await this.$http.get('/api/cart')
      if (res.status !== 200) return alert('请求商品列表数据失败!')
      this.goodsList = res.list

    }
  }
}
</script>

<style lang='less' scoped>
  .app-container {
    padding-top: 45px;
  }
</style>
