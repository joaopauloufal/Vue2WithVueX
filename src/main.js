import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
//import Time from './time.js'
import './filters.js';

import $ from 'jquery';
import PooperJs from 'popper.js';

window.jQuery = window.$ = $;
window.Pooper = PooperJs;

require('bootstrap');

Vue.config.productionTip = false


new Vue({
  render: h => h(App),

  provide(){

    return {
        
        timesColecao : [

        ],

    }

},

}).$mount('#app')