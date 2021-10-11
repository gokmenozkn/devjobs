<template>
  <div :class="$style.home">
    <JobSearch />
    <JobList />
  </div>
</template>

<script>
import JobList from "@/components/JobList.vue";
import JobSearch from "@/components/JobSearch.vue";

export default {
  name: "Home",
  components: {
    JobSearch,
    JobList,
  },
};
</script>


<style module lang="scss">
@import "./../scss/mixins";

$search-height: 8rem;

.home {
  max-width: $lg;
  margin: 0 auto;
  padding: 0 2em;
  transform: translateY(-$search-height / 2);

  @include desktop {
    padding: 0;
  }
}

</style>