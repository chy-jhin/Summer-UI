<template>
  <div class="content">放点东西进去。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb ai-fs flex-wrap">
      <com-box class="demo" :title="'基础用法'" :desc="'基础卡片。'">
        <template v-slot:comSolt>
          <div class="list">
            <Card :title="'卡片'" :desc="'卡片内容'"></Card>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'插槽'" :desc="'自定义插槽内容。'">
        <template v-slot:comSolt>
          <div class="list">
            <Card :title="'卡片插槽示例'" :desc="'卡片内容'">
              <template v-slot:CardHeader> #Header </template>
              <template v-slot:CardFooter> #Footer </template>
            </Card>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'边框'" :desc="'卡片可以没有边框。'">
        <template v-slot:comSolt>
          <div class="list">
            <Card :title="'无边框的卡片'" :desc="'卡片内容'" :isBorder="false">
            </Card>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'可悬浮'" :desc="'卡片可以有悬浮效果。'">
        <template v-slot:comSolt>
          <div class="list">
            <Card :title="'可悬浮的卡片'" :desc="'卡片内容'" :isHover="true">
            </Card>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'封面'" :desc="'卡片可以有好看的封面。'">
        <template v-slot:comSolt>
          <div class="list">
            <Card :title="'带封面的卡片'" :desc="'卡片内容'">
              <template v-slot:CardCover>
                <img class="img" :src="img1" alt="" />
              </template>
            </Card>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'没有标题'"
        :desc="'谁说卡片一定要有标题呢。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Card :desc="'可以没有主标题'"> </Card>

            <Card :title="'也可以没有副标题'"> </Card>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Card props'" :tableData="propsData"></com-table>
  </div>
  <div class="props">
    <div class="Bigtitle">Slots</div>
    <com-table
      :title="'Card slots'"
      :tableProps="slotProps"
      :tableData="slotData"
    ></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Card from "./Card.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
import img1 from "@/assets/3.jpg";
export default defineComponent({
  components: {
    Card,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "title",
        type: "String",
        default: "",
        info: "卡片主标题的显示内容",
      },
      {
        name: "desc",
        type: "String",
        default: "",
        info: "卡片副标题的显示内容",
      },
      {
        name: "isBorder",
        type: "Boolean",
        default: "true",
        info: "控制卡片是否显示边框",
      },
      {
        name: "isHover",
        type: "Boolean",
        default: "false",
        info: "控制卡片是否携带悬浮效果",
      },
    ];
    const slotProps = [
      { name: "名称", class: "title" },
      { name: "参数", class: "arguments" },
      { name: "说明", class: "info" },
    ];
    const slotData = [
      {
        title: "cover",
        arguments: "()",
        info: "卡片的封面cover部分填充的内容",
      },
      {
        title: "Header",
        arguments: "()",
        info: "卡片的头部header部分填充的内容",
      },
      {
        title: "Footer",
        arguments: "()",
        info: "卡片的底部footer部分填充的内容",
      },
    ];
    return {
      img1,
      propsData,
      slotData,
      slotProps,
    };
  },
});
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
  margin-bottom: 3rem;
  .Bigtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>