<template>
  <ParentLayout>
    <template #page-bottom>
      <CommentService :darkmode="isDarkMode" />
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onUnmounted, onMounted, ref } from "vue";

const isDarkMode = ref(false);

onMounted(() => {
  const html = document.documentElement;

  isDarkMode.value = html.classList.contains("dark");

  // watch theme change
  const observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });

  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
