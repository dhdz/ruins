<template>
  <div class="link">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'link',
  data () {
    return {
      msg: '链接'
    }
  },
    created(){
      this.userLoginState()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link{
    font-size: 100px;
  }
</style>
