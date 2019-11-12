<template>
  <div>
    {{cart}}
  </div>
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
};
</script>

<style scoped>

</style>
