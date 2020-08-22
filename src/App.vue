<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
</style>

<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>
