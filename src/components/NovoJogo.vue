<template>
    <div>
        <button type="button" class="btn btn-primary" @click="criarNovoJogo">
            Novo Jogo
        </button>
        <placar-modal :time-casa="timeCasa" :time-fora="timeFora" ref="modal"></placar-modal>
    </div>
</template>

<script>

import PlacarModal from './PlacarModal.vue'

export default {

    name: 'novo-jogo',

    components: {
        PlacarModal
    },
    

    data(){
        return {
            timeCasa: null,
            timeFora: null,
            times: this.timesColecao
        }
    },
    //props: ['times'],
    inject: ['timesColecao'],

    methods: {

        criarNovoJogo(){
            window.console.log(this.$refs);
            var indiceCasa = Math.floor(Math.random() * 20);
            var indiceFora = Math.floor(Math.random() * 20);

            // var timeCasa = this.$root.times[indiceCasa];
            // var timeFora = this.$root.times[indiceFora];
            //var timeCasa = this.timesColecao[indiceCasa];
            //var timeFora = this.timesColecao[indiceFora];

            this.timeCasa = this.timesColecao[indiceCasa];
            this.timeFora = this.timesColecao[indiceFora];

            var modal = this.$refs.modal;
            window.console.log(modal);
            modal.showModal();

            //this.$emit('novo-jogo', {timeCasa, timeFora});

        },

    }
    
}
</script>