/* eslint-disable */
import { createStore } from "vuex";
import data from "./../data.json";

export default createStore({
  state: {
    darkTheme: false,
    jobs: data,
    filteredJobs: data,
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
  },
});
