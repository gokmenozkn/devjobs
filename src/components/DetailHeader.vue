<template>
  <div class="container">
    <div class="row">
      <div class="logo">
        <img :src="require(`${item.logo}`)" alt="logo" />
      </div>
      <div class="main">
        <div class="left">
          <h4 class="left__title">{{ item.company }}</h4>
          <span class="left__site">{{ item.website }}</span>
        </div>
        <div class="right">
          <Button :url="item.website" />
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
  props: {
    item: Object
  },
  computed: {
    headerColor() {
      return this.$store.state.darkTheme ? "#19202D" : "white";
    },
    titleColor() {
      return this.$store.state.darkTheme ? "white" : "#19202D";
    },
    logoBackground() {
      return this.item.logoBackground;
    }
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/mixins";
@import "./../scss/variables";

.container {
  height: 20.5rem;
  background-color: v-bind(headerColor);
  margin-bottom: 3.2rem;

  @include small {
    height: 14rem;
  }

  .row {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;

    @include small {
      flex-direction: row;
      align-items: initial;
    }

    .logo {
      background-color: v-bind(logoBackground);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 1.5rem;
      transform: translateY(calc(-5rem / 2));

      @include small {
        width: 14rem;
        transform: translateY(0);
        border-radius: 0;
        height: 100%;
      }

      img {
        width: 4rem;

        @include small {
          width: 8rem;
        }
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      gap: 2.7rem;

      @include small {
        flex-direction: row;
        text-align: initial;
        width: calc(100% - 14rem);
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        gap: 0;
      }

      .left {
        &__title {
          font-size: 2.4rem;
          color: v-bind(titleColor);
          margin-bottom: 1.3rem;
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