<template>
  <div :class="[$style.container, darkTheme ? $style.search__dark__theme : '']">
    <form :class="$style.form" @submit.prevent="submitHandler(title, location)">
      <div :class="[$style.form__group, $style.companies]">
        <div :class="$style.flex">
          <img src="./assets/desktop/icon-search.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            v-model="title"
            :class="darkTheme ? $style.darkInput : ''"
          />
        </div>
      </div>
      <div :class="$style.form__group">
        <div :class="$style.flex">
          <img src="./assets/desktop/icon-location.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by location..."
            v-model="location"
            :class="darkTheme ? $style.darkInput : ''"
          />
        </div>
      </div>
      <div :class="$style.form__group">
        <div :class="$style.flex" style="justify-content: space-between">
          <div @click="changeChecked" :class="$style.checkbox__container">
            <div
              v-show="!isChecked"
              :class="[$style.checkbox, darkTheme ? $style.darkCheckbox : '']"
            ></div>
            <div v-show="isChecked" :class="$style.icon_check_container">
              <img src="./assets/desktop/icon-check.svg" alt="check-icon" />
            </div>
          </div>
          <span
            :class="[$style.fulltime, darkTheme ? $style.darkFulltime : '']"
          >
            Full Time
            <span :class="$style.only_word">Only</span>
          </span>
          <SearchButton />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SearchButton from "./UIComponents/SearchButton.vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "JobSearch",
  components: {
    SearchButton,
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  setup() {
    const store = useStore();
    const isChecked = ref(false);
    const title = ref("");
    const location = ref("");

    function changeChecked() {
      isChecked.value = !isChecked.value;
    }

    function onChange() {
      console.log("Title: ", title.value);
    }

    function submitHandler(query, loc) {
      const contract = isChecked.value ? "full time" : "";
      store.commit("SEARCH", {
        title: query,
        location: loc,
        contract,
      });
    }

    return {
      isChecked,
      changeChecked,
      title,
      location,
      onChange,
      submitHandler,
    };
  },
};
</script>

<style lang="scss" module>
@import "./../scss/variables";
@import "./../scss/mixins";

input {
  border: none;
  outline: none;
  font-size: 1.6rem;
  width: 100%;
  background-color: inherit;
}

input::placeholder {
  color: $midnight;
  opacity: 0.5;
}

.container {
  background-color: $white;
  border-radius: 6px;

  .form {
    display: flex;
    align-items: center;
    height: 8rem;

    &__group {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 2rem;
      width: (100 / 3) * 1%;

      @include laptop {
        padding: 0 3.2rem;
      }
    }

    .form__group + .form__group {
      border-left: 1px solid rgba(110, 128, 152, 0.2);
    }
  }
}

.flex {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.checkbox {
  background-color: $midnight;
  opacity: 0.1;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 3px;
}

.fulltime {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: $very-dark-blue;
}

.checkbox__container {
  cursor: pointer;

  .icon_check_container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $violet;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 3px;
  }

  &:hover {
    .checkbox {
      background-color: $violet;
      opacity: 0.25;
    }
  }
}

.only_word {
  display: none;

  @include laptop {
    display: inline;
  }
}

.search__dark__theme {
  background-color: $very-dark-blue;
}

.darkCheckbox {
  background-color: #FFFFFF;
}

.darkInput {
  color: #fff;
}

.darkInput::placeholder {
  color: #fff;
  opacity: 0.5;
}

.darkFulltime {
  color: #fff;
}
</style>