import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    listId:1,
    soon:1,
    i:1,
}
const mutations={
    change(state,x){
        state.listId=x||4;
    },
    reduce(state,y){
     state.soon=y||1;
    },
    suoyin(state,z){
        state.i=z||0;
       }
}

export default new Vuex.Store({
    state,
    mutations
});