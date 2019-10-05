<template>
    <div>
        <h3>Times classificados para a libertadores</h3>
        <ul>
            <li v-for="time in timesLibertadores">
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

    name: 'clubes-libertadores',

    components: {
        Clube
    },

    props : ['times'],

    computed: {
        timesLibertadores(){
            return this.times.slice(0, 6);
        },
     }
    
}
</script>