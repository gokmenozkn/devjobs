<template>
  <div :class="$style.list">
    <div :class="$style.row">
      <JobListItem />
    </div>
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
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  // grid-column-gap: 1.1rem;
  // grid-row-gap: 6.5rem;
  
  // @include desktop{
  //   grid-column-gap: 3rem;
  // }

  .row {
    display: flex;
    flex-wrap: wrap;
    row-gap: 5.5rem;
    // column-gap: 1.1rem;
  }
}
</style>