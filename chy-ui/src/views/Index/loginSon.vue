<template>
  <div>{{props.data}}</div>
  <div>aaaaa</div>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import {defineComponent,inject,ref} from "vue"
export default defineComponent({
    props:{
        data:String,
    },
    setup(props,ctx){
        console.log(props.data )
        console.log(ctx)
        const msg = inject('proMsg')
        return{
            props,
            msg
        }
    }
})
</script>

<style>

</style>