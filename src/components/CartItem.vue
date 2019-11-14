<template>
  <div class="product">
    <div class="product__content">
      <img class="product__img" :src="obj.imageSrc" :alt="desc">

      <div class="product__info">
        <p class="product__desc">{{desc}}</p>

        <ul class="sizeList">
          <template v-for="(_, size) in product.selectedSizes">
            <li :key="size" class="sizeList__item" v-if="product.selectedSizes[size]">
              <label class="sizeList__label" :for="`${obj.id}.${size}`">
                <span class="sizeList__text">{{size}}</span>

                <VueButton type="button"
                           class="sizeList__decrement"
                           aria-label="decrement item quantity"
                           @click="addToSize(size, -1)">
                  <img src="../assets/arrow.svg" alt="arrow facing right" aria-hidden="true">
                </VueButton>

                <SizeInput :name="`${obj.id}.${size}`"
                           :id="`${obj.id}.${size}`"
                           min="0" :max="obj.sizes[size] || 0"
                           v-model="product.selectedSizes[size]"
                           @input="format(size)"/>

                <VueButton type="button"
                           class="sizeList__increment"
                           aria-label="increment item quantity"
                           @click="addToSize(size, 1)">
                  <img src="../assets/arrow.svg" alt="arrow facing right" aria-hidden="true">
                </VueButton>

                <span class="sizeList__availability">
                  {{obj.sizes[size]}} item<span v-show="obj.sizes[size] > 1">s</span> available
                </span>
              </label>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <VueButton class="closeBtn"
            type="button"
            @click="$emit('close', obj.id)"
            aria-label="delete this item from the cart">
      <img src="../assets/trash-bin.svg" alt="trash bin" aria-hidden="true">
    </VueButton>
  </div>
</template>

<script>
import { capitalize } from './helpers';
import SizeInput from './SizeInput.vue';
import VueButton from './VueButton.vue';

export default {
  name: 'CartItem',
  components: { SizeInput, VueButton },
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
      .some(([, val]) => val);

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
        if (typeof sizes[size] === 'string') {
          setTimeout(() => { sizes[size] = limit; }, 0);
        } else {
          sizes[size] = limit;
        }
      }
    },


    addToSize(size, num) {
      this.product.selectedSizes[size] += num;
      this.format(size);
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
    font-size: 1.1em;
  }

  .sizeList__availability {
    margin-left: 1em;
    font-size: .8em;
    font-weight: 600;
    opacity: .75;
  }

  .sizeList__label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .sizeList__item:not(:last-child) {
    margin-bottom: .5em;
  }

  .sizeList__decrement,
  .sizeList__increment {
    width: 2em;
    height: 2em;
    background: none;
  }
  .sizeList__decrement:focus,
  .sizeList__increment:focus {
    box-shadow: 0 4px 0 -2px #3336;
  }
  .sizeList__decrement > img {
    transform: rotate(180deg);
  }
  .sizeList__decrement:active:not(:disabled)  {
    transform: translateX(-2px);
  }
  .sizeList__increment:active:not(:disabled)  {
    transform: translateX(2px);
  }

  .closeBtn {
    position: absolute;
    top: 0; right: 0;
    width: 2.5em;
    height: 2.5em;
    padding: .4em;
    line-height: 1;
    color: #d72c11;
    background: none;
  }
  .closeBtn:focus {
    box-shadow: 0 0 0 1px #d72c11;
  }
</style>
