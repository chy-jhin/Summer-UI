<template>
  <div :class="['avatar',
    `${size}`,
   radio ? 'radio' :'',
   ]">
    <img class="img" :src="src" alt="">
    <div v-if="badge != null " class="badge">{{badge}}</div>
  </div>
</template>

<script>
import img1 from '@/assets/0.jpg'
export default {
  props:{
    src:{
      type:String,
      default:img1
    },
    badge:{
      type:Number,
      default:null
    },
    size:{
      type:String,
      default:"medium"
    },
    radio:{
      type:Boolean,
      default:true
    }
  },
  setup(){
    return{
    
    }
  }

}
</script>

<style lang="scss" scoped>
.avatar{
  position: relative;
  width: 3rem;
  height: 3rem;
  // overflow: hidden;
  .img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .badge{
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    background-color: #d03050;
    color: #fff;
    width: 1rem;
    height: 1rem;
    padding: 0.1rem 0.1rem;
    border-radius: 50%;
    font-size: 0.6rem;
  }
}
.radio{
  border-radius: 50%;
  .img{
    border-radius: 50%;
  }
}
.mini{
  width: 2rem;
  height: 2rem;
}
.medium{
  width: 3rem;
  height: 3rem;
}
.large{
  width: 4rem;
  height: 4rem;
}

</style>