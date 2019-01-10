<template>
    <ul>
        <li>
            <router-link :to="{name:'HelloWorld',params:{worldmsg:'你好世界'}}"> HELLO WORLD </router-link>
        </li>
        <li>
            <router-link :to="{name:'HelloEarth',params:{earthmsg:'你好地球'}}"> HELLO EARTH </router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'list',
}
</script>

<style scoped>
li{
    list-style: none;
}
</style>