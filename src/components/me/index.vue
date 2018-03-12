<template>
  <div class="me">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '个人信息'
    }
  },
    created(){
      this.userLoginState()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .me{
    font-size: 100px;
  }
</style>
