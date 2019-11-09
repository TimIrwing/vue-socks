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
        <h1>{{ product }}</h1>

        <p v-if="inventory > 10">
          In Stock
        </p>
        <p v-else-if="inventory <= 10 && inventory > 0">
          Almost sold out!
        </p>
        <p v-else>
          Out of Stock
        </p>
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
      product: 'Socks',
      inventory: 0,
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
