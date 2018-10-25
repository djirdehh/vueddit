<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #dae0e5;
  overflow: hidden;
  position: relative;
}
</style>
