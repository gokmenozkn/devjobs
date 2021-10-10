<template>
  <div :class="$style.home">
    <JobSearch />
    <JobList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
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

.home {
  max-width: $lg;
  margin: 0 auto;
  padding: 0 2em;

  @include desktop {
    padding: 0;
  }
}

</style>