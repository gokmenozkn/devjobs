<template>
  <div :class="$style.detail">
    <DetailHeader />
    <DetailMain />
  </div>
  <DetailFooter />
</template>

<script>
import DetailHeader from "./../components/DetailHeader.vue";
import DetailMain from "./../components/DetailMain.vue";
import DetailFooter from "./../components/DetailFooter.vue";

export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailMain,
    DetailFooter,
  },
};
</script>

<style module lang="scss">
@import "./../scss/variables";
@import "./../scss/mixins";

$height: 8rem;

.detail {
  max-width: $sm;
  margin: 0 auto;
  transform: translateY(-$height / 2);
}
</style>