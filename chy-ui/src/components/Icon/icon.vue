<template>
<i :class="['iconfont', `icon-${className}`]"></i>
</template>

<script>
export default {
    props:{
        className:{
            type:String
        }
    }
}
</script>

<style>

</style>