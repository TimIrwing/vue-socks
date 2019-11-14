<template>
  <label>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'SquareLabel',
};
</script>

<style scoped>
  label {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 3em;
    height: 3em;
    margin: .5em 0;
    transition: box-shadow .1s;
    border: 1px solid #3336;
    border-radius: 15%;
    cursor: pointer;
  }
  :focus-within {
    border-color: #4fc88c;
    box-shadow: 0 0 0 3px #4fc88c;
  }
</style>
