<template>
  <div id="app">
    <div class="container">
        <titulo></titulo>
        <button type="button" class="btn btn-primary" @click="showNovoJogo">
            Novo Jogo
        </button>
        <div class="row" v-show="visao == 'novojogo'">
            <div class="col-md-12">
                <novo-jogo></novo-jogo>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-12" v-show="visao === 'tabela'">
                <tabela-clubes></tabela-clubes>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Titulo from './components/Titulo.vue'
import NovoJogo from './components/NovoJogo.vue'
import TabelaClubes from './components/TabelaClubes.vue'
import store from './store.js';

export default {
  name: 'app',
  components: {
    Titulo, NovoJogo, TabelaClubes
  },

  created(){
      store.dispatch('load-times');
  },

  computed: {
      
      visao(){
          return store.state.view;
      }
  },

  methods: {

    showNovoJogo(){
        store.commit('show-time-novojogo');
    },

    ordenar(indice){
        this.$set(this.ordem.orientacao, indice, this.ordem.orientacao[indice] == 'desc' ? 'asc':'desc');
    }

  },

  filters : {
      saldo(time){
          return time.gm - time.gs;
      }
  }

}
</script>