<template>
  <div class="menu">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '菜单'
    }
  },
    created(){
      this.userLoginState()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    font-size: 100px;
  }
</style>
