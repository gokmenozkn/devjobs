<template>
  <div :class="$style.list">
    <JobListItem />
  </div>
</template>

<script>
import JobListItem from "./JobListItem.vue";

export default {
  name: "JobList",
  components: {
    JobListItem,
  },
};
</script>

<style lang="scss" module>
@import "./../scss/mixins";

.list {
  margin-top: 10em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-column-gap: 1.1rem;
  grid-row-gap: 6.5rem;
  
  @include desktop{
    grid-column-gap: 3rem;
  }
}
</style>