<template>
  <div class="main">
    <div class="menu list">
      <div class="item-group" v-for="(item, index) in DataList" :key="item.id">
        <div class="title">
          {{ item.title }}
        </div>
        <div
          v-for="items in item.children"
          :class="[items.meta.title == active ? 'active' : '', 'item']"
          @click="topath(items.meta.title)"
        >
          <span class="cn">{{ items.meta.name }}</span>
          <span class="eng"> {{ items.meta.title }} </span>
        </div>
      </div>
    </div>
    <div class="body flex-1">
      <div class="header">
        <span class="title">{{ title }}</span>
        <span class="name">{{ name }}</span>
      </div>
      <div class="content">
        <!-- <transition name="dye-bottom"> -->
        <RouterView />
        <!-- </transition> -->
        <!-- <router-view v-slot="{ Component }">
  <transition name="fader">
    <component :is="Component" />
  </transition>
</router-view> -->
      </div>
      <div class="footer">
        <div class="info">© 2019 - 2021 陈小夫子</div>
        <a
          href="https://juejin.cn/user/3263006244606141/posts"
          target="_blank"
          class="bq"
          >Ask the wind in spring when you are in trouble</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch, computed } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import routerList from "../../router/index.router";
import store from "../../store";
export default defineComponent({
  setup(props, ctx) {
    const router = useRouter();
    const route = useRoute();
    const simple = [];
    const complex = [];
    routerList.forEach((res) => {
      // 基础组件
      if (res.meta.type == "simple") {
        simple.push(res);
      }
      // 复杂组件
      else {
        complex.push(res);
      }
    });
    // const simple =  routerList.filter( (item,index) => {
    //     return item.meta.type == 1;
    // })

    const DataList = [
      {
        id: 1,
        title: "基础组件",
        children: [...simple],
      },
      {
        id: 2,
        title: "复杂组件",
        children: [...complex],
      },
    ];
    let active = computed(() => store.state.activeName);
    // const pathInfo = reactive(router.currentRoute._rawValue.meta);
    const title = ref(route.meta.title);
    const name = ref(route.meta.name);
    // console.log(route.meta.title);
    onBeforeRouteUpdate((to, from) => {
      title.value = to.meta.title;
      name.value = to.meta.name;
      // return true;
    });

    // console.log(router.currentRoute._rawValue);
    // console.log(ctx);
    // console.log(111);
    // console.log(pathInfo.name);
    const topath = (name) => {
      router.push(`/components/${name}`);
    };
    return {
      DataList,
      active,
      topath,
      title,
      name,
    };
  },
});
</script>

<style lang="scss" scoped>
.fader-enter-active,
.fader-leave-active {
  transition: opacity 0.5s ease;
}

.fader-enter-from,
.fader-leave-to {
  opacity: 0;
}

.main {
  display: flex;
  max-height: calc(100vh - 50px);
}
.menu {
  min-width: 10rem;
  padding: 3rem 0rem;
  margin-right: 1rem;
  font-size: 0.95rem;
  color: #666;
  border-right: 1px solid #eee;
  overflow-y: auto;
  .item-group {
    margin-bottom: 1rem;
    .title {
      color: #ccc;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
    }
    .item {
      padding: 0.6rem 2rem;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 0.9rem;
      .cn {
      }
      .eng {
        margin-left: 5px;
        color: #ccc;
        font-size: 0.85rem;
      }
      &:hover span {
        color: #008be1;
      }
    }
    .active {
      color: #008be1;
      background-color: #e1f4ff;
      border-right: 2.5px solid #008be1;
      .eng {
        color: #008be1;
      }
    }
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: rgb(199, 199, 199);
      opacity: 1;
      visibility: inherit;
    }
  }
  li {
    padding: 2rem 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    visibility: hidden;
    transition: all 0.3s;
    opacity: 0;
  }
}
.body {
  padding-top: 2rem;
  overflow-y: auto;
  .header {
    font-size: 1.5rem;
    color: #333;
    padding-left: 3rem;
    margin-bottom: 2rem;
    .title {
      font-size: 1.5rem;
    }
    .name {
      font-size: 1.2rem;
      color: #666;
      margin-left: 0.5rem;
    }
  }
  .content {
    padding-left: 3rem;
    padding-right: 5rem;
    min-height: calc(100vh - 20rem);
  }
  .footer {
    color: #ccc;
    margin: 0 auto;
    padding: 1.5rem 0rem;
    text-align: center;
    .info {
      font-size: 1rem;
    }
    .bq {
      font-size: 0.7rem;
    }
    & * {
      width: 100%;
      padding: 0.5rem 0;
    }
    a:visited {
      color: #333;
    }
  }
}

// 路由过渡效果
.dye-bottom-leave-active,
.dye-bottom-enter-active {
  transition: all 0.3s;
}
.dye-bottom-enter,
.dye-bottom-leave-to {
  opacity: 0.5;
}
</style>