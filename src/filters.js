import Vue from 'vue'

Vue.filter('ucwords', valor => valor.charAt(0).toUpperCase() + valor.slice(1));