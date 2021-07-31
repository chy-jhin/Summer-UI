<template>
  <div
    :class="[
      'switch',
      `${size}`,
      isActive.value ? 'active1' : '',
      disable ? 'disable' : '',
    ]"
    @click="toggleClass"
  >
    <div
      :class="[
        'block',
        disable ? 'disable' : '',
        isActive.value ? 'active2' : '',
      ]"
    ></div>
    <!-- {{isActive.value}} -->
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    Active: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    event: {
      type: Function,
    },
  },
  setup(props, ctx) {
    let isActive = reactive({ value: props.Active });
    const toggleClass = () => {
      if (props.disable) {
        return false;
      }
        isActive.value = !isActive.value;
      if(props.event){
          props.event();
      }
        
    };
    return {
      toggleClass,
      isActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  width: 2rem;
  height: 1rem;
  background-color: rgb(179, 179, 179);
  border: 1px solid transparent;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  &:active {
    border-color: #008be1;
  }
  &:active .block {
    width: 70%;
  }
  &:hover {
    cursor: pointer;
  }
  .block {
    position: absolute;
    left: 0;
    top: -1px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .active2 {
    left: 50%;
    top: -1px;
  }
  .disable {
    opacity: 1;
    cursor: not-allowed;
  }
}
.active1 {
  background-color: #008be1;
}

.disable {
  opacity: 0.5;
  cursor: not-allowed;
}
.mini{
  width: 2rem;
  height: 1rem;
  .block{
    width: 1rem;
    height: 1rem;
  }
}
.medium{
  width: 2.3rem;
  height: 1.15rem;
  .block{
    width: 1.15rem;
    height: 1.15rem;
  }
}
.large{
  width: 2.5rem;
  height: 1.3rem;
  .block{
    width: 1.3rem;
    height: 1.3rem;
  }
.active2 {
    left: 47%;
    top: -1px;
  }
}
</style>