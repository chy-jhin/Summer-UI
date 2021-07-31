<template>
  <div class="content">很多年前，人们还在用打孔纸卡输入。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'有无图标'" :desc="'可用图标见Icon'">
        <template v-slot:comSolt>
          <div class="list">
            123
          </div>
        </template>
      </com-box>
      <Menu></Menu>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Menu props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Menu from "./Menu.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Menu,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "type",
        type: "default | primary | info | warning | error",
        default: "default",
        info: "控制按钮的外观样式",
      },
    ]
    return {
     propsData,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 2rem;
}
.list {
  * {
    margin: 1rem 0rem;
  }
}
.main {
  .demo {
    margin-right: 2rem;
    width: 45%;
    margin-bottom: 2rem;
  }
  &::before {
    content: "具体演示:";
    display: block;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
}
.props {
  .Bigtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>