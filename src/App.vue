<template>
  <h1> {{ $store.state.count }} </h1>
  <br>
  <!-- Mutations -->
  <button @click="$store.commit('inc')"> Add </button>
  <button @click="$store.commit('desc')"> Sub </button>
  <br>
  <!-- Actions -->
  <button @click="$store.dispatch('callWithDelay')"> Add with delay </button>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
