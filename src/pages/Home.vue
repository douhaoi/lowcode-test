<template>
  <div class="font-sans p-2">Home</div>
  <div>{{ val }}</div>
  <el-button type="primary" @click="handleAdd()">增加</el-button>
</template>

<script lang="ts">
export default {
  name: "WidgetLayoutHome",
};
</script>

<script lang="ts" setup>
// import { ref } from "vue";

const val = ref(2022);

function handleAdd() {
  val.value++;
}
</script>
