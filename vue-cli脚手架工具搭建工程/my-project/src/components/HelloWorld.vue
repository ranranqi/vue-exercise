<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h2>跳转页面1111111111111</h2>
    <slot></slot>
    <h3>我是传递过来的参数：{{$route.params.worldmsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{

  background: pink;
}
</style>
