<template>
  <div class="content">在互联网上，没有人知道你是一蜘蛛。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'头像大小'"
        :desc="'传入不同的值以显示不同大小的头像'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Avatar :size="'mini'"></Avatar>
            <Avatar :size="'medium'"></Avatar>
            <Avatar :size="'large'"></Avatar>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'是否圆角'" :desc="'头像也可以是圆角样式'">
        <template v-slot:comSolt>
          <div class="list">
            <Avatar :size="'mini'" :radio="false"></Avatar>
            <Avatar :size="'medium'" :radio="false"></Avatar>
            <Avatar :size="'large'" :radio="false"></Avatar>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'有无角标'"
        :desc="'传入数字可展示未读角标'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Avatar :badge="18" :size="'large'"></Avatar>
            <Avatar :size="'large'"></Avatar>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'传入图片'"
        :desc="'可传入自定义图片的绝对路径'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Avatar :src="img1" :size="'large'"></Avatar>
            <Avatar :size="'large'"></Avatar>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Avatar props'" :tableData="propsData"></com-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Avatar from "./Avatar.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
import img1 from "@/assets/2.png";
export default defineComponent({
  components: {
    Avatar,
    ComBox,
  },
  setup(prop, ctx) {
    const router = useRouter();
    const propsData = [
      {
        name: "size",
        type: "mini | medium | large",
        default: "medium",
        info: "控制头像的尺寸大小",
      },
      {
        name: "src",
        type: "String",
        default: "",
        info: "控制头像显示内容",
      },
      {
        name: "radio",
        type: "Boolean",
        default: "false",
        info: "控制头像显示样式是否圆角",
      },
      {
        name: "badge",
        type: "Number",
        default: "",
        info: "控制头像的角标是否显示",
      },
    ];
    const logo = img1;
    return {
      router,
      propsData,
      logo,
      img1
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