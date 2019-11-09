<template>
  <div id="app">
    {{ product }}
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      product: 'dsadas',
    };
  },
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
