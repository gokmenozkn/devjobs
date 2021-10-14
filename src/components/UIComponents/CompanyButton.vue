<template>
  <a href="#" :class="$style.link">Company Site</a>
</template>

<script>
export default {
  name: "CompanyButton",
  computed: {
    color() {
      return this.$store.state.darkTheme ? "white" : "#5964E0";
    },
    backColor() {
      return this.$store.state.darkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(89, 100, 224, 0.1)";
    },
    backColorHover() {
      return this.$store.state.darkTheme ? "rgba(255, 255, 255, 0.35)" : "rgba(89, 100, 224, 0.35)";
    },
  }
};
</script>

<style module lang="scss">
.link {
  color: v-bind(color);
  background-color: v-bind(backColor);
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 0.5rem;

  &:hover {
    background-color: v-bind(backColorHover);
  }
}
</style>