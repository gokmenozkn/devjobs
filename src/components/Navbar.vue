<template>
  <div :class="$style.container">
    <nav :class="$style.nav">
      <div :class="$style.row">
        <router-link to="/" :class="$style.brand">devjobs</router-link>
        <toggle />
      </div>
    </nav>
  </div>
</template>

<script>
import Toggle from "./UIComponents/Toggle.vue";

export default {
  name: "Navbar",
  components: {
    Toggle
  }
}
</script>

<style lang="scss" module>
@import "./../scss/variables";
@import "./../scss/mixins";

$radius: 0px 0px 100px 0px;

.container {
  background-color: $violet;
  background-image: url('./assets/desktop/bg-pattern-header.svg');
  background-size: cover;
  height: 16rem;
  border-bottom-left-radius: 0;

  @include small {
    border-bottom-left-radius: 10rem;
  }
}

.nav {
  max-width: $lg;
  margin: 0 auto;
  padding: 4rem 2em 0 2em;

  @include desktop {
    padding: 4rem 0 0 0;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}

.brand {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
}
</style>
