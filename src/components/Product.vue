<template>
  <section class="product">
    <div class="product-image">
      <img :src="current.imageSrc"
           :alt="desc">
    </div>

    <div class="product-info">
      <h2>
        {{ capitalize(current.name) }}
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
          <SquareLabel :aria-label="variant.colorDesc">
            <input type="radio"
                   name="color"
                   class="visuallyhidden"
                   :checked="index === 0"
                   @change="updateProduct(index)">
            <span class="colorBtn__inside" :style="{'background-color': variant.bgColor}"></span>
          </SquareLabel>
        </li>
      </ul>

      <ul class="buttonList">
        <li v-for="key in product.defaultSizes"
            :key="key">
          <SquareLabel class="squareButton_small">
            <input type="radio"
                   name="size"
                   class="visuallyhidden"
                   @change="size = key"
                   :checked="size === key"
                   :disabled="!current.sizes[key] || current.sizes[key] === 0">
            <span class="sizeBtn__text">{{ key }}</span>
          </SquareLabel>
        </li>
      </ul>
      <p class="itemsLeft" role="status" aria-live="polite">
        {{ modelCount }} pair<span v-show="modelCount > 1">s</span> available
      </p>

      <VueButton class="toCart"
              :disabled="!current.sizes[size]"
              @click="$emit('add-to-cart', current, size)">
        Add to Cart
      </VueButton>
    </div>
  </section>
</template>

<script>
import VueButton from './VueButton.vue';
import SquareLabel from './SquareLabel.vue';
import { capitalize } from './helpers';

export default {
  name: 'Product',
  components: { VueButton, SquareLabel },
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

    desc() {
      return `${capitalize(this.current.name)} - ${capitalize(this.current.colorDesc)}`;
    },
  },
  methods: {
    capitalize(str) {
      return capitalize((str));
    },

    updateProduct(index) {
      this.selected = index;
      this.size = null;
    },
  },
};
</script>

<style scoped>
  .product {
    display: flex;
    justify-content: center;
    padding: 2em;

    font-size: 1.2em;
    color: #233346;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @media all and (max-width: 768px) {
    .product {
      align-items: center;
      flex-direction: column;
    }
  }

  .product-image {
    width: 33.33vw;
    padding-top: 2em;
    padding-right: 2em;
  }
  .product-info {
    padding: 1em;
    width: max-content;
  }
  img {
    display: block;
    width: 100%;
    border: 2px solid #d8d8d8;
    border-radius: 4px;
    box-shadow: 0 10px 4px -8px #d8d8d8;
  }
  @media all and (max-width: 768px) {
    .product-image {
      padding: 1em;
      width: 75%;
    }
  }

  .price {
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
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .buttonList > *:not(:last-child) {
    margin-right: 1em;
  }

  .squareButton_small {
    width: 2em;
    height: 2em;
  }

  .colorBtn__inside {
    transition: width .1s, height .1s;
    width: 50%;
    height: 50%;
    border-radius: 15%;
  }
  input[type=radio]:checked + .colorBtn__inside {
    width: 75%;
    height: 75%;
  }

  .sizeBtn__text {
    line-height: 2em;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: background-color .2s;
  }
  input[type=radio]:checked + .sizeBtn__text {
    background-color: #4fc88c77;
  }
  input[type=radio]:disabled + .sizeBtn__text {
    background-color: #3333;
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
  }
  @media all and (max-width: 650px) {
    .toCart {
      font-size: 1.5em;
    }
  }
</style>
