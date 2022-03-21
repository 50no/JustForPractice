<template>
  <div>
      <EsHeader></EsHeader>
      <h1>this is app.vue</h1>
  </div>
</template>

<script>
import EsHeader from './components/es-header/EsHeader.vue'

export default {
  name:'MyApp',
  components: {
    EsHeader
  }
}
</script>

<style lang='less' scoped>

</style>
