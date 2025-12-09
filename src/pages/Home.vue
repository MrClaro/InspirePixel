<script setup>
import BaseLayout from "../components/layout/BaseLayout.vue";
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";

import Banner from "../components/features/Banner.vue";
import Inspire from "../components/features/Inspire.vue";
</script>

<template>
  <BaseLayout>
    <template #header><Header /></template>
    <template #default>
      <Banner />
      <Inspire />
    </template>
    <template #footer><Footer /></template>
  </BaseLayout>
</template>

<style scoped></style>
