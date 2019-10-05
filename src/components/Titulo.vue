<template>
    <div>
        <h1 @click="clique">Campeonato Brasileiro - Série A</h1>
    </div>
</template>

<script>
export default {
    name: 'titulo',
    methods: {

        clique(){
            window.console.log(this.$parent.$parent.param1);
        }

    }
}
</script>