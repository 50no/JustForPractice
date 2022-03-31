import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './Mutations'
import Actions from './Action'
import Getters from './Getters'

Vue.use(Vuex)

const state = {
    userInfo: null,  

}

export default new Vuex.Store({
    state,
    Getters,
    Mutations,
    Actions
})