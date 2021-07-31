<template>
  <div class="main-bg">
    <img class="img animated bounceInDown" :src="indeximg" alt="" />
    <div class="content">
      <div class="title">
        <h1 class="animated bounceIn">Summer UI</h1>
      </div>
      <div class="info">
        <div class="animated flipInX">一个Vue3的组件库</div>
        <div class="animated flipInX">使用 TypeScript，不算太慢</div>
        <div class="animated flipInX">随便写写</div>
      </div>
      <div class="btn animated fadeInUp">
        <Button @click="topath('explain')" type="default" >待会使用</Button>
        <Button @click="topath('components')" type="primary" >立刻使用</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import {provide, ref} from 'vue'
import indeximg from "@/assets/index.jpg";
import Button from "@/components/Button/Button.vue";
export default {
  setup() {
    const router = useRouter();
    const topath = (num:string) => {
      window.sessionStorage.setItem("indexflag",num);
      router.push({name:num})
    };
    
    return {
      indeximg,
      topath
    };
  },
  components: {
    Button,
    
  },
};
</script>
<style lang="scss" scoped>
.main-bg {
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // z-index: -1;

  .img {
    height: 40%;
  }
  .content {
    margin-top: 3rem;
    .title {
      font-size: 2rem;
      font-weight: 600;
    }
    .info{
      font-size: 1rem;
      margin: 2rem 0 1rem;
      > *{
        margin-top: 1rem;
        text-align: center;
        animation-delay: 0.8s;
      }
    }
    .btn{
      text-align: center;
      animation-delay: 0.5s;
      > *{
        margin-right: 1rem;
      }
    }
  }
}

.input {
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid aquamarine;
  &:focus {
    border-color: red;
  }
}
</style>