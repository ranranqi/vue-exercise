<template>
  <div class="hello">
    <parent />
    <hr>
    <out/>
  </div>
</template>

<script>
import parent from './parent'
import out from './out'
export default {
  name: 'HelloWorld',
  components:{
    parent,
    out
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
