<template>
  <div class="content">按钮用来触发一些操作。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'基础使用'"
        :desc="'按钮的type分别为default、primary、info、warning和error。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button>普通按钮</Button>
            <Button :type="'primary'"> 提交按钮</Button>
            <Button :type="'info'" :size="'mini'">信息按钮</Button>
            <Button :type="'warning'">警告按钮</Button>
            <Button :type="'error'" :size="'large'">危险按钮</Button>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'不同尺寸'"
        :desc="'提供三种不同的尺寸:mini,medium,large:'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :size="'mini'" >小按钮</Button>
            <Button :size="'medium'" >普通按钮</Button>
            <Button :size="'large'" >大按钮</Button>
          </div>
        </template>
      </com-box>

      <com-box
        class="demo"
        :title="'是否图标'"
        :desc="'传入icon的值即可显示对应图标,详见icon组件查看图标列表。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :icon="'dianzan'">加入图标</Button>
            <Button>普通按钮</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'是否圆角'"
        :desc="'radio属性传入布尔值控制按钮是否显示为圆角。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :radio="true" >圆角按钮</Button>
            <Button>普通按钮</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'是否禁用'"
        :desc="'disable属性传入布尔值控制按钮是否为禁用状态。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :disable="true">普通按钮</Button>
            <Button>普通按钮</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'是否透明背景'"
        :desc="'ghost属性传入布尔值控制按钮是否显示为透明背景。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'error'">危险按钮</Button>
            <Button :type="'error'" :ghost="true">错误按钮</Button>
            <Button :type="'warning'" :ghost="true">警告按钮</Button>
            <Button :type="'info'" :ghost="true">信息按钮</Button>
            <Button :type="'primary'" :ghost="true">提交按钮</Button>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'文字'" :desc="'传入按钮的显示文字'">
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'primary'">自定义内容</Button>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'事件'" :desc="'传入按钮点击事件函数'">
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'primary'" :event="Clison">普通按钮</Button>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Button props:'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  setup() {
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
        name: "icon",
        type: "boolean",
        default: "false",
        info: "控制图标的显示隐藏",
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
      {
        name: "ghost",
        type: "boolean",
        default: "false",
        info: "控制按钮的风格",
      },
    ];
    const Clison = () => {
     
    };
    return {
      propsData,
      Clison,
    };
  },
  components: {
    Button,
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