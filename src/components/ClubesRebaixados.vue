<template>
    <div>
        <h3>Times rebaixados</h3>
        <ul>
            <li v-for="time in timesRebaixados">
                <td>
                    <clube :time="time"></clube>                           
                </td>
            </li> 
        </ul>
    </div>
</template>

<script>

import Clube from './Clube.vue';

export default {

    name: 'clubes-rebaixados',

    components: {
        Clube
    },

    props : ['times'],

    computed: {

        timesRebaixados(){
            return this.times.slice(16, 20);
        },
    }
    
}
</script>