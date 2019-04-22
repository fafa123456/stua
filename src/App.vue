<template>
  <div id="app">
    <topnav></topnav>
    <sidenavbar></sidenavbar>
    <router-view/>
  </div>
</template>

<script>
import Sidenavbar from './components/Public/side_navbar'
import Topnav from './components/Public/topnav.vue'
export default {
  name: 'App',
  components: {
    'Sidenavbar': Sidenavbar,
    'Topnav': Topnav
  }
}
</script>

<style>
#app {
  width: 19.2rem;
  height: 10.8rem;
  /* margin: 0 auto; */
  background: #f2f2f2;
  padding-top: .6rem;
}
</style>
