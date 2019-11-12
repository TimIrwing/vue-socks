<template>
  <section class="product">
    <div class="product-image">
      <img :src="current.imageSrc"
           alt="Socks">
    </div>

    <div class="product-info">
      <h1>
        {{ product.name }}
        <span class="sale" v-show="current.onSale">On Sale!</span>
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
      <p class="itemsLeft" role="status" aria-live="polite">{{ modelCount }} pieces available</p>

      <button class="toCart" :disabled="!current.sizes[size]">
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
  data() {
    return {
      selected: 0,
      size: '',
    };
  },
  computed: {
    modelCount() {
      const count = this.current.sizes[this.size];
      return count !== undefined ? count : this.inventory;
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
      this.size = '';
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  .product {
    font-size: 1.2em;
    display: flex;
    padding: 2em;

    color: #233346;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
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

  .sale {
    color: #fefefe;
    background-color: #F2341B;
    font-size: .8em;
    font-weight: 400;
    padding: .1em .3em .1em .3em;
    border-radius: .2em;
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
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    width: 3em;
    height: 3em;
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
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  input[type=radio]:checked + .sizeBtn__text {
    background-color: #4fc88c77;
    font-size: 1.3em;
  }

  .visuallyhidden {
    position: absolute;
    display: block;
    overflow: hidden;
    height: 1px; width: 1px;
    clip: rect(0 0 0 0);
    left: -9999px;
    padding: 0; border: 0;
  }

  .itemsLeft {
    margin-left: 1em;
  }

  .toCart {
    margin-top: 30px;
    border: none;
    border-radius: 2px;
    background-color: #4e7891;
    letter-spacing: .05em;
    font-family: inherit;
    color: #fefefe;
    padding: .8em 1.2em;
    font-size: 14px;
  }
  .toCart:focus {
    outline: none;
    box-shadow: 0 0 .3em #222;
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
