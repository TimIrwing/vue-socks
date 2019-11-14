<template>
  <input type="number"
         class="sizeInput" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'SizeInput',
  props: ['value'],
};
</script>

<style scoped>
  .sizeInput {
    box-sizing: border-box;
    height: 2.25em;
    width: 2.25em;
    border: 1px solid #3336;
    border-radius: .2em;
    text-align: center;
    font-family: inherit;
    background: #fefefe;
    -moz-appearance: textfield;
  }
  .sizeInput::-webkit-inner-spin-button,
  .sizeInput::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>
