<template>
  <div class="content">按钮用来触发一些操作。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'基础使用'"
        :desc="'标签有好几种不同的颜色标识。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Tag :type="'default'">半城烟沙</Tag>
            <Tag :type="'primary'">玫瑰花的葬礼</Tag>
            <Tag :type="'info'">灰色头像</Tag>
            <Tag :type="'warning'">叹服</Tag>
            <Tag :type="'error'">微博控</Tag>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'不同尺寸'"
        :desc="'提供三种不同的尺寸:mini,medium和large'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Tag :size="'mini'" :type="'primary'">玫瑰花的葬礼</Tag>
            <Tag :size="'medium'" :type="'primary'">玫瑰花的葬礼</Tag>
            <Tag :size="'large'" :type="'primary'">玫瑰花的葬礼</Tag>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'是否圆角'"
        :desc="'圆的 Tag 长得像个胶囊。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Tag>半城烟沙</Tag>
            <Tag :type="'info'" :radio="true">玫瑰花的葬礼</Tag>
            <Tag :type="'warning'" :radio="true">灰色头像</Tag>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'是否禁用'"
        :desc="'disable属性控制是否为禁用状态。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Tag :disable="true"></Tag>
            <Tag></Tag>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'文字'" :desc="'传入按钮的显示文字'">
        <template v-slot:comSolt>
          <div class="list">
            <Tag :type="'primary'">大家好我是VAE</Tag>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'事件'" :desc="'传入按钮点击事件函数'">
        <template v-slot:comSolt>
          <div class="list">
            <Tag :type="'primary'" :event="Clison">点击标签</Tag>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Tag props:'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
import { useMessage } from 'naive-ui'
export default {
  setup() {
    const message = useMessage();
    const propsData = [
      {
        name: "type",
        type: "default | primary | info | warning | error",
        default: "default",
        info: "控制按钮的外观样式",
      },
      {
        name: "size",
        type: "mini | medium | large",
        default: "false",
        info: "控制按钮的大小尺寸",
      },
      {
        name: "radio",
        type: "boolean",
        default: "false",
        info: "控制按钮圆角的显示隐藏",
      },
      {
        name: "disable",
        type: "boolean",
        default: "false",
        info: "控制按钮禁用状态的显示隐藏",
      },
    ];
    const Clison = () => {
      message.success("提交")
    };
    return {
      propsData,
      Clison,
    };
  },
  components: {
    Tag,
  },
};
</script>

<style lang="scss" scoped>
.main {
  .demo {
    margin-right: 2rem;
    width: 45%;
    margin-bottom: 2rem;
    .list {
      margin-top: 1.5rem;
      > * {
        margin-right: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
  &::before {
    content: "具体演示:";
    display: block;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
}
.content {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 2rem;
}
.props {
  .Bigtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>