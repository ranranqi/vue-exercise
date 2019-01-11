<template>
  <div class="hello">
    我是别的组件拿到的全局状态：{{getOut}}
  </div>
</template>

<script>
export default {
    name: 'out',
    data:function(){
        return {
            
        }
    },
    computed:{
        getOut:function(){
            return this.$store.state.num
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>