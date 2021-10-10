<template>
  <button :class="$style.search" type="submit">Search</button>
</template>

<script>
export default {
  name: "SearchButton",
};
</script>

<style lang="scss" module>
@import './../../scss/variables';

.search {
  background-color: $violet;
  color: $white;
  border: none;
  font-size: 1.6rem;
  padding: 0.9em 1.8em;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: $light-violet;
  }
}
</style>