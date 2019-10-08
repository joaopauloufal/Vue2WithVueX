import Vue from 'vue';
import Vuex from 'vuex';
import Time from './time.js'
import VueResource from 'vue-resource';
import _ from 'lodash';


Vue.use(Vuex);
Vue.use(VueResource);

const ordem = {
    
    colunas : ['pontos', 'gm', 'gs', 'saldo'],
    orientacao : ['desc', 'desc', 'asc', 'desc']

    
}


const state = {
    view: 'tabela',
    times: [],
    timesLibertadores: [],
    timesRebaixados: []
};

// const getters = {
//     timesLibertadores: state => _.orderBy(state.times.slice(0,6), ordem.colunas, ordem.orientacao),
//     timesRebaixados: state => _.orderBy(state.times.slice(16,20), ordem.colunas, ordem.orientacao),


// }

const actions = {
    'load-times'(context){
        Vue.http.get('http://localhost:8081/times.json').then(
            response => {
                let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
                context.commit('set-times', times);
            }
        );
    }
}

const mutations = {
    'set-times'(state, times){
        state.times = times;
        state.timesLibertadores = times.slice(0,6);
        state.timesRebaixados = times.slice(16,20);
    },
    update(state, time){

        let index = state.times.findIndex(element => time.id == element.id);
        
        if (index != -1){
            state.times[index] = time;
            
        }

    },

    updateTimesLibertadores(state){

        let timesLibertadores = _.orderBy(state.times, ordem.colunas, ordem.orientacao);
        state.timesLibertadores = timesLibertadores.slice(0,6);
        

    },

    updateTimesRebaixados(state){

        let timesRebaixados = _.orderBy(state.times, ordem.colunas, ordem.orientacao);
        state.timesRebaixados = timesRebaixados.slice(16,20);
        

    },

    'show-time-list'(state){
        state.view = 'tabela';
        
    },

    'show-time-novojogo'(state){
        state.view = 'novojogo';
    },

    'show-time-zona'(state){

        state.view = 'zona';

    }

}


export default new Vuex.Store({
    state,
    //getters,
    mutations,
    actions

});

