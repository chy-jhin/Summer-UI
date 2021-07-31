<template>
  <div class="content">你以为消失的东西 , 只是换了一种形式继续存在。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'基础使用'" :desc="'带弹出提示基本的单行省略。'">
        <template v-slot:comSolt>
          <div class="list">
            <Ellipsis style="width:250px;" :content="msg" > {{msg}} </Ellipsis>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'两行省略'" :desc="'基于 -webkit-line-clamp 的多行省略。'">
        <template v-slot:comSolt>
          <div class="list">
            <Ellipsis style="width:250px;" :line="2" :content="msg" > {{msg}} </Ellipsis>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'弹出位置'" :desc="'可以选择在上方或是下方弹出。'">
        <template v-slot:comSolt>
          <div class="list">
            <Ellipsis style="width:250px;" :position="'top'" :content="msg" > {{msg}} </Ellipsis>
            <Ellipsis style="width:250px;" :position="'bottom'" :content="msg2" > {{msg2}} </Ellipsis>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'定制内容'" :desc="'可以选择弹窗的内容定制化。'">
        <template v-slot:comSolt>
          <div class="list">
            <Ellipsis style="width:250px;" :position="'top'" :content="msg" > {{msg}} </Ellipsis>
            <Ellipsis style="width:250px;" :position="'bottom'" :content="msg2" > {{msg3}} </Ellipsis>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Ellipsis props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Ellipsis from "./Ellipsis.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Ellipsis,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "position",
        type: "top | bottom",
        default: "bottom",
        info: "选择内容弹出的方位",
      },
      {
        name: "line",
        type: "number",
        default: "1",
        info: "设定内容超过多少行才隐藏",
      },
      {
        name: "content",
        type: "string",
        default: "",
        info: "使用 content 定制弹窗内容。",
      },
    ]
    const msg = '彼其于世，未数数然也。虽然，犹有未树也。夫列子御风而行，泠然善也，旬有五日而后反。彼于致福者，未数数然也。此虽免乎行，犹有所待者也。'
    const msg2 = '如果你能像看别人缺点一样，如此准确般的发现自己的缺点，那么你的生命将会不平凡。'
    const msg3 = '向死而生的意义是：当你无限接近死亡，才能体会生的意义。'
    return {
     propsData,
     msg,
     msg2,
     msg3
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