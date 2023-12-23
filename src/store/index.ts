import { createStore } from "vuex";

export default createStore({
  state: {
    form: {},
    show: false,
    date: "",
    show_menu: false,
    show_popup: false,
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
    popup(state) {
      return state.show_popup;
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
    setPopup(state) {
      state.show_popup = !state.show_popup;
    },
  },
  actions: {},
  modules: {},
});
