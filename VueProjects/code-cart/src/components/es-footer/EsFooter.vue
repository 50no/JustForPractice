<template>
    <div class="footer-container">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
            <label class="custom-control-label" for="customCheck">全选</label>
        </div>
    </div>
</template>

<script>
export default {
  name:'EsFooter',
  data(){
   return {

   }
  }
}
</script>

<style lang='less' scoped>
    .footer-container {
        height: 50px;
        width: 100%;
        background-color: white;
        border-top: 1px solid #efefef;

        position: fixed;
        bottom: 0;
        left:0;

        // 内部元素的对齐方式
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

    }
</style>
