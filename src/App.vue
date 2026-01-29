<script setup>
import Navbar from "./components/navbar.vue";
import Footer from './components/footer.vue'
</script>

<template>
  <div class="bg-bgprimary relative">
    <Navbar class="sticky top-0 z-100 backdrop-blur-lg" />
    <div class=" max-w-350 mx-auto p-4">
      <Router-view class="py-8 min-h-screen"></Router-view>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
