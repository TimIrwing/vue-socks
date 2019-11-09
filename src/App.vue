<template>
  <div id="app">
    <section class="product">
      <div class="product-image">
        <img
          :src="imageSrc"
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
import greenSocks from './assets/vmSocks-green-onWhite.jpg';

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
      imageSrc: greenSocks,
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
