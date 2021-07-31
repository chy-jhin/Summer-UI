<template>
  <div class="content">好想玩Switch可惜买不起也没时间 , 所以就自己写一个。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'基础用法'" :desc="'基础的开关用法'">
        <template v-slot:comSolt>
          <div class="list">
            <Switch></Switch>
            <Switch :Active="true"></Switch>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'直接沉默'" :desc="'禁用了就不能用了'">
        <template v-slot:comSolt>
          <div class="list">
            <Switch :disable="true"></Switch>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'可大可小'" :desc="'开关可以变大变小'">
        <template v-slot:comSolt>
          <div class="list">
            <Switch :Active="true" :size="'mini'"></Switch>
            <Switch :Active="true" :size="'medium'"></Switch>
            <Switch :Active="true" :size="'large'"></Switch>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'点击事件'" :desc="'传个函数进去'">
        <template v-slot:comSolt>
          <div class="list">
            <Switch :event="ff"></Switch>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Switch props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Switch from "./Switch.vue";
import { useMessage } from 'naive-ui'
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Switch,
    ComBox,
  },
  setup(prop, ctx) {
    const message = useMessage();
    const propsData = [
      {
        name: "size",
        type: "mini | medium | large",
        default: "medium",
        info: "控制输入框的尺寸大小",
      },
      {
        name: "disable",
        type: "boolean",
        default: "false",
        info: "控制按钮禁用状态的显示隐藏",
      },
      {
        name: "event",
        type: "Function",
        default: "",
        info: "点击开关按钮后的调用方法",
      },
    ];
    const ff = () => {
      message.success("这是父级的方法")
    };
    return {
      propsData,
      ff,
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
  * {
    margin: 0rem 1rem;
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