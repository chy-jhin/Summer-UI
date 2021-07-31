<template>
  DynamicTags组件
{{name}}
{{age}}
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
setup(){
  const data = reactive({name:'Alice',age:12})
  return {
    ...toRefs(data)
  }
}
}
</script>

<style>

</style>