<template>
    <div class="container">
        {{appple}}
        <HelloWorld>
            <div class="hi">
                nihao
            </div>
        </HelloWorld>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
    name: 'slot',
    components: {
        HelloWorld
    },
    data() {
        return {
            appple: '苹果'
        }
    }
}
</script>

<style scoped>
.container {
    height: 300px;
    background-color: #eee;
}
.hi {
    font-size: 40px;
    color: crimson;
}
</style>

