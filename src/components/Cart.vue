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
        const { selectedSizes } = this.cart[id];

        res += Object.keys(selectedSizes).reduce((acc, key) => acc + selectedSizes[key], 0);
      });

      return res;
    },
  },
};
</script>

<style scoped>

</style>
