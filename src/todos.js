
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        list: []
    },
    getters: {
        len: state => state.list.length
    },
    mutations: {
        addNew(state, new_value) {
            state.list.unshift({name: new_value, complete: false});
        },
        finish(state, index) {
            state.list[index].complete = true;
        },
        recover(state, index) {
            state.list[index].complete = false;            
        }
    }
})
