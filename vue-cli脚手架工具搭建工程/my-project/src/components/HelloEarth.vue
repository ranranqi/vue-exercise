<template>
  <div class="hello">
    <h1>Hello Earth</h1>
    <h2>跳转页面22222222222222</h2>
    <h3>我是传递过来的参数：{{$route.params.earthmsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: skyblue;
}
</style>
