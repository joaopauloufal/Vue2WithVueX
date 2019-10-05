<template>
    <div>
        <h5 slot="header" class="modal-title">Novo Jogo</h5>
        <form class="form-inline">
            <input type="text" class="form-control col-md-1" v-model="golsCasa">
            <clube :time="timeCasa" invertido="true" v-if="timeCasa"></clube>
            <span>X</span>
            <clube :time="timeFora"  v-if="timeFora"></clube>
            <input type="text" class="form-control col-md-1" v-model="golsFora">                        
        </form>
    </div>
</template>

<script>

import Clube from './Clube.vue';

export default {

    name: 'placar',

    components: {
        Clube
    },

    props: ['timeCasa', 'timeFora'],


    data(){

        return {
            golsCasa : 0,
            golsFora: 0
        }

    },

    
}
</script>