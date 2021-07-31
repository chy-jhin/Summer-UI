<template>
  <div class="body d-flex">
    <div class="main">
      <div class="box"></div>
      <div v-if="value == 0 && isShow" :class="[`${type}`, 'badge']">{{ value }}</div>
            <div v-else-if="value && isShow" :class="[`${type}`, 'badge']">{{ value }}</div>
            
      <div v-else-if="!value && isShow" :class="[`${type}`, 'badge none']"></div>
    </div>
    <div style="margin-left:2rem" v-if="isChange">
      <Button @click="add">+</Button>
      <Button @click="delect">-</Button>
    </div>
    </div>
</template>

<script>
import { defineComponent, reactive, watch, ref } from "vue";
import Button from "../Button/Button.vue";
export default defineComponent({
  components: {
    Button,
  },
  props: {
    value: {
      type: Number,
    },
    showZero: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "currency",
    },
    max: {
      type: Number,
      default: 12,
    },
    min: {
      type: Number,
      default: 1,
    },
    isChange: {
      type: Boolean,
      default: false,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    let value = ref(props.value);
    let max = props.max;
    let min = props.min;
    if (props.showZero) {
      min = 0;
    }

    const add = () => {
      value.value = ++value.value;
    };
    const delect = () => {
      value.value = --value.value;
    };
    watch(
      () => props.value,
      (newval, oldval) => {
        if (newval > max || newval < min) {
          value.value = oldval;
          console.log("超过最大值或小于最小值了");
        }
      }
    );
    return {
      delect,
      add,
      value,
      max,
      min,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  .box {
    width: 3rem;
    height: 3rem;
    border-radius: 2px;
    background-color: gray;
  }
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.1rem;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    color: #fff;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
  .none {
    width: 0.5rem;
    height: 0.5rem;
    top: 0.3rem;
    right: 0.3rem;
  }
}
$colorlist: (
  currency: red,
  primary: #18a058,
  info: #2080f0,
  warning: #fcb040,
  error: #de576d,
);

@each $key, $val in $colorlist {
  .#{$key} {
    background-color: $val;
  }
}
</style>