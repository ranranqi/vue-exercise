<template>
  <div class="hello">
    <hr>
    <h3>我是axiosAPP,用来发送请求，拦截响应</h3>
    <button @click="getData">GET方式发送请求</button>
    <ol>
        <li v-for="item in items">{{item.title}}</li>
    </ol>
    
  </div>
</template>

<script>
import axios from 'axios'
Vue.prototype.$http = axios
import Vue from 'vue'

export default {
    name: 'axiosapp',
    data () {
        return {
            items: []
        }
    },
    methods: {
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=10')
            .then((response)=>{
                this.items = response.data.data
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: rgb(110, 219, 21);
}
</style>
