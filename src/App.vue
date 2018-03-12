<template>
  <div id="app">
    <router-view/>
    <MainNav/>
  </div>
</template>

<script>
import MainNav from '@/components/main_nav/main_nav'
export default {
    components:{
      MainNav
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
