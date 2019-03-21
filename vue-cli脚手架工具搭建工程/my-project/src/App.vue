<template>
  <div id="app">
    <axiosapp/>
    <router-view>hahahaha</router-view>
    <!-- <img src="./assets/logo.png"> -->
    <list/>
    <dashboard/>
  </div>
</template>

<script>
import list from './components/list'
import axiosapp from './components/axiosapp'
import dashboard from './components/dashboard'

export default {
  name: 'App',
  components: {
    list,
    axiosapp,
    dashboard
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
