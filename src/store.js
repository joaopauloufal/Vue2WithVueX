import Vue from 'vue';
import Vuex from 'vuex';
import Time from './time.js'

Vue.use(Vuex);

const state = {
    view: 'tabela',
    times: [
        new Time(1,'palmeiras', require('./assets/palmeiras_60x60.png')),
        new Time(2,'Internacional', require('./assets/internacional_60x60.png')),
        new Time(3,'Flamengo', require('./assets/flamengo_60x60.png')),
        new Time(4,'Atlético-MG', require('./assets/atletico_mg_60x60.png')),
        new Time(5,'Santos', require('./assets/santos_60x60.png')),
        new Time(6,'Botafogo', require('./assets/botafogo_60x60.png')),
        new Time(7,'Atlético-PR', require('./assets/atletico-pr_60x60.png')),
        new Time(8,'Corinthians', require('./assets/corinthians_60x60.png')),
        new Time(9,'Grêmio', require('./assets/gremio_60x60.png')),
        new Time(10,'Fluminense', require('./assets/fluminense_60x60.png')),
        new Time(11,'Bahia', require('./assets/bahia_60x60.png')),
        new Time(12,'Chapecoense', require('./assets/chapecoense_60x60.png')),
        new Time(13,'São Paulo', require('./assets/sao_paulo_60x60.png')),
        new Time(14,'Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Time(15,'Sport', require('./assets/sport_60x60.png')),
        new Time(16,'Ceará', require('./assets/ceara_60x60.png')),
        new Time(17,'Vitória', require('./assets/vitoria_60x60.png')),
        new Time(18,'Vasco', require('./assets/vasco_60x60.png')),
        new Time(19,'América-MG', require('./assets/america_mg_60x60.png')),
        new Time(20,'Paraná', require('./assets/parana_60x60.png')),
    ]
};

const getters = {
    timesLibertadores: state => state.times.slice(0,6),
    timesRebaixados: state => state.times.slice(16,20),
}

const mutations = {

    update(state, time){

        let index = state.times.findIndex(element => time.id == element.id);
        
        if (index != -1){
            state.times[index] = time;
        }

    },

    'show-time-list'(state){
        state.view = 'tabela';
    },

    'show-time-novojogo'(state){
        state.view = 'novojogo';
    }

}


export default new Vuex.Store({
    state,
    getters,
    mutations

});

