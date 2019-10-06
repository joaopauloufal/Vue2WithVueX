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

import store from '../store.js';
import Clube from './Clube.vue';


export default {

    name: 'clubes-libertadores',

    components: {
        Clube
    },
    
    computed: {
        timesLibertadores(){
            return store.state.timesLibertadores;
        }
    
    }

}
</script>