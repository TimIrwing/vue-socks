<template>
  <section class="product">
    <div class="product-image">
      <img :src="current.imageSrc"
           alt="Socks">
    </div>

    <div class="product-info">
      <h2>
        {{ product.name }}
      </h2>

      <h3>
        <span aria-label="price"
              class="price"
              :class="{price_inactive: current.price.sale}">
          {{current.price.default}}
        </span>
        <span aria-label="price on sale"
              class="price" v-show="current.price.sale">
          {{current.price.sale}}
        </span>
        <span class="sale" v-show="current.price.sale">On Sale!</span>
      </h3>

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
        <li v-for="detail in product.details"
            :key="detail">
          {{ detail }}
        </li>
      </ul>

      <ul class="buttonList">
        <li v-for="(variant, index) in product.variants"
            :key="variant.id">
          <label class="squareButton"
                 :aria-label="variant.colorDesc">
            <input type="radio"
                   name="color"
                   class="visuallyhidden"
                   :checked="index === 0"
                   @change="updateProduct(index)">
            <span class="colorBtn__inside" :style="{'background-color': variant.bgColor}"></span>
          </label>
        </li>
      </ul>

      <ul class="buttonList">
        <li v-for="(_, key) in current.sizes"
            :key="key">
          <label class="squareButton squareButton_small">
            <input type="radio"
                   name="size"
                   class="visuallyhidden"
                   @change="size = key"
                   :checked="size === key">
            <span class="sizeBtn__text">{{ key }}</span>
          </label>
        </li>
      </ul>
      <p class="itemsLeft" role="status" aria-live="polite">{{ modelCount }} pairs available</p>

      <button class="toCart"
              :disabled="!current.sizes[size]"
              @click="$emit('add-to-cart', current, size)">
        Add to Cart
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    selected: 0,
    size: null,
  }),
  computed: {
    modelCount() {
      const count = this.current.sizes[this.size];
      return count === undefined ? this.inventory : count;
    },

    current() {
      return this.product.variants[this.selected];
    },

    inventory() {
      return Object.keys(this.current.sizes).reduce((acc, key) => acc + this.current.sizes[key], 0);
    },
  },
  methods: {
    updateProduct(index) {
      this.selected = index;
      this.size = null;
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  .product {
    display: flex;
    padding: 2em;

    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    color: #233346;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @media all and (max-width: 650px) {
    .product {
      flex-direction: column;
    }
  }

  .product-image,
  .product-info {
    width: 50%;
  }
  img {
    display: block;
    width: 66.666%;
    margin: 2.5em auto;
    border: 2px solid #d8d8d8;
    border-radius: 4px;
    box-shadow: 0 10px 4px -8px #d8d8d8;
  }
  @media all and (max-width: 650px) {
    .product-image,
    .product-info {
      width: 100%;
    }
    img {
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }

  .price{
    margin-right: .5em;
  }
  .price_inactive {
    position: relative;
    font-size: .8em;
    font-style: italic;
    color: #798c98;
  }
  .price_inactive::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 110%;
    height: 10%;
    background-color: #798c98;
  }

  .sale {
    padding: .1em .3em .1em .3em;
    border-radius: .2em;
    font-weight: 400;
    color: #fefefe;
    background-color: #F2341B;
  }

  .buttonList {
    display: flex;
    padding: 0;
    margin: 1em 0;
    list-style: none;
  }
  .buttonList > *:not(:last-child) {
    margin-right: 1em;
  }

  .squareButton {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 3em;
    height: 3em;
    transition: box-shadow .1s;
    border: 1px solid #3336;
    border-radius: .5em;
    cursor: pointer;
  }
  .squareButton:focus-within {
    border-color: #4fc88c;
    box-shadow: 0 0 0 3px #4fc88c;
  }

  .squareButton_small {
    width: 2em;
    height: 2em;
  }

  .colorBtn__inside {
    transition: width .1s, height .1s;
    width: 50%;
    height: 50%;
    border-radius: .333em;
  }

  input[type=radio]:checked + .colorBtn__inside {
    width: 75%;
    height: 75%;
  }

  .sizeBtn__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: font-size .1s;
  }

  input[type=radio]:checked + .sizeBtn__text {
    font-size: 1.3em;
    background-color: #4fc88c77;
  }

  .visuallyhidden {
    display: block;
    height: 1px; width: 1px;
    padding: 0; border: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    left: -9999px;
  }

  .itemsLeft {
    margin-left: 1em;
  }

  .toCart {
    margin-top: 30px;
    padding: .8em 1.2em;
    border: none;
    border-radius: 2px;
    font-family: inherit;
    font-size: 14px;
    letter-spacing: .05em;
    color: #fefefe;
    background-color: #4e7891;
    cursor: pointer;
    transition: transform .1s;
  }
  .toCart:focus {
    outline: none;
    box-shadow: 0 0 .3em #222;
  }
  .toCart::-moz-focus-inner {
    border: 0;
  }
  .toCart:active {
    transform: translateY(.2em);
  }
  .toCart:disabled {
    background-color: #9b9b9b;
  }
  @media all and (max-width: 650px) {
    .toCart {
      font-size: 1.5em;
    }
  }
</style>
