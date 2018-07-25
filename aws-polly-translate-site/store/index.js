import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      debug: false,
      inputText: "",
      outputText: ""
    },
    mutations: {
      inputText(state, payload) {
        state.inputText = payload;
      },
      translateText(state, payload) {
        state.outputText = payload;
      }
    },
    actions: {},
    getters: {}
  });
};

export default createStore;
