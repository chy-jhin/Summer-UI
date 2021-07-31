<template>
  <div class="content">很多年前，人们还在用打孔纸卡输入。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'基础使用'"
        :desc="'你传个图片地址进去就行了'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <n-image
              width="100"
              :src="img1"
            />
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'图片集使用'">
        <template v-slot:comSolt>
          <div class="list">
            <n-image-group>
              <n-space>
                <n-image
                  width="100"
                  :src="img1"
                />
                <n-image
                  width="100"
                  :src="img2"
                />
              </n-space>
            </n-image-group>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Image props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NImageGroup, NImage, NSpace } from "naive-ui";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
import img1 from '@/assets/0.jpg'
import img2 from '@/assets/2.png'
export default defineComponent({
  components: {
    NImageGroup,
    NImage,
    NSpace,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "width",
        type: "number",
        default: "''",
        info: "缩略图的宽度",
      },
      {
        name: "src",
        type: "String",
        default: "''",
        info: "图片地址",
      },
    ];
    return {
      propsData,
      img1,
      img2,
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
  margin-top: 1.5rem;
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