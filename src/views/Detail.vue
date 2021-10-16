<template>
  <div :class="$style.detail">
    <DetailHeader :item="item" />
    <DetailMain :item="item" />
  </div>
  <DetailFooter :item="item" />
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
  data() {
    return {
      item: {},
    };
  },
  methods: {
    findById(id) {
      let { jobs } = this.$store.state;
      let found = jobs.find((job) => job.id === parseInt(id, 10));

      if (found) return found;
      else return null;
    },
  },
  created() {
    this.item = this.findById(this.$route.params.id);
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
  padding: 0 2.4rem;

  @include tablet {
    padding: 0;
  }
}
</style>