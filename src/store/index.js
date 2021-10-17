/* eslint-disable */
import { createStore } from "vuex";
import data from "./../data.json";

export default createStore({
  state: {
    darkTheme: false,
    jobs: data,
    filteredJobs: data,
    titleQuery: "",
    locationQuery: "",
    isFullTime: false,
  },
  mutations: {
    SEARCH(state, payload) {
      state.filteredJobs = state.jobs.filter(
        (job) =>
          job.location.toLowerCase().includes(payload.location.toLowerCase()) &&
          job.position.toLowerCase().includes(payload.title.toLowerCase()) &&
          job.contract.toLowerCase().includes(payload.contract)
      );
    },
    changeTheme: (state) => (state.darkTheme = !state.darkTheme),
    changeTitle(state, query) {
      state.titleQuery = query;
    },
    changeLocation(state, query) {
      state.locationQuery = query;
    },
    changeIsFullTime(state) {
      state.isFullTime = !state.isFullTime;
    },
  },
  getters: {
    TITLE(state) {
      return state.titleQuery;
    },
    LOCATION(state) {
      return state.locationQuery;
    },
    isFullTime(state) {
      return state.isFullTime;
    },
  },
});
