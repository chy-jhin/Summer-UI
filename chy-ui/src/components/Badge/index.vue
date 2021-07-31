<template>
  <div class="content">我敢说你肯定见过这玩意而且知道怎么用它。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'基础使用'" :desc="'你就传个要显示的数字进去就好了。'">
        <template v-slot:comSolt>
          <div class="list">
            <Badge ></Badge>
            <Badge :value="value" :isChange="true"></Badge>
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'角标类型'" :desc="'标记有default、error、info、success、warning类型。'">
        <template v-slot:comSolt>
          <div class="list">
            <Badge ></Badge>
            <Badge :type="'primary'"></Badge>
            <Badge :type="'info'"></Badge>
            <Badge :type="'warning'"></Badge>
            <Badge :type="'error'"></Badge>
          </div>
        </template>
      </com-box>
      <!-- <com-box class="demo" :title="'最大最小值'" :desc="'传入max以及min,以限制其取值区间。'">
        <template v-slot:comSolt>
          <div class="list">
            <Badge :value="value" ></Badge>
            <Badge :value="value" :max="6" :type="'primary'"></Badge>
            <Badge :value="value" :min="4" :type="'info'"></Badge>
          </div>
        </template>
      </com-box> -->
      <com-box class="demo" :title="'显示 0'" :desc="'设定show-zero来显示0。'">
        <template v-slot:comSolt>
          <div class="list">
            <Badge ></Badge>
            <Badge :type="'primary'" :value="value"></Badge>
            <Badge :type="'info'" :value="0" :showZero="true"></Badge>

          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'受控显示'" :desc="'设定isShow来控制显示。'">
        <template v-slot:comSolt>
          <div class="list d-flex">
            <Badge :isShow="isShow" ></Badge>
            <Badge :isShow="isShow" :type="'primary'" :value="value"></Badge>
            <Badge :isShow="isShow" :type="'info'" :value="0" :showZero="true"></Badge>
            <Switch style="margin-left:3rem;" :Active="isShow" @click="toggleShow"></Switch>
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Badge props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import Badge from "./Badge.vue";
import Switch from "../Switch/Switch.vue"
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    Badge,
    Switch,
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
      {
        name: "value",
        type: "Number",
        default: "",
        info: "告诉我你的值是多少",
      },
      {
        name: "showZero",
        type: "Boolean",
        default: "",
        info: "控制是否显示数字0",
      },
      {
        name: "max",
        type: "Number",
        default: "99",
        info: "告诉我最大值是多少",
      },
            {
        name: "min",
        type: "Number",
        default: "1",
        info: "告诉我最小值是多少",
      },
    ];
    const value = ref(5);
    const isShow = ref(false)
    const toggleShow = () => {
      isShow.value = !isShow.value;
    }
     return {
     propsData,
     toggleShow,
     value,
     isShow,
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
  display: flex;
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