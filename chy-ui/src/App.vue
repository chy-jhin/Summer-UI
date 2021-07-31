<template>
<n-message-provider>
  <RouterView />
</n-message-provider>
  <!-- <div class="main-bg"></div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
  },
});
</script>

<style>
</style>