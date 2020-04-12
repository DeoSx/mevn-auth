<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <h3>as</h3>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
