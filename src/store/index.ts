import { createStore } from "vuex";

export default createStore({
  state: {
    form: {},
    show: false,
    date: "",
  },
  getters: {
    show(state) {
      return state.show;
    },
    date(state) {
      return state.date;
    },
  },
  mutations: {
    setShow(state) {
      state.show = !state.show;
    },
    setDate(state, payload) {
      state.date = payload;
    },
  },
  actions: {},
  modules: {},
});
