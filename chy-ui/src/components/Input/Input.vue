<template>
  <div class="d-flex">
    <div :class="[radio ? 'radio' : '', `${size}`, 'search d-flex']">
      <i v-if="icon" :class="[`icon-${icon}`, 'iconfont']"></i>
      <input class="flex-1" type="text" :placeholder="placeholdren" />
      <span v-if="last" class="last">{{ last }}</span>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
    },
    placeholdren: {
      type: String,
      default: "搜索",
    },
    radio: {
      type: Boolean,
      default: false,
    },
    last: {
      type: String,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid #cfd4db;
  text-align: left;
  transition: all 0.3s;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  border-radius: 3px;
  &:hover {
    border: 1px solid #008be1;
  }
  .iconfont {
    margin-left: 0.5rem;
  }
  input {
    // width: 50%;
    margin-left: 0.2rem;
    border: none;
    padding: 0.2rem 0rem;
  }
  .last {
    transform: translate(-0.5em, 0);
    user-select: none;
    color: #ccc;
  }
}
.radio {
  border-radius: 20px;
}
.mini {
  width: 11rem;
  padding: 0.2rem;
  font-size: 0.5rem;
  .iconfont {
    font-size: 0.7rem;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    font-size: 0.6rem;
  }
}
.medium {
  min-width: 13rem;
  display: inline-block;
  padding: 0.3rem;
  font-size: 0.6rem;
  .iconfont {
    font-size: 0.85rem;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    font-size: 0.7rem;
  }
}
.large {
  width: 15rem;
  padding: 0.4rem;
  font-size: 0.7rem;
  .iconfont {
    font-size: 1rem;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    font-size: 0.9rem;
  }
}
</style>