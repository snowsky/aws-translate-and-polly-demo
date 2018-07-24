import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      debug: false,
      inputText: "",
      translatedText: ""
    },
    mutations: {},
    actions: {},
    getters: {}
  });
};

export default createStore;
