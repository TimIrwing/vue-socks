<template>
  <p>
    Cart [{{totalCount}}]
  </p>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  computed: {
    totalCount() {
      let res = 0;

      Object.keys(this.cart).forEach((id) => {
        const sizes = this.cart[id].selectedSizes;
        res += Object.keys(sizes).reduce((acc, key) => acc + sizes[key], 0);
      });

      return res;
    },
  },
};
</script>

<style scoped>

</style>
