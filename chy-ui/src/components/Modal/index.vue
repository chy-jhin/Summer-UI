<template>
  <div class="content">它会突然出现，然后吓你一跳的样子。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'普通使用'"
        :desc="'你可以往里面放点东西,类似卡片一样'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Modal :propsItem="props[0]" @toggle="toggle"></Modal>
            <Button @click="showBtn(0)">来吧</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'受控显示'"
        :desc="'模态框的显示时间是受控的。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Modal :propsItem="props[1]" @toggle="toggle" :timeout="3000"></Modal>
            <Button @click="showBtn(1)">走你</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'改变定位'"
        :desc="'模态框的位置也是受控的。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Modal :propsItem="props[2]" @toggle="toggle"></Modal>
            <Button @click="showBtn(2)">走你</Button>
          </div>
        </template>
      </com-box>
      <com-box
        class="demo"
        :title="'自定义内容'"
        :desc="'好几个插槽, 想吃什么自己拿。'"
      >
        <template v-slot:comSolt>
          <div class="list">
            <Modal :propsItem="props[3]" @toggle="toggle">
              <template v-slot:ModalMain> 你管我放什么 </template>
              <template v-slot:ModalFooter> 我想放什么放什么 </template>
            </Modal>
            <Button @click="showBtn(3)">走你</Button>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Modal props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import Modal from "./Modal.vue";
import Button from "../Button/Button.vue";
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Modal,
    Button,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "type",
        type: "default | primary | info | warning | error",
        default: "default",
        info: "控制按钮的外观样式",
      },
    ];

    const props = reactive([
      {
        id:0,
        isShow: false,
        timeout: 300000,
        style: "top:50%;left:50%",
        // style: "",
        title: "请注意",
      },
      { 
        id:1,
        isShow: false,
        timeout: 5000,
        style: "top:50%;left:50%",
        // style: "",
        title: "请注意",
      },
      {
        id:2,
        isShow: false,
        timeout: 300000,
        style: "top:30%;left:20%;",
        // style: "",
        title: "请注意",
      },
      {
        id:3,
        isShow: false,
        timeout: 300000,
        style: "top:50%;left:50%;",
        // style: "",
        title: "请注意",
      },
    ]);

    const showBtn = (num) => {
      props[num].isShow = true;
    };

    const toggle = (val) => {
      props[val].isShow = false;
    };
    return {
      propsData,
      showBtn,
      toggle,
      props,
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