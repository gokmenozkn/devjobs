<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    document.title = "Dev Jobs";
    const store = useStore();
    store.commit("initTheme");
    document.body.style.backgroundColor = store.state.darkTheme ? "#121721" : "#F2F2F2";
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;700&display=swap");
@import "./scss/globals";
</style>
