<template>
  <div class="usuario">
      <h2>Usuarios</h2>
      <hr>
        <router-view></router-view>
      <button sucesso @click="inParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
    methods: {
        inParaInicio() {
            // this.$router.push('/')
            //this.$router.push({ path: '/' })
            this.$router.push({ name: 'inicio' })
        }
    },
}
</script>

<style>

</style>