<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <list/>
    <axiosapp/>
  </div>
</template>

<script>
import list from './components/list'
import axiosapp from './components/axiosapp'

export default {
  name: 'App',
  components: {
    list,
    axiosapp
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
  margin-top: 60px;
}
</style>
