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
            :key="detail"
          >
            {{ detail }}
          </li>
        </ul>


        <ul>
          <li
            v-for="variant in variants"
            :key="variant.id"
          >
            <button type="button">
              {{ variant.color }}
            </button>
          </li>
        </ul>

        <ul>
          <li
            v-for="size in sizes"
            :key="size"
          >
            <button type="button">
              {{ size }}
            </button>
          </li>
        </ul>
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
      inventory: 30,
      imageSrc: greenSocks,
      onSale: true,
      details: ['80% cotton', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
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

    .product {
      display: flex;
      flex-flow: wrap;
      padding: 1rem;
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

    .product-image,
    .product-info {
      margin-top: 10px;
      width: 50%;
    }
</style>
