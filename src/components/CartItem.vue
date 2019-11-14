<template>
  <div class="product">
    <div class="product__content">
      <img class="product__img" :src="obj.imageSrc" :alt="desc">

      <div class="product__info">
        <p class="product__desc">{{desc}}</p>

        <ul class="sizeList">
          <template v-for="(_, size) in product.selectedSizes">
            <li class="sizeList__item" v-if="notZero(product.selectedSizes[size])">
              <label class="sizeList__label">
                <span class="sizeList__text">{{size}}</span>

                <SizeInput :name="`${obj.id}.${size}`"
                           v-model="product.selectedSizes[size]"
                           min="0" :max="obj.sizes[size] || 0"
                           @blur="format(size)"/>

                <span class="sizeList__availability">
                  {{obj.sizes[size]}} items available
                </span>
              </label>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <button class="closeBtn"
            type="button"
            @click="$emit('close', obj.id)"
            aria-label="delete this item from the cart">✖</button>
  </div>
</template>

<script>
import { capitalize } from './helpers';
import SizeInput from './SizeInput.vue';

export default {
  name: 'CartItem',
  components: { SizeInput },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    obj() {
      return this.product.obj;
    },

    desc() {
      return `${capitalize(this.obj.name)} - ${capitalize(this.obj.colorDesc)}`;
    },
  },
  beforeUpdate() {
    const somethingSelected = Object.entries(this.product.selectedSizes)
      .some(([, val]) => this.notZero(val));

    if (!somethingSelected) {
      this.$emit('close', this.obj.id);
    }
  },
  methods: {
    format(size) {
      const limit = this.obj.sizes[size];
      const sizes = this.product.selectedSizes;

      if (sizes[size] < 0) {
        sizes[size] = 0;
      } else if (sizes[size] > limit) {
        sizes[size] = limit;
      }
    },

    notZero(val) {
      return !!Number(val);
    },
  },
};
</script>

<style scoped>
  .product {
    position: relative;
    display: flex;
  }

  .product__content {
    display: flex;
  }
  @media all and (max-width: 550px) {
    .product__content {
      flex-direction: column;
      align-items: center;
    }
  }

  .product__img {
    margin: 1em;
    width: 8em;
    align-self: flex-start;
    flex-grow: 0;
    border: 1px solid #3336;
    border-radius: .2em;
  }
  @media all and (max-width: 550px) {
    .product__img {
      align-self: inherit;
      width: 60%;
    }
  }

  .product__info {
    flex-grow: 1;
    margin: 0 1em;
  }
  @media all and (max-width: 550px) {
    .product__info {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .product__desc {
    margin: .5em 0;
    font-size: 1.25em;
  }

  .sizeList {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .sizeList__text {
    display: inline-flex;
    justify-content: center;
    width: 3em;
  }

  .sizeList__availability {
    margin-left: 1em;
    font-size: .7em;
    font-weight: 600;
    opacity: .75;
  }

  .sizeList__label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .sizeList__item:not(:last-child) {
    margin-bottom: .2em;
  }

  .closeBtn {
    position: absolute;
    top: 0; right: 0;
    width: 1.25em;
    height: 1.25em;
    font-size: 2em;
    line-height: 1.25em;
    color: #d72c11;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: .2em;
  }
  .closeBtn:focus {
    box-shadow: 0 0 2px 2px #d72c11;
  }
  .closeBtn::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
</style>
