import { createStore } from "vuex";

export default createStore({
  state: {
    form: {},
    show: false,
    date: "",
    show_menu: false,
  },
  getters: {
    show(state) {
      return state.show;
    },
    show_menu(state) {
      return state.show_menu;
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
    setMenu(state) {
      state.show_menu = !state.show_menu;
    },
  },
  actions: {},
  modules: {},
});
