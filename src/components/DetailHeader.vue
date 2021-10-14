<template>
  <div class="container">
    <div class="row">
      <div class="logo">
        <img src="./assets/logos/scoot.svg" alt="" />
      </div>
      <div class="main">
        <div class="left">
          <h4 class="left__title">Scoot</h4>
          <span class="left__site">scoot.com</span>
        </div>
        <div class="right">
          <Button />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./UIComponents/CompanyButton.vue";

export default {
  name: "DetailHeader",
  components: {
    Button,
  },
  computed: {
    headerColor() {
      return this.$store.state.darkTheme ? "#19202D" : "white";
    },
    titleColor() {
      return this.$store.state.darkTheme ? "white" : "#19202D";
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/mixins";
@import "./../scss/variables";

.container {
  height: 14rem;
  background-color: v-bind(headerColor);
  margin-bottom: 3.2rem;

  .row {
    display: flex;
    height: 100%;

    .logo {
      background-color: #e99210;
      width: 14rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 8rem;
      }
    }

    .main {
      width: calc(100% - 14rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 4rem;

      .left {
        &__title {
          font-size: 2.4rem;
          color: v-bind(titleColor);
        }

        &__site {
          color: $dark-gray;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>