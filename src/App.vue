<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__content">
        <li>
          <h1 class="title">Vue Socks</h1>
        </li>
        <li>
          <Cart :cart="cart"/>
        </li>
      </ul>
    </nav>
    <Product :product="product" @add-to-cart="pushToCart"/>
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
  data: () => ({
    cart: {},
    product: {
      name: 'Socks',
      details: ['80% cotton', '20% polyester', 'Unisex'],
      variants: [
        {
          id: 2234,
          colorDesc: 'mint green',
          bgColor: '#359264',
          imageSrc: greenSocks,
          price: { default: '$4.99', sale: '$2.99' },
          sizes: {
            XS: 0, S: 3, M: 7, L: 4, XL: 2,
          },
        },
        {
          id: 2235,
          colorDesc: 'dark blue',
          bgColor: '#405267',
          imageSrc: blueSocks,
          price: { default: '$4.99' },
          sizes: {
            XS: 2, S: 6, M: 15, L: 0, XL: 9,
          },
        },
      ],
    },
  }),
  methods: {
    pushToCart(obj, size) {
      const entry = this.cart[obj.id];

      if (entry === undefined) {
        this.$set(this.cart, obj.id, {
          obj, selectedSizes: { [size]: 1 },
        });
      } else {
        this.incrementCart(obj.id, size);
      }
    },

    incrementCart(id, size) {
      const limit = this.cart[id].obj.sizes[size];
      const sizes = this.cart[id].selectedSizes;

      if (!sizes[size]) {
        this.$set(sizes, size, 1);
      } else if (sizes[size] < limit) {
        sizes[size] += 1;
      }
    },
  },
};
</script>

<style>
  .nav {
    display: flex;
    justify-content: center;
    padding: 1em;
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  }
  .nav__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .title {
    margin: 0;
    color: #26455a;
    font-size: 2.5em;
    font-weight: 400;
  }

  body {
    margin: 0;
    font-family: tahoma, sans-serif;
    color:#233346;
    background-color: #fefefe;
  }
</style>
