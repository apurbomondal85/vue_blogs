<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'

export default {
  components: {
    Header
  },
}
</script>

<template>
  <Header />
  <RouterView />
</template>

