<template>
  <article class="product-card-component">
    <img
      :src="data.url"
      :alt="data.name"
    >
    <div class="name">
        <h1>{{ data.name }}</h1>

        <div class="shopinfo">
            <h3>$ {{ data.price }} </h3>       
            <h4>Quantity : {{ data.quantity }}</h4>
        </div>

    </div>
    <section class="product-card-component__actions">
      <font-awesome-icon
        :icon="['fas', 'cart-plus']"
        class="cart-icon"
        @click="onAddClick(data)"
      />
    </section>
  </article>
</template>

<script setup>
import { addToCart } from "../stores/cart-store";

defineProps({
    data: Object
})


const onAddClick = (product) => {
    console.log('🧤 add to cart');
    addToCart(product);
}

</script>

<style scoped lang="scss">
@mixin positionBox($z: 0, $t: 0, $l: 0, $r: 0, $b: 0) {
    z-index: $z;
    top: $t;
    right: $r;
    bottom: $b;
    left: $l;

    @if $b != 0 {
        position: fixed;
    } @else {
        position: absolute;
    }
}

.product-card-component img {
    width: 40%;
    border: solid rgb(102, 114, 126);
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
}
.shopinfo{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: relative;
    bottom: -50px;
}
.name {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding: 10px;
    justify-content: center;
    width: 60%;
}

.name h1 {
    margin: 0;
    color: #333;
  display: flex;
  justify-content: center;
  width: 100%;
  align-content: center;
  align-items: center;
  position: relative;
  font-size: 28px;
}

.name h3 {
    margin: 10px 0; 
    color: #666; 
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;
    font-size: 25px;
}

.name h4 {
    margin: 0;
    font-size: 0.9em; 
    color: #999; 
}
.product-card-component {
    display: flex;
    height: 250px;
    margin: 25px 25px;
    width: 40%; 
    position: relative;
    border: solid rgb(90, 90, 90);
}

.product-card-component__actions {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 10px;
    background-color: rgba(0, 31, 197, 0.79);
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
  margin: auto;
    margin-right: auto;
  margin-right: 0;
  height: 30px;
}

.cart-icon {
    color: white;
    opacity: 0.7;
    transition: all 300ms ease-in-out;
    width: 100%;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.3);
        border-color: none;
    }
}

@keyframes productCardAnimation {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1.1);
    }
}
</style>