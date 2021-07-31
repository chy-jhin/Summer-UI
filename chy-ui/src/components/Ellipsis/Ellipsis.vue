<template>
  <div class="box">
    <div :class="line == 1 ? 'text-hidden' : 'text-hidden2'">
      <slot></slot>
    </div>

    <div :class="[`${position}`, 'content']">{{ content }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    content: {
      type: String,
    },
    line: {
      type: Number,
      default: 1,
    },
    position: {
      type: String,
      default: "bottom",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.box {
  position: relative;
}
.text-hidden,
.text-hidden2 {
  // > * {
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //     white-space: nowrap;
  // }
  cursor: pointer;
  &:hover + .content {
    visibility: visible;
    opacity: 1;
  }
}
.content {
  position: absolute;
  min-width: 20rem;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  border-radius: 3px;
  background-color: #ccc;
  // color: #fff;
  line-height: 1.2rem;
  //   display: none;
  visibility: hidden;
  z-index: 10;
  opacity: 0;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 10%;
  }
}
.bottom {
  top: 150%;
  &::before {
    top: -0.4rem;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-bottom: 0.4rem solid #ccc;
  }
}
.top {
  bottom: 150%;
  &::before {
    bottom: -0.4rem;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.4rem solid #ccc;
  }
}
</style>