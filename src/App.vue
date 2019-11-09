<template>
  <div id="app">
    <h1>{{ product.name }}</h1>
    <p>{{ product.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      product: {
        name: 'Socks',
        desc: "Good ol' socks",
      },
    };
  },
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #233346;
    }
</style>
