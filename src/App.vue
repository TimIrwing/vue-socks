<template>
  <div id="app">
    <section class="product">
      <div class="product-image">
        <img
          src="./assets/vmSocks-green-onWhite.jpg"
          alt="Socks"
        >
      </div>

      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p>{{ product.desc }}</p>
      </div>
    </section>
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
      image: 'vmSocks-green-onWhite.jpg',
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
