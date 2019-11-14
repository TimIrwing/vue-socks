<template>
  <div class="product">
    <div class="product__content">
      <img class="product__img" :src="obj.imageSrc" :alt="desc">

      <div class="product__info">
        <p class="product__desc">{{desc}}</p>

        <ul class="sizeList">
          <template v-for="(_, size) in product.selectedSizes">
            <li class="sizeList__item" v-if="product.selectedSizes[size]">
              <label class="sizeList__label" :for="`${obj.id}.${size}`">
                <span class="sizeList__text">{{size}}</span>

                <VueButton type="button"
                           class="sizeList__decrement"
                           aria-label="decrement item quantity"
                           @click="addToSize(size, -1)"/>

                <SizeInput :name="`${obj.id}.${size}`"
                           :id="`${obj.id}.${size}`"
                           min="0" :max="obj.sizes[size] || 0"
                           v-model="product.selectedSizes[size]"
                           @input="format(size)"/>

                <VueButton type="button"
                           class="sizeList__increment"
                           aria-label="increment item quantity"
                           @click="addToSize(size, 1)"/>

                <span class="sizeList__availability">
                  {{obj.sizes[size]}} item<span v-show="obj.sizes[size] > 1">s</span> available
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
    width: 1em;
    height: 1em;
    margin: .2em;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1;
    text-align: center;
    color: #3338;
    background: no-repeat center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 492.004 492.004'%3E%3Cpath fill='%233336' d='M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z'/%3E%3C/svg%3E");
    background-size: 75%;
  }
  .sizeList__decrement {
    transform: rotate(180deg);
  }
  .sizeList__decrement:focus,
  .sizeList__increment:focus {
  }
  .sizeList__decrement:active:not(:disabled)  {
    transform: rotate(180deg) translateX(1px);
  }
  .sizeList__increment:active:not(:disabled)  {
    transform: translateX(1px);
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
