<template>
	<div
		class="bg-topnavbar min-h-16 lg:min-h-20 flex justify-between lg:px-6 flex-col lg:flex-row overflow-hidden w-full">
		<div class="flex-1 mt-4 px-8 lg:pb-4 my-auto  text-3xl lg:text-5xl flex justify-between">
			<a href="/"
				class="bg-linear-to-r from-primary to-blue-600 text-transparent bg-clip-text font-bold pb-2">uBuy
			</a>
			<div class="lg:hidden">

				<i class="bi bi-search mr-4 text-2xl text-primary" @click="toggleSearch"></i>

				<div class="absolute top-0 left-0 bg-topnavbar h-full w-full text-lg font-normal px-4 py-2"
					:class="{ 'hidden': searchOpen }">
					<div class="w-full h-full  border-2 border-primary flex justify-between rounded-lg "><input
							type="text"
							class="  placeholder-textmuted text-white focus:outline-0 w-full mx-3 h-fit my-auto"
							placeholder="Type Name of Product.." v-model="searchField.value" id="input"><i
							class="bi bi-x-lg text-textmuted px-3 h-fit my-auto" @click="toggleSearch"></i></div>
				</div>

				<i class="bi bi-list lg:hidden cursor-pointer text-primary" @click="toggleNav"></i>

			</div>
		</div>
		<nav-menu class="">

			<ul class=" lg:flex gap-4 my-auto h-full flex-col lg:flex-row " :class="{ 'hidden': navMenuOpen }">
				<li v-for="(value, key) in nav_items" :key="key" class="my-4 lg:my-auto">

					<Router-link :to="value"
						class="text-textmuted font-medium cursor-pointer relative hover:text-white  group px-3  py-2">{{
							key
						}}
						<span
							class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
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
import { ref } from "vue";
import { CartStore } from "../stores/cart.js"
import { FavouriteStore } from "../stores/favourite.js"
import { search } from "../stores/search.js";


const searchField = search()
const navMenuOpen = ref(true)
const searchOpen = ref(true)
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
function toggleNav() {
	navMenuOpen.value = !navMenuOpen.value
}

function toggleSearch() {
	if (navMenuOpen.value == false) navMenuOpen.value = true
	searchOpen.value = !searchOpen.value
}

</script>

<style></style>
