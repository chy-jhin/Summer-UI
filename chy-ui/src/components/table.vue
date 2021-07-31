<template>
  <div>
    <div class="header">{{ title }}</div>
    <div class="table">
      <div class="item tableHeader">
        <div
          v-for="(item, index) in tableProps"
          :key="index"
          :class="item.class"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="item" v-for="(item, index) in tableData" :key="index">
        <div v-if="item.name" class="name">{{ item.name }}</div>
        <div v-if="item.title" class="title">{{ item.title }}</div>
        <div v-if="item.name" class="type">
          <span class="code">{{ item.type }}</span>
        </div>
        <div v-if="item.name" class="default">
          <span class="code">{{ item.default }}</span>
        </div>
        <div v-if="item.title" class="arguments">
          <span class="code">{{ item.arguments }}</span>
        </div>
        <div class="info">{{ item.info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    tableProps: {
      type: Array,
      default: [
        { name: "名称", class: "name" },
        { name: "类型", class: "type" },
        { name: "默认值", class: "default" },
        { name: "说明", class: "info" },
      ],
    },
    tableData: {
      type: Array,
      default: [
        {
          name: "autofocus",
          type: "boolean",
          default: "false",
          info: "说明说明说明说明",
        },
        {
          name: "autosize",
          type: "boolean | { minRows?: number, maxRows?: number }",
          default: "false",
          info: "说明说明明",
        },
        {
          name: "show-password-toggle	",
          type: "boolean",
          default: "false",
          info: "控制密码的显示隐藏",
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.table {
  border: 1px solid #eee;
  font-size: 0.7rem;
  .item {
    display: flex;
    justify-content: space-between;
    > * {
      padding: 0.6rem 0.4rem;
    }
    .name {
      width: 10%;
    }
    .title {
      width: 40%;
    }
    .type {
      width: 40%;
    }
    .default {
      width: 10%;
    }
    .arguments {
      width: 10%;
    }
    .info {
      flex: 1;
    }
    .code {
      display: inline-block;
      padding: 0.1rem 0.2rem;
      background-color: rgb(244, 244, 248);
    }
    // &:last-child{
    //     flex: 1;
    // }
  }
  .tableHeader {
    background-color: rgb(244, 244, 248);
    border-bottom: 1px solid #eee;
    font-size: 0.8rem;
  }
}
</style>