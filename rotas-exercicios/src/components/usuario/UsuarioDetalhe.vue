<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong>{{ id }}</p>
      <!-- :to="`/usuario/${id}/editar`" -->
      <router-link tag="button" primario
        :to="{name: 'editarUsuario', params: { id: $route.params.id },
            query: { completo: true, lingua: 'pt' },
            hash: '#rodape' }">
          Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id   //Parametro da rota
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>