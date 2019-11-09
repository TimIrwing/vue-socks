<template>
  <div id="app">
    <section class="product">
      <div class="product-image">
        <img
          :src="imageSrc"
          alt="Socks">
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>

        <span v-if="onSale">On Sale!</span>

        <p v-show="inventory > 10">
          In Stock
        </p>
        <p v-show="inventory <= 10 && inventory > 0">
          Almost sold out!
        </p>
        <p v-show="inventory <= 0">
          Out of Stock
        </p>

        <ul>
          <li
            v-for="detail in details"
            :key="detail">
            {{ detail }}
          </li>
        </ul>


        <ul class="buttonList">
          <li v-for="(variant, i) in variants"
              :key="variant.id">

            <label class="colorBtn">
              <input type="radio"
                     name="color"
                     :checked="i === 0"
                     @input="updateProduct(variant)">
              <div class="colorBtn__inside" :style="{backgroundColor: variant.bgColor}"></div>
              <span class="colorBtn__desc">{{ variant.color }}</span>
            </label>
          </li>
        </ul>

        <ul class="buttonList">
          <li
            v-for="size in sizes"
            :key="size">
            <label>
               <input type="radio" name="size">
              {{ size }}
            </label>
          </li>
        </ul>

        <button class="toCart" v-on:click="addToCart">Add to Cart</button>

        <div class="cart">
          <p>Cart ({{cart.length}})</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import greenSocks from './assets/greenSocks.jpg';
import blueSocks from './assets/blueSocks.jpg';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      product: 'Socks',
      inventory: 30,
      imageSrc: greenSocks,
      onSale: true,
      details: ['80% cotton', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          bgColor: '#359264',
          image: greenSocks,
        },
        {
          id: 2235,
          color: 'blue',
          bgColor: '#405267',
          image: blueSocks,
        },
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      cart: [],

    };
  },
  methods: {
    addToCart() {
      this.cart.push('');
    },
    updateProduct(variant) {
      this.imageSrc = variant.image;
    },
  },
};
</script>

<style>
    body {
        font-family: tahoma, sans-serif;
        color:#282828;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #233346;
    }

    .product {
      display: flex;
      flex-flow: wrap;
      padding: 1rem;
    }

    .buttonList {
      padding: 0;
      display: flex;
      list-style: none;
    }

    .buttonList > *:not(:last-child) {
      margin-right: .5em;
    }

    img {
      border: 1px solid #d8d8d8;
      width: 70%;
      margin: 40px;
      box-shadow: 0 .5px 1px #d8d8d8;
    }

    .product-image {
      width: 80%;
    }

    .colorBtn {
      display: block;
      position: relative;
      width: 3em;
      height: 3em;
      border: 1px solid #3336;
      border-radius: .5em;
    }

    .colorBtn__desc {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px; width: 1px;
      margin: -1px; padding: 0; border: 0;
    }

    .colorBtn__inside {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: .25em;
      width: 1.25em;
      height: 1.25em;
    }

    input[type=radio]:checked ~ .colorBtn__inside {
      width: 2.25em;
      height: 2.25em;
    }

    .colorBtn > input[type=radio] {
      visibility: hidden;
    }

    .cart {
         margin-right: 25px;
         float: right;
         border: 1px solid #d8d8d8;
         padding: 5px 20px;
    }

    .toCart {
      margin-top: 30px;
      border: none;
      background-color: #1E95EA;
      color: white;
      height: 40px;
      width: 100px;
      font-size: 14px;
    }

    .toCart__disabled {
      background-color: #d8d8d8;
    }

    .product-image,
    .product-info {
      margin-top: 10px;
      width: 50%;
    }
</style>
