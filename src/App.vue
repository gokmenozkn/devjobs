<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    onMounted(() => {
      document.title = "Dev Jobs";
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;700&display=swap");
@import "./scss/globals";
</style>
