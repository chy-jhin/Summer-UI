<template>
  <div class="content">很多年前，人们还在用打孔纸卡输入。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'有无图标'" :desc="'可用图标见Icon'">
        <template v-slot:comSolt>
          <div class="list">
            <Input
              
              :icon="'search'"
              :placeholdren="'搜索'"
            ></Input>
            <Input  :placeholdren="'搜索'"></Input>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'是否圆角'">
        <template v-slot:comSolt>
          <div class="list">
            <Input :size="'medium'" :icon="'search'" :placeholdren="'搜索'"></Input>
            <Input
              
              :radio="true"
              :icon="'search'"
              :placeholdren="'搜索'"
            ></Input>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'不同的输入框提示'">
        <template v-slot:comSolt>
          <div class="list">
            <Input
              
              :icon="'dianhua'"
              :placeholdren="'请输入电话号码'"
            ></Input>
            <Input
              
              :icon="'search'"
              :placeholdren="'搜索'"
            ></Input>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'后缀'">
        <template v-slot:comSolt>
          <div class="list">
            <Input
              
              :icon="'dianzan'"
              :placeholdren="'请输入点赞数'"
            ></Input>
            <Input
              
              :icon="'aixin'"
              :last="'红心'"
              :placeholdren="'请输入点赞数'"
            ></Input>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'大小不同'" :desc="'控制输入框的尺寸'">
        <template v-slot:comSolt>
          <div class="list">
            <Input
              :size="'mini'"
              :icon="'search'"
              :radio="true"
              :placeholdren="'搜索'"
            ></Input>
            <Input
              
              :icon="'search'"
              :radio="true"
              :placeholdren="'搜索'"
            ></Input>
            <Input
              :size="'large'"
              :icon="'search'"
              :radio="true"
              :placeholdren="'搜索'"
            ></Input>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Input props'" :tableData="propsData"></com-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "./Input.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Input,
    ComBox,
  },
  setup(prop, ctx) {
    const router = useRouter();
    // const title = ref(router.currentRoute._rawValue.query.id);
    const propsData = [
      {
        name: "size",
        type: "mini | medium | large",
        default: "medium",
        info: "控制输入框的尺寸大小",
      },
      {
        name: "icon",
        type: "String",
        default: "",
        info: "控制输入框左边是否显示图标",
      },
      {
        name: "placeholdren",
        type: "String",
        default: "",
        info: "输入框的提示语句",
      },
      {
        name: "last",
        type: "String",
        default: "",
        info: "输入框最后的修饰字符",
      },
      {
        name: "radio",
        type: "Boolean",
        default: "false",
        info: "控制输入框是否显示圆角",
      },
    ];
    return {
      router,
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