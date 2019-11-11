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
          <span v-show="inventory > 25">
            In Stock
          </span>
          <span v-show="inventory <= 25 && inventory > 0">
            Almost sold out!
          </span>
          <span v-show="inventory <= 0">
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
            v-for="(val, key) in product.sizes"
            :key="key">
            <label>
               <input type="radio" name="size" @change="size = key">
              {{ key }}
            </label>
          </li>
        </ul>

        <button class="toCart"
                v-on:click="addToCart"
                :disabled="!size || product.sizes[size] <= 0">
          Add to Cart
        </button>

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
      size: '',
      variants: [
        {
          id: 2234,
          color: 'mint green',
          bgColor: '#359264',
          imageSrc: greenSocks,
          onSale: true,
          sizes: {
            S: 3, M: 7, L: 4, XL: 2,
          },
        },
        {
          id: 2235,
          color: 'dark blue',
          bgColor: '#405267',
          imageSrc: blueSocks,
          sizes: {
            XS: 2, S: 6, M: 15, XL: 9,
          },
          onSale: false,
        },
      ],
      defaultSizes: {
        XS: 0, S: 0, M: 0, L: 0, XL: 0,
      },
      cart: [],
    };
  },
  computed: {
    inventory() {
      return Object.keys(this.product.sizes).reduce((acc, key) => acc + this.product.sizes[key], 0);
    },
  },
  created() {
    this.updateProduct(this.variants[0]);
  },
  methods: {
    updateProduct(variant) {
      this.product = { ...this.product, ...variant };
      this.product.sizes = { ...this.defaultSizes, ...this.product.sizes };
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
