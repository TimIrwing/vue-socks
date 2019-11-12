<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__content">
        <li>
          <h1 class="title">Vue Socks</h1>
        </li>
        <li>
          <cart :cart="cart"/>
        </li>
      </ul>
    </nav>
    <Product :product="product"/>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';

import greenSocks from './assets/greenSocks.jpg';
import blueSocks from './assets/blueSocks.jpg';

export default {
  name: 'App',
  components: {
    Cart,
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
  .nav {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    padding: 1em;
    display: flex;
    justify-content: center;
  }
  .nav__content {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    margin: 0;
    font-weight: 400;
    font-size: 2.5em;
    color: #26455a;
  }

  body {
    background-color: #fefefe;
    font-family: tahoma, sans-serif;
    color:#233346;
    margin: 0;
  }
</style>
