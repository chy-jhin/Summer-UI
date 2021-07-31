<template>
  <div class="header d-flex jc-sb" :class="indexflag == 'main' ? '' : 'border'">
    <div class="left d-flex" @click="toIndex">
      <img class="img" src="../../assets/logo.png" alt="" />
      <span class="Name">Summer UI</span>
    </div>
    <div class="d-flex flex-1 jc-center">
      <Input :size="'medium'" :icon="'search'" :placeholdren="'搜索'"></Input>
    </div>
    <div class="right d-flex">
      <!-- <router-link tag="div" :to="{name:'main'}" class="item index active">主页</router-link>
      <router-link tag="div" :to="{name:'main'}" class="item index2">介绍</router-link>
      <router-link tag="div" :to="{name:'components'}" class="item components">组件</router-link> -->
      <div
        class="item"
        :class="{ active: indexflag === 'main' }"
        @click="toPath('main')"
      >
        主页
      </div>
      <div
        class="item"
        :class="{ active: indexflag === 'explain' }"
        @click="toPath('explain')"
      >
        起步
      </div>
      <div
        class="item"
        :class="{ active: indexflag === 'components' }"
        @click="toPath('components')"
      >
        组件
      </div>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script >
import { reactive, ref, defineComponent,watch, computed, onUpdated, toRefs } from "vue";
import { useRouter } from "vue-router";
import Input from "../../components/Input/Input.vue";
export default defineComponent({
  setup() {
    // 路由跳转
    const router = useRouter();

    let indexflag = ref(window.sessionStorage.getItem("indexflag") || 'main');
    onUpdated(() => {
      indexflag.value = window.sessionStorage.getItem("indexflag")
    })
    const toPath = (path) => {
      indexflag.value = path;
      window.sessionStorage.setItem("indexflag",path);      
      router.push({ name: path });
    };
    const logo = "../../assets/logo.png";
    const toIndex = () => {
      router.push({ name: "Home" });
    };
    return {
      toPath,
      logo,
      indexflag,
      toIndex,
    };
  },
  components: {
    Input,
  },
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.border {
  border-color: #eee;
}
.header {
  position: sticky;
  width: 100%;
  height: 50px;
  padding: 1rem 2rem;
  border-bottom: 1px solid transparent;
  // overflow: hidden;
  // z-index: 10;
  .left {
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    &:hover .img {
      transform: scale(0.9);
    }
    .img {
      transform: scale(0.7);
      margin-right: 0.5rem;
      transition: all 0.4s ease-in-out;
      width: 3.5rem;
    }
    .Name {
      font-size: 1rem;
    }
  }
  // .search{
  //   width: 15rem;
  //   border: 1px solid #cfd4db;
  //   border-radius: 20px;
  //   padding: 0.5rem;
  //   text-align: left;
  //   font-size: 0.7rem;
  //   &:focus{
  //     border: 1px solid #008be1;
  //   }
  //   .iconfont{
  //     font-size:0.8rem;
  //     margin-right: 0.5rem;
  //   }
  //   input{
  //     border: none;
  //   }
  // }
  .right {
    .item {
      position: relative;
      transition: all 0.3s;
      cursor: pointer;
      width: 4rem;
      text-align: center;
      padding-bottom: 5px;
      color: #333;
      &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #008be1;
        transition: all 0.3s;
      }
      &:hover::before {
        left: 0;
        width: 4rem;
      }
    }
    .active {
      color: #008be1;
    }
  }
}
</style>
