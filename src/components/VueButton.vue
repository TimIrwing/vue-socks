<template>
  <button class="vueBtn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VueButton',
};
</script>

<style scoped>
  .vueBtn {
    border: none;
    border-radius: 2px;
    padding: 0;
    font-family: inherit;
    font-size: 1em;
    letter-spacing: .05em;
    color: #fefefe;
    background-color: #4e7891;
    cursor: pointer;
    transition: transform .1s, box-shadow .2s, text-shadow .2s;
  }
  .vueBtn:focus {
    outline: none;
    box-shadow: 0 0 6px #222;
  }
  .vueBtn::-moz-focus-inner {
    border: 0;
  }
  .vueBtn:active:not(:disabled) {
    transform: translateY(2px);
  }
  .vueBtn:disabled {
    background-color: #9b9b9b;
  }
</style>
