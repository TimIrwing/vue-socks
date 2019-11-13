<template>
  <div class="product">
    <img class="product__img" :src="obj.imageSrc" :alt="desc">
    <p class="product__info">{{desc}}</p>
    <button class="closeBtn"
            type="button" @click="$emit('close', obj.id)"
            aria-label="close"></button>
  </div>
</template>

<script>
import { capitalize } from './helpers';

export default {
  name: 'CartItem',
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
};
</script>

<style scoped>
  .product {
    display: flex;
    flex-direction: row;
  }

  .product__img {
    height: 5em;
  }

  .product__info {
    width: max-content;
  }
</style>
