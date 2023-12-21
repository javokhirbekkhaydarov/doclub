import { createStore } from "vuex";

export default createStore({
  state: {
    form: {},
    show: false,
  },
  getters: {
    show(state) {
      return state.show;
    },
  },
  mutations: {
    setShow(state) {
      state.show = !state.show;
      console.log(state.show, "store");
    },
  },
  actions: {},
  modules: {},
});
