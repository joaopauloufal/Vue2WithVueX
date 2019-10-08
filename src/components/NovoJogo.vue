<template>
    <div>
        <div>
            <placar :time-casa="timeCasa" :time-fora="timeFora" ref="placar"></placar>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="fimJogo">Fim de Jogo</button>
        </div>
    </div>
</template>

<script>

import store from '../store.js';
import Placar from './Placar.vue';


export default {

    name: 'novo-jogo',

    components: {
        Placar
    },



    mounted(){
        this.criarNovoJogo(this.times);
        
    },

    data(){
        return {
            timeCasa: null,
            timeFora: null
        }
    },

    computed: {

        times(){
            return store.state.times;
        }

    },


    methods: {

        criarNovoJogo(times){
            
            var indiceCasa = Math.floor(Math.random() * 20);
            var indiceFora = Math.floor(Math.random() * 20);

            this.timeCasa = times[indiceCasa];
            this.timeFora = times[indiceFora];

        },

        fimJogo(){

            var golsMarcados = parseInt(this.$refs.placar.golsCasa);
            var golsSofridos = parseInt(this.$refs.placar.golsFora);
            this.timeCasa.fimJogo(this.timeFora, golsMarcados, golsSofridos);
            store.commit('update', this.timeCasa);
            store.commit('update', this.timeFora);
            store.commit('updateTimesLibertadores');
            store.commit('updateTimesRebaixados');
            store.commit('show-time-list');

            
            

        },


    }
    
}
</script>