<template>
  <div id="app">
    <section class="product">
      <div class="product-image">
        <img
          :src="product.imageSrc"
          alt="Socks">
      </div>

      <div class="product-info">
        <h1>
          {{ product.name }}
          <span class="sale" v-show="product.onSale">On Sale!</span>
        </h1>


        <p>
          <span v-show="product.inventory > 10">
            In Stock
          </span>
          <span v-show="product.inventory <= 10 && product.inventory > 0">
            Almost sold out!
          </span>
          <span v-show="product.inventory <= 0">
            Out of Stock
          </span>
        </p>

        <ul>
          <li
            v-for="detail in details"
            :key="detail">
            {{ detail }}
          </li>
        </ul>


        <ul class="buttonList">
          <li v-for="variant in variants"
              :key="variant.id">

            <label class="colorBtn"
                   :aria-label="variant.color">
              <input type="radio"
                     name="color"
                     class="visuallyhidden"
                     :checked="product.color === variant.color"
                     @change="updateProduct(variant)">
              <span class="colorBtn__inside" :style="{'background-color': variant.bgColor}"></span>
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
      details: ['80% cotton', '20% polyester'],
      product: {
        name: 'Socks',
      },
      variants: [
        {
          id: 2234,
          color: 'mint green',
          bgColor: '#359264',
          imageSrc: greenSocks,
          inventory: 6,
          onSale: true,
        },
        {
          id: 2235,
          color: 'dark blue',
          bgColor: '#405267',
          imageSrc: blueSocks,
          inventory: 48,
          onSale: false,
        },
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      cart: [],
    };
  },
  created() {
    this.updateProduct(this.variants[0]);
  },
  methods: {
    updateProduct(variant) {
      this.product = { ...this.product, ...variant };
    },
    addToCart() {
      this.cart.push('');
    },
  },
};
</script>

<style>
    .sale {
      color: #f3f3f3;
      background-color: #F2341B;
      vertical-align: baseline;
      font-size: .8em;
      padding: .3em .4em .1em .4em;
      border-radius: .2em;
      box-sizing: border-box;
    }

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
      cursor: pointer;
      display: block;
      position: relative;
      width: 3em;
      height: 3em;
      border: 1px solid #3336;
      border-radius: .5em;
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

    input[type=radio]:focus ~ .colorBtn__inside::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 145%;
      height: 145%;
      border-radius: 15%;
      box-sizing: border-box;
      border: 3px solid #4fc88c;
    }
    .visuallyhidden {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px; width: 1px;
      margin: -1px; padding: 0; border: 0;
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

    .toCart:disabled {
      background-color: #d8d8d8;
    }

    .product-image,
    .product-info {
      margin-top: 10px;
      width: 50%;
    }
</style>
