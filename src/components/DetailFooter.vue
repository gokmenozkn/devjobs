<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.row">
        <div :class="$style.desc">
          <h4>Senior Software Engineer</h4>
          <span>So Digital Inc.</span>
        </div>
        <div :class="$style.btn">
          <a href="#" :class="$style.applyBtn">Apply Now</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "DetailFooter",
  computed: {
    footerColor() {
      return this.$store.state.darkTheme ? "#19202D" : "white";
    },

    footerTitle() {
      return this.$store.state.darkTheme ? "white" : "#19202D";
    }
  }
}
</script>

<style module lang="scss">
@import "./../scss/variables";
@import "./../scss/mixins";

.footer {
  background-color: v-bind(footerColor);
  height: 9.6rem;

  .container {
    max-width: $sm;
    margin: 0 auto;
    height: 100%;
  
    .row {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.desc {
  h4 {
    font-size: 2rem;
    color: v-bind(footerTitle);
    margin-bottom: 1.2rem;
  }

  span {
    color: $dark-gray;
    font-size: 1.6rem;
  }
}

.btn {
  .applyBtn {
    font-size: 1.6rem;
    background-color: $violet;
    color: white;
    font-weight: 700;
    padding: 1.6rem 2.8rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: $light-violet;
    }
  }
}
</style>