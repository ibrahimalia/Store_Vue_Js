import Vue from "vue";
import Vuex from "vuex";
import Manage  from "./Modules/Manage/index.js";
import Home  from "./Modules/Home/index.js";
import Bar from "./Modules/Bar/index" ;

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Manage,
    Home,
    Bar
  },
});
