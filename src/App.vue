<template>
  <div id="app">
    <nav class="nav-bar"></nav>
    <Product :product="product"/>
  </div>
</template>

<script>
import Product from './components/Product.vue';

import greenSocks from './assets/greenSocks.jpg';
import blueSocks from './assets/blueSocks.jpg';

export default {
  name: 'App',
  components: {
    Product,
  },
  data() {
    return {
      product: {
        name: 'Socks',
        details: ['80% cotton', '20% polyester', 'Unisex'],
        variants: [
          {
            id: 2234,
            colorDesc: 'mint green',
            bgColor: '#359264',
            imageSrc: greenSocks,
            onSale: true,
            sizes: {
              XS: 0, S: 3, M: 7, L: 4, XL: 2,
            },
          },
          {
            id: 2235,
            colorDesc: 'dark blue',
            bgColor: '#405267',
            imageSrc: blueSocks,
            onSale: false,
            sizes: {
              XS: 2, S: 6, M: 15, L: 0, XL: 9,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 30px;
  }
  body {
    background-color: #fefefe;
    font-family: tahoma, sans-serif;
    color:#282828;
    margin: 0;
  }
</style>
