<template>
  <div class="hello">
    <span>我是父组件</span> --- {{fromson}}<br>
    我是父组件中拿到的的全局状态： {{getCount}}
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
  },
    computed:{
        getCount:function(){
            return this.$store.state.num
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>