<template>
  <div class="menu list">
      <div class="item-group" v-for="(item, index) in DataList">
            <MenuSon :DataList="item" @topath="topath" :index="index"></MenuSon>
        </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuSon from "./MenuSon.vue";
export default defineComponent({
  props: {},
  setup() {
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
    const DataList = [
      {
        id: 0,
        meta: {
          title: "ColorPicker3",
          type: "complex",
          name: "颜色选择器3",
        },
      },
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
              title: "Icon3",
              type: "complex",
              name: "图标3",
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
              title: "Icon4",
              type: "complex",
              name: "图标4",
            },
          },
        ],
      },
    ];
    const topath = (title: string) => {
    //   active.value = title;
    console.log(title)
    };
    const changeSelect = (num: number) => {
      console.log(num);
    };
    return {
      DataList,
      topath,
      active,
      changeSelect,
    };
  },
  components: {
    MenuSon,
  },
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
  }
}
</style>