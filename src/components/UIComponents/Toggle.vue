<template>
  <div :class="$style.toggler">
    <img src="./../assets/desktop/icon-sun.svg" alt="sun" />
    <div @click="changeTheme" :class="$style.toggle">
      <div :class="[$style.toggle__circle, darkTheme ? $style.dark : '']"></div>
    </div>
    <img src="./../assets/desktop/icon-moon.svg" alt="moon" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Toggle",
  setup() {
    const store = useStore();
    const darkTheme = computed(() => store.state.darkTheme);
    console.log("Store theme: ", store.state.darkTheme);

    function changeTheme() {
      store.commit("changeTheme");
      let { darkTheme } = store.state;
      document.body.style.backgroundColor = darkTheme ? "#121721" : "#F2F2F2";
    }

    return {
      darkTheme,
      changeTheme,
    };
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
      transition: 0.2s all ease;
    }
  }
}

.dark {
  transform: translateX(4.5rem - 1.4rem - 1rem);
}
</style>