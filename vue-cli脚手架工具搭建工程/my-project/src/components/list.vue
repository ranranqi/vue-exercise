<template>
    <ul>
        <li>
            <router-link to='/111'> HELLO WORLD </router-link>
        </li>
        <li>
            <router-link to='/222'> HELLO EARTH </router-link>
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