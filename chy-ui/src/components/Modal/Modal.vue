<template>
  <div :class="[propsData.isShow ? 'show' : 'close', 'modal']">
    <div
      :class="[propsData.isShow ? 'show' : 'close', 'modal-bg']"
      @click="close"
    ></div>
    <div
      :class="[propsData.isShow ? 'show' : 'close scale', 'body']"
      :style="propsData.style"
    >
      <div class="header d-flex jc-sb">
        <div class="title">{{ propsData.title }}</div>
        <div class="iconfont icon-close" @click="close"></div>
      </div>
      <div class="main flex-1">
        <slot name="ModalMain">
          <!-- 插槽内容(不同的组件展示) -->
        </slot>
        main这里就是内容了
        <span v-if="propsData.timeout < 10000"
          >{{ propsData.timeout / 1000 - 1 }} 秒</span
        >
      </div>
      <div class="footer d-flex jc-fe">
        一般放两个按钮
        <slot name="ModalFooter">
          <!-- 插槽内容(不同的组件展示) -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch, reactive } from "vue";

export default defineComponent({
  props: {
    // 父组件对象
    propsItem: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const propsData = reactive(props.propsItem);
    if (propsData.timeout) {
      setTimeout(() => {
        close();
      }, propsData.timeout);
    }
    const close = () => {
      propsData.isShow = false;
      ctx.emit("toggle", propsData.id);
    };
    watch(
      () => props.propsItem.isShow,
      () => {
        
        let timer = setInterval(() => {
          if (propsData.timeout > 0 && propsData.timeout < 10000) {
            propsData.timeout = propsData.timeout - 1000;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    );
    return {
      close,
      propsData,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  // transition: all .5s;
  .modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
    opacity: 0;
    visibility: hidden;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%, -50%) scale(1);
    padding: 1.5rem 2rem;
    width: 20rem;
    background-color: #fff;
    border-radius: 4px;
    transition: all 0.5s;
    opacity: 0;
    .header {
      .iconfont {
        cursor: pointer;
      }
    }
    .main {
      margin: 1rem 0;
      min-height: 2rem;
    }
  }
  .close {
    opacity: 0;
    visibility: hidden;
  }
  .show {
    opacity: 1;
    visibility: inherit;
  }
  .scale {
    transform: translate(-50%, -50%) scale(0);
  }
}
</style>