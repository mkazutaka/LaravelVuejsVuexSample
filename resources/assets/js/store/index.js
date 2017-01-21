import Vue from 'vue'
import Vuex from 'vuex'
import sample from './modules/sample.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sample
    },
})