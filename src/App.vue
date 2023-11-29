<template>
  <RouterLink to="/">Home</RouterLink> | 
  <RouterLink to="/about">About</RouterLink>
  <hr>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
