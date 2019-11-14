<template>
  <div class="cart">
    <VueButton type="button" class="cartBtn" @click="cartOpen = !cartOpen" aria-controls="cart">
      <span class="cartBtn__textContainer">
        <span class="cartBtn__text"
              role="status"
              aria-label="total count"
              aria-live="polite">
          {{totalCount}}
        </span>
      </span>
      <svg aria-label="cart" role="img" class="cartBtn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.1 475.1"><path d="M365.4 402c0 10 3.6 18.7 10.8 25.8a35.2 35.2 0 0025.8 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7 35.2 35.2 0 00-25.8 10.7 35.2 35.2 0 00-10.8 25.8zM469.7 78.5a17.6 17.6 0 00-12.9-5.4H114l-1.3-7.3-1.5-8.4c-.4-2.1-1.1-4.6-2.2-7.6-1-3-2.3-5.3-3.7-7a18.2 18.2 0 00-13.8-6.3H18.3c-5 0-9.3 1.9-12.9 5.5C1.8 45.6 0 49.9 0 54.8S1.8 64 5.4 67.7c3.6 3.6 8 5.4 12.9 5.4h58.2L127 308l-5.8 10.8c-3.5 6.5-6.3 12.1-8.4 17-2.1 4.9-3.2 8.6-3.2 11.3 0 5 1.8 9.2 5.5 12.8 3.6 3.6 7.9 5.5 12.8 5.5H420.3c4.9 0 9.2-1.9 12.8-5.5 3.6-3.6 5.4-7.9 5.4-12.8 0-5-1.8-9.3-5.4-12.9a17.6 17.6 0 00-12.8-5.4H157.6a55.1 55.1 0 006.9-18.3c0-1.9-.3-4-.8-6.2l-1.7-7.6-1.3-6.2 298.1-34.8c4.8-.6 8.7-2.6 11.7-6.1a18 18 0 004.6-12.2V91.4c0-5-1.8-9.3-5.4-12.9zM109.6 402c0 10 3.6 18.7 10.7 25.8a35.2 35.2 0 0025.9 10.7c10 0 18.7-3.5 25.8-10.7 7.2-7.1 10.7-15.7 10.7-25.8s-3.5-18.7-10.7-25.8a35.2 35.2 0 00-25.8-10.7c-10.1 0-18.7 3.5-25.9 10.7a35.2 35.2 0 00-10.7 25.8z"/></svg>
    </VueButton>

    <transition name="appear">
      <form id="cart" class="cartList__container" v-show="cartOpen" @submit.prevent="">
        <ul class="cartList" aria-live="polite" role="region">
          <li v-show="cartEmpty" class="cartList__empty">Cart is empty</li>

          <template v-for="(product, key) in cart">
            <li class="cartList__item"
                :key="key"
                v-if="product.obj !== undefined">
              <CartItem :product="product" @close="$delete(cart, $event)"/>

              <div class="cartList__delimiter"></div>
            </li>
          </template>
        </ul>
        <VueButton v-show="!cartEmpty" class="toCheckout">Proceed to Checkout</VueButton>
      </form>
    </transition>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import VueButton from './VueButton.vue';

export default {
  name: 'Cart',
  components: {
    VueButton,
    CartItem,
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    cartOpen: false,
  }),
  computed: {
    totalCount() {
      let res = 0;

      Object.keys(this.cart).forEach((id) => {
        const sizes = this.cart[id].selectedSizes;
        res += Object.keys(sizes).reduce((acc, key) => acc + Number(sizes[key]), 0);
      });

      return res;
    },

    cartEmpty() {
      return !Object.keys(this.cart).length;
    },
  },
};
</script>

<style scoped>
  .cart {
    position: relative;
  }
  /* Button */
  .cartBtn {
    position: relative;
    width: 4.5em;
    height: 3.5em;
    border: 1px solid #3336;
    border-radius: .5em;
    background-color: #fefefe;
  }

  .cartBtn__icon {
    position: absolute;
    top: 50%; left: 48%;
    transform: translate(-50%, -50%);
    height: 3em;
    fill: #4fc88c;
  }

  .cartBtn__textContainer {
    position: absolute;
    top: 0; right: 0;
    transform: translate(40%, -40%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1em;
    height: 2.1em;
    border-radius: 50%;
    background-color: #4e7891;
  }
  .cartBtn__text {
    color: #fefefe;
  }

  /* List */
  .cartList {
    width: max-content;
    padding: 0;
    margin: 0;
    max-width: 80vw;
    list-style: none;
  }

  .cartList__container {
    position: absolute;
    top: 120%; right: 0;
    z-index: 5;
    padding: 1em;
    border: 1px solid #3336;
    border-radius: .5em;
    background-color: #fefefe;
    box-shadow: 0 12px 4px -10px #3336;
    opacity: 1;

    /* transition  requirement */
    transform-origin: top right;
  }

  .cartList__delimiter {
    height: 1px;
    margin: 1em 0;
    background-image:
        linear-gradient(to right, transparent, #3336 15%, #3336 85%, transparent);
  }

  .cartList__empty {
    width: max-content;
    padding: 0 .5em;
    font-size: 1.2em;
    opacity: .75;
  }

  /* transition */
  .appear-enter,
  .appear-leave-to {
    top: 100%; right: 50%;
    transform: scale(0);
    opacity: 0;
  }
  .appear-enter-active,
  .appear-leave-active{
    transition: .2s ease-in-out;
  }

  .toCheckout {
    width: 80%;
    margin: 0 10% 0 10%;
    padding: .8em 1.2em;
    font-size: 1.1em;
  }
</style>
