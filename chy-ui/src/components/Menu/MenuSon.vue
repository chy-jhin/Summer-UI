<template>

 <!-- <div  class="title">
     DataList.title 
  </div>


  <div class="item">
    <span class="cn"> DataList.meta.name </span>
    <span class="eng"> DataList.meta.title  </span>
     <div  class="title">
        DataList.title 
    </div>
      <div class="item">
    <span class="cn"> DataList.meta.name </span>
    <span class="eng"> DataList.meta.title  </span>
      </div>
  </div> -->




  <!-- 第一级 遍历有children -->
  <div v-if="DataList.children" class="title" @click="changeSelect">
    {{ DataList.title }}
  </div>


    
  <div
    v-if="DataList.children"
    class="item"
    v-for="(items, index2) in DataList.children"
  >
    <MenuSon
      v-if="items.children"
      :DataList="items"
      :index="index2"
      @topath="topath"
    ></MenuSon>
    <!-- <span style="color:red" v-if="items.children">
    {{items.children}}
    </span> -->
    <div v-else :class="[items.meta.title == active ? 'active' : '', 'item']" @click="topath(items.meta.title)">
    <span  class="cn">{{ items.meta.name }}</span>
    <span  class="eng"> {{ items.meta.title }}</span>
    </div>


  </div>

  <div v-else :class="[DataList.meta.title == active ? 'active' : '', 'item']" @click="topath(items.meta.title)">
    <span class="cn">{{ DataList.meta.name }}</span>
    <span class="eng"> {{ DataList.meta.title }} </span>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import MenuSon from "./MenuSon.vue";
export default defineComponent({
  name: "MenuSon",
  props: { 
    DataList: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  setup(props,ctx) {
    const active = ref("Icon1");
    const simple = [
      {
        meta: {
          title: "Icon1",
          type: "simple",
          name: "字体图标1",
        },
      },
      {
        meta: {
          title: "Icon2",
          type: "simple",
          name: "字体图标2",
        },
      },
    ];
    const complex = [
      {
        meta: {
          title: "ColorPicker1",
          type: "complex",
          name: "颜色选择器1",
        },
      },
      {
        meta: {
          title: "ColorPicker2",
          type: "complex",
          name: "颜色选择器2",
        },
      },
    ];
    const DataList1 = [
      {
        id: 1,
        title: "基础组件",
        isSHow: false,
        children: [...simple],
      },
      {
        id: 2,
        title: "复杂组件",
        isSHow: false,
        children: [
          {
            meta: {
              title: "ColorPicker2",
              type: "complex",
              name: "日期选择器1",
            },
          },
          {
            id: 3,
            title: "复杂组件2",
            isSHow: false,
            children: [...complex],
          },
          {
            meta: {
              title: "ColorPicker2",
              type: "complex",
              name: "日期选择器2",
            },
          },
        ],
      },
    ];
    const topath = (title) => {
    //   active.value = title;
    ctx.emit('topath',title)
    };
    const changeSelect = () => {
      console.log("num");
    };
    return {
      DataList1,
      topath,
      active,
      changeSelect,
    };
  },
    // components: { MenuSon },
});
</script>

<style lang="scss" scoped>
.menu {
  min-width: 10rem;
  padding: 3rem 0rem;
  padding-left: 1rem;
  font-size: 0.8rem;
  color: #666;
  border-right: 1px solid #eee;
  overflow-y: hidden;
  .item-group {
    margin-bottom: 1rem;
    .title {
      color: #ccc;

      margin-bottom: 0.5rem;
      cursor: pointer;
    }
    .item {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 0.75rem;
      .cn {
      }
      .eng {
        margin-left: 5px;
        color: #ccc;
      }
      &:hover span {
        color: #008be1;
      }
    }
    .active {
      color: #008be1;
      background-color: #e1f4ff;
      border-right: 2px solid #008be1;
      .eng {
        color: #008be1;
      }
    }
  }
  &:hover {
    overflow-y: auto;
  }
  li {
    padding: 2rem 1rem;
  }
}
</style>