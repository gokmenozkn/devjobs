<template>
  <div @click="changeTheme" :class="$style.toggler">
    <img src="./../assets/desktop/icon-sun.svg" alt="sun" />
    <div :class="$style.toggle">
      <div
        :class="[$style.toggle__circle, theme === 'dark' ? $style.dark : '']"
      ></div>
    </div>
    <img src="./../assets/desktop/icon-moon.svg" alt="moon" />
  </div>
</template>

<script>
export default {
  name: "Toggle",
  computed: {
    theme() {
      return this.$store.state.darkTheme ? "dark" : "light";
    },
  },
  methods: {
    changeTheme() {
      this.$store.commit("changeTheme");
    },
  },
};
</script>

<style module lang="scss">
@import "./../../scss/variables";
@import "./../../scss/mixins";

.toggler {
  display: flex;
  align-items: center;
  gap: 1rem;

  .toggle {
    width: 4.5rem;
    background-color: #fff;
    height: 2.3rem;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0 5px;
    cursor: pointer;

    &:hover {
      .toggle__circle {
        background-color: $light-violet;
      }
    }

    &__circle {
      height: 1.4rem;
      width: 1.4rem;
      background-color: $violet;
      border-radius: 50%;
      transition: 0.4s all ease-in-out;
    }
  }
}

.dark {
  transform: translateX(4.5rem - 1.4rem - 1rem);
}
</style>