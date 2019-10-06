<template>
  <div id="app">
    <div class="container">
        <titulo></titulo>
        <button type="button" class="btn btn-primary btn-space" @click="showTabela" v-show="visao != 'tabela'">
            Ver Tabela
        </button>
        <button type="button" class="btn btn-primary btn-space" @click="showNovoJogo">
            Novo Jogo
        </button>
        <button type="button" class="btn btn-primary btn-space" @click="showZona">
           Ver Zona
        </button>
        <br>
        <div class="row" v-if="visao == 'novojogo'">
            <div class="col-md-12">
                <novo-jogo></novo-jogo>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-12" v-if="visao === 'tabela'">
                <tabela-clubes></tabela-clubes>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" v-if="visao === 'zona'">
                <clubes-libertadores></clubes-libertadores>
                <clubes-rebaixados></clubes-rebaixados>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Titulo from './components/Titulo.vue'
import NovoJogo from './components/NovoJogo.vue'
import TabelaClubes from './components/TabelaClubes.vue'
import ClubesLibertadores from './components/ClubesLibertadores.vue';
import ClubesRebaixados from './components/ClubesRebaixados.vue';
import store from './store.js';

export default {
  name: 'app',
  components: {
    Titulo, NovoJogo, TabelaClubes,ClubesLibertadores, ClubesRebaixados
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

    showTabela(){
        store.commit('show-time-list');
    },

    showNovoJogo(){
        store.commit('show-time-novojogo');
    },

    showZona(){
        store.commit('show-time-zona');
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

<style scoped>
    .btn-space {
        margin-right: 5px;
    }
</style>