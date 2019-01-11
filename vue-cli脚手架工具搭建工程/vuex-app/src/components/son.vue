<template>
  <div class="hello">
    <span>我是子组件啊</span> --- {{msg}} <br>
    我是子组件中拿到的的全局状态： {{getNum}}
    <button @click="sendToParent">点我给父组件发送数据</button>
  </div>
</template>

<script>
export default {
    name: 'son',
    data:function(){
        return {
            songmsg:'我是子组件的内容啊啊啊'
        }
    },
    props:{
        msg: {
            type: String,
            default: ''
        }
    },
    methods:{
        sendToParent:function(){
            this.$emit('handle',this.songmsg)
        }
    },
    computed:{
        getNum:function(){
            return this.$store.state.num
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>