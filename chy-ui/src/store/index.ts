import { createStore } from "vuex";
export default createStore({
  state: {
    activeName:'',
  },
  mutations: {
    changeActive(state,value){
        state.activeName = value;
    },
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
  },
  modules: {}
});
