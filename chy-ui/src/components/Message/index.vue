<template>
  <div class="content">（通常情况下）是从浏览器顶部降下来的圣旨。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'基础使用'"
        :desc="'是的没错, 还是那几种类型, 看着用吧。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'primary'" @click="success"> 提交按钮</Button>
            <Button :type="'info'" @click="info">信息按钮</Button>
            <Button :type="'warning'" @click="warning">警告按钮</Button>
            <Button :type="'error'" @click="error">危险按钮</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'持续时间'"
        :desc="'看几秒它就自己走了...'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'info'" @click="success2"> 持续3秒试试</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'手动关闭'"
        :desc="'你不赶人它就赖着,诶,就是玩。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'warning'" @click="success3">那我走?</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'可选关闭'"
        :desc="'看不顺眼的话也可以忍忍, 不会待很久的, 它只想看看你罢了...'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Button :type="'error'" @click="success4">让我陪陪你叭</Button>
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
import Button from "../Button/Button.vue";
import { useMessage } from "naive-ui";
export default {
  setup() {
    const message = useMessage();
    const propsData = [
      {
        name: "type",
        type: "primary | info | warning | error",
        default: "",
        info: "控制消息的外观样式",
      },
      {
        name: "closable",
        type: "Boolean",
        default: "false",
        info: "是否可关闭",
      },
      {
        name: "duration",
        type: "Number",
        default: "",
        info: "消息可持续时间",
      },
    ];
    const Clison = () => {
      message.success("就提交成功了呗");
    };
    return {
      propsData,
      Clison,
      info () {
        message.info("I don't know why nobody told you how to unfold your love")
      },
      error () {
        message.error('Once upon a time you dressed so fine')
      },
      warning () {
        message.warning('How many roads must a man walk down')
      },
      success () {
        message.success(
          "'Cause you walked hand in hand With another man in my place"
        )
      },
      success2 () {
        message.info(
          "别动别动我, 我就吹会空调...待会就走。",
          { duration: 3000 }
        )
      },
      success3 () {
        message.warning(
          "你不赶我走我就不走, 我就要粘着你。",
          {closable: true,duration: 300000}
        )
      },
      success4 () {
        message.error(
          "我就想陪你一会, 如果你不想见到我, 那我走。",
          {closable: true,}
        )
      },
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