<template>
  <div
    :class="[item.card, darkTheme ? item.card__dark__theme : '']"
    v-for="job in filteredJobs"
    :key="job.id"
  >
    <div
      :class="item.card__img"
      :style="{ backgroundColor: job.logoBackground }"
    >
      <img :src="require(`${job.logo}`)" :alt="job.company" />
    </div>
    <div :class="item.card__time">
      <div :style="timeStyle">
        <div>{{ job.postedAt }}</div>
        <div id="circle" :style="circleStyle"></div>
        <div>{{ job.contract }}</div>
      </div>
    </div>
    <a
      href="#"
      :class="[item.card__title, darkTheme ? item.title__dark__theme : '']"
    >
      {{ job.position }}
    </a>
    <span :class="item.card__brand">{{ job.company }}</span>
    <span :class="item.card__country">{{ job.location }}</span>
  </div>
</template>

<script>
export default {
  name: "JobListItem",
  data() {
    return {
      timeStyle: {
        display: "flex",
        gap: "1.2rem",
        alignItems: "baseline",
      },
      circleStyle: {
        width: 4 + "px",
        height: 4 + "px",
        backgroundColor: "#6E8098",
        borderRadius: "50%",
      },
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
    filteredJobs() {
      return this.$store.state.filteredJobs;
    },
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style scoped module="item" lang="scss">
@import "./../scss/variables";

span {
  display: block;
}

.card {
  position: relative;
  background-color: #fff;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 2em;

  &__time {
    color: $dark-gray;
    margin-bottom: 1.3rem;
    margin-top: 2.4rem;
  }

  &__img {
    width: 5rem;
    height: 5rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(-5rem / 2);
  }

  &__title {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: $very-dark-blue;
    margin-bottom: 1.7rem;

    &:hover {
      color: $dark-gray;
    }
  }

  &__brand {
    color: $dark-gray;
    margin-bottom: 4.4rem;
  }

  &__country {
    color: $violet;
  }
}

.card__dark__theme {
  background-color: $very-dark-blue;
}

.title__dark__theme {
  color: #fff;
}
</style>