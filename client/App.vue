<template>
  <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/App/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
