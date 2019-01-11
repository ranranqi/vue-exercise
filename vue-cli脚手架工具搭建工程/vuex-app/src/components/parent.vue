<template>
  <div class="hello">
    <span>我是父组件</span> --- {{fromson}}
    <hr>
    <son :msg="sendSon" @handle="sendSonMsg"></son>
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'parent',
  components:{
      son
  },
  data () {
    return {
      sendSon: '我是父组件里的内容',
      fromson: ''
    }
  },
  methods:{
      sendSonMsg:function(value){
          this.fromson = value
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>