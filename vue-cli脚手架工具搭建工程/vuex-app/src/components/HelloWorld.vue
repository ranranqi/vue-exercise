<template>
  <div class="hello">
    <parent />
  </div>
</template>

<script>
import parent from './parent'
export default {
  name: 'HelloWorld',
  components:{
    parent
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
