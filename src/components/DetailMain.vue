<template>
  <main :class="$style.main">
    <div :class="$style.main__header">
      <div :class="$style.left">
        <div :class="$style.left__time">
          <div :style="timeStyle">
            <div>1w ago</div>
            <div id="circle" :style="circleStyle"></div>
            <div>Part Time</div>
          </div>
        </div>
        <h3 :class="$style.left__title">Senior Software Engineer</h3>
        <span :class="$style.left__country">United Kingdom</span>
      </div>
      <div :class="$style.right">
        <div>
          <a :class="$style.applyButton" href="#">Apply Now</a>
        </div>
      </div>
    </div>

    <div :class="$style.main__description">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna.
      </p>
    </div>

    <div :class="$style.main__requirements">
      <h4 :class="$style.main__requirements__title">Requirements</h4>
      <p>
        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
        dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
        adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
        pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
        vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
        vulputate vel, nisl.
      </p>
      <ul :class="$style.main__requirements__list">
        <li><span>Morbi interdum mollis sapien. Sed</span></li>
        <li>
          <span>
            Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
            risus
          </span>
        </li>
        <li>
          <span>
            Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
            tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          </span>
        </li>
      </ul>
    </div>

    <div :class="$style.main__role">
      <h4 :class="$style.main__role__title">What Will You Do</h4>
      <p>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
      </p>

      <ol :class="$style.main__role__list">
        <li><span>Morbi interdum mollis sapien. Sed</span></li>
        <li>
          <span>
            Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
            risus
          </span>
        </li>
        <li>
          <span>
            Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
            tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          </span>
        </li>
        <li>
          <span>
            Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
            tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
          </span>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
export default {
  name: "DetailMain",
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
    }
  }
};
</script>

<style module lang="scss">
@import "./../scss/variables";
@import "./../scss/mixins";

h3, h4 {
  color: v-bind(mainHeadersColor);
}

.main {
  background-color: v-bind(mainColor);
  font-size: 1.6rem;
  padding: 4rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
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
  &__time {
    color: $dark-gray;
    margin-bottom: 1.1rem;
  }

  &__title {
    font-size: 2.8rem;
    margin-bottom: 1.4rem;
  }

  &__country {
    color: $violet;
    font-size: 1.4rem;
    font-weight: 700;
  }
}

.right {
  .applyButton {
    background-color: $violet;
    color: white;
    font-weight: 700;
    padding: 1.6rem 2.8rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: $light-violet;
    }
  }
}
</style>