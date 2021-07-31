<template>
<div class="body">
  <img class="img animated rubberBand" :src="indexImg" alt="">
</div>

</template>

<script>
import indexImg from '@/assets/index1.jpg'
export default {
  setup(){
    return{
      indexImg
    }
  }
}
</script>

<style scoped>
.body{
  width: 100%;
  background-color: rgb(205,233,244);
  max-height: calc(100vh - 50px);
  overflow: hidden;
}
.img{
width: 100%;
object-fit: cover;
}

</style>