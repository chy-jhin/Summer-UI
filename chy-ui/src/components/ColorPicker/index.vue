<template>
  <div class="content">和真实世界比起来，它的空间是不连续的。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'基础用法'" :desc="'一个基本的颜色选择器。'">
        <template v-slot:comSolt>
          <div class="list">
            <div class="text" :style="`color:${indexColor.color}`">这里有一行字</div>
            <NColorPicker v-model:value="indexColor.color"></NColorPicker>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'默认颜色值'" :desc="'可以修改选择的起始颜色值。'">
        <template v-slot:comSolt>
          <div class="list">
            <div class="text" :style="`color:${indexColor.color2}`">这里也有一行字</div>
            <NColorPicker v-model:value="indexColor.color2" :default-value="indexColor.color2"></NColorPicker>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'不透明度'" :desc="'用show-alpha控制是否可调节颜色透明度。'">
        <template v-slot:comSolt>
          <div class="list">
            <NColorPicker :show-alpha="false"></NColorPicker>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'选择默认模式'" :desc="'可以设置选择器的默认颜色进制。'">
        <template v-slot:comSolt>
          <div class="list">
            <NColorPicker :modes="['hex']" ></NColorPicker>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'ColorPicker props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { NColorPicker,NInput } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
// import ColorPicker from "./ColorPicker.vue";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    ComBox,
    NInput,
    NColorPicker
  },
  setup(prop, ctx) {
    const propsData = [
            {
        name: "default-value",
        type: "String",
        default: "",
        info: "默认的颜色值",
      },
            {
        name: "modes",
        type: "Array['rgb', 'hex', 'hsl']",
        default: "'rgb'",
        info: "颜色选择器支持颜色的格式,选择之后就不能再更改了",
      },
            {
        name: "default-value",
        type: "String",
        default: "",
        info: "默认的颜色值",
      },
            {
        name: "default-value",
        type: "String",
        default: "",
        info: "默认的颜色值",
      },
    ]
    const colorChange = (val) => {
      console.log(val)
    }
    const indexColor = reactive({
      color:"rgb(0,0,0)",
      color2:'rgba(19,165,228,1)'
    })
    return {
     propsData,
     colorChange,
     indexColor
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
  .text{
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
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