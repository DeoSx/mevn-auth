<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/App/Navbar.vue';
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
