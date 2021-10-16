<template>
  <main :class="$style.main">
    <div :class="$style.main__header">
      <div :class="$style.left">
        <div :class="$style.left__time">
          <div :style="timeStyle">
            <div>{{ item.postedAt }}</div>
            <div id="circle" :style="circleStyle"></div>
            <div>{{ item.contract }}</div>
          </div>
        </div>
        <h3 :class="$style.left__title">{{ item.position }}</h3>
        <span :class="$style.left__country">{{ item.location }}</span>
      </div>
      <div :class="$style.right">
        <div :class="$style.btn_container">
          <a :class="$style.applyButton" :href="item.apply" target="_blank">Apply Now</a>
        </div>
      </div>
    </div>

    <div :class="$style.main__description">
      <p>
        {{ item.description }}
      </p>
    </div>

    <div :class="$style.main__requirements">
      <h4 :class="$style.main__requirements__title">Requirements</h4>
      <p>
        {{ item.requirements.content }}
      </p>
      <ul :class="$style.main__requirements__list">
        <li v-for="(el, index) in requirementsItems" :key="index">
          <span>{{ el }}</span>
        </li>
      </ul>
    </div>

    <div :class="$style.main__role">
      <h4 :class="$style.main__role__title">What Will You Do</h4>
      <p>
        {{ item.role.content }}
      </p>

      <ol :class="$style.main__role__list">
        <li v-for="(el, index) in roleItems" :key="index">
          <span>{{ el }}</span>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
export default {
  name: "DetailMain",
  props: {
    item: Object,
  },
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
    mainColor() {
      return this.$store.state.darkTheme ? "#19202D" : "white";
    },
    mainHeadersColor() {
      return this.$store.state.darkTheme ? "white" : "#19202D";
    },
    requirementsItems() {
      return this.item.requirements.items;
    },
    roleItems() {
      return this.item.role.items;
    },
  },
};
</script>

<style module lang="scss">
@import "./../scss/variables";
@import "./../scss/mixins";

h3,
h4 {
  color: v-bind(mainHeadersColor);
}

.main {
  background-color: v-bind(mainColor);
  font-size: 1.6rem;
  padding: 4rem;

  &__header {
    display: flex;
    flex-wrap: wrap;
    // align-items: center;
    // justify-content: space-between;
    margin-bottom: 4rem;

    @include small {
      align-items: center;
      justify-content: space-between;
    } 
  }

  &__description {
    margin-bottom: 4rem;
    color: $dark-gray;
    line-height: 2.6rem;
  }

  &__requirements {
    color: $dark-gray;
    line-height: 2.6rem;
    margin-bottom: 4rem;

    &__title {
      font-size: 2rem;
      margin-bottom: 2.8rem;
    }

    p {
      margin-bottom: 2.4rem;
    }

    &__list {
      li {
        margin-left: 1em;
        > span {
          display: block;
          margin-left: 3.2rem;
        }
      }

      li::marker {
        color: $violet;
      }

      li + li {
        margin-top: 0.8rem;
      }
    }
  }

  &__role {
    color: $dark-gray;
    &__title {
      font-size: 2rem;
      margin-bottom: 2.8rem;
    }

    p {
      line-height: 2.6rem;
      margin-bottom: 2.4rem;
    }

    &__list {
      li {
        margin-left: 1em;

        > span {
          margin-left: 3.2rem;
          display: block;
        }
      }

      li + li {
        margin-top: 0.8rem;
      }

      li::marker {
        color: $violet;
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
  }
}

.left {
  flex: 0 0 100%;
  margin-bottom: 5rem;

  @include small {
    flex: auto;
    margin-bottom: 0;
  }

  &__time {
    color: $dark-gray;
    margin-bottom: 1.1rem;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1.4rem;

    @include small {
      font-size: 2.8rem;
    }
  }

  &__country {
    color: $violet;
    font-size: 1.4rem;
    font-weight: 700;
  }
}

.right {
  flex: 0 0 100%;

  @include small {
    flex: auto;
  }

  .btn_container {
    .applyButton {
      display: block;
      background-color: $violet;
      color: white;
      font-weight: 700;
      padding: 1.6rem 2.8rem;
      border-radius: 0.5rem;
      text-align: center;
  
      // @include small {
      //   display: initial;
      // }
  
      &:hover {
        background-color: $light-violet;
      }
    }
  }

}
</style>