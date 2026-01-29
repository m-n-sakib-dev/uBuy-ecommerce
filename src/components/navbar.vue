<template>
  <div class="bg-topnavbar h-20 flex justify-between px-6">
    <nav-logo
      class="px-8 pb-4 my-auto bg-linear-to-r from-primary to-blue-600 text-transparent bg-clip-text font-bold text-5xl">uBuy</nav-logo>
    <nav-menu class="">
      <ul class="flex gap-4 my-auto h-full">
        <li class="text-textmuted font-medium cursor-pointer relative hover:text-white  group px-3 my-auto py-2"
          v-for="(value, key) in nav_items" :key="key">
          <span
            class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
          <Router-link :to="value">{{ key }}
            <span class="animate-pulse rounded-full bg-red-500 px-2 pb-0.5 text-white"
              v-if="key == 'Cart' && cart.count > 0">{{
                cart.count }}</span>
            <span class="animate-pulse rounded-full bg-red-500 px-2 pb-0.5 text-white"
              v-if="key == 'Favourite' && favourite.count > 0">{{ favourite.count }}
            </span>
          </Router-link>
        </li>
      </ul>
    </nav-menu>
  </div>
</template>

<script setup>
import { CartStore } from "../stores/cart.js"
import { FavouriteStore } from "../stores/favourite.js"


const cart = CartStore();
const favourite = FavouriteStore();
const nav_items =
{
  Home: "/",
  Products: "/products",
  Cart: "/cart",
  Favourite: "/favourite"
}
  ;
</script>

<style></style>
