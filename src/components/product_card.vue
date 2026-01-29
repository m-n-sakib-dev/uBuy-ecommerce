<template>
	<div class="bg-white rounded-2xl w-full h-110 shadow-xl hover:-translate-y-2  hover:shadow-2xl duration-700
		 transition group overflow-hidden relative">

		<div class="animate-pulse absolute bg-red-500 w-fit top-4 right-4 py-1 px-3 text-xs font-bold text-white rounded-xl z-10 
			-rotate-15 group-hover:rotate-none duration-300">
			25% OFF
		</div>

		<div class="overflow-hidden h-[60%] group-hover:bg-amber-50 cursor-pointer"
			@click="router.push({ name: 'product_details', params: { product_id: data.id } })">
			<img :src="data.image" class="w-full h-full object-contain group-hover:scale-110 duration-700">
		</div>

		<div class="p-5 ">

			<div class="flex gap-2">
				<p class="flex-1 font-bold hover:text-primary cursor-pointer line-clamp-2">{{ data.title
				}}</p>
				<div class="">
					<p class="text-primary font-bold text-lg text-end">{{ data.price }}$</p>
					<p class="text-textmuted text-sm text-end line-through">${{
						mainPrice(data.price) }}</p>
				</div>
			</div>

			<div class="flex justify-between text-sm text-[#facc15] mt-3">
				<p><i class="bi bi-star-fill" v-for="n in Math.floor(data.rating.rate)" :key="n"></i><i
						class="bi bi-star-fill"
						v-if="floorRating(data.rating.rate) == 'full'"></i>
					<i class="bi bi-star-half" v-if="floorRating(data.rating.rate) == 'half'"></i>
					<i class="bi bi-star" v-for="n in Math.floor(5 - data.rating.rate)"
						:key="n"></i>
				</p>
				<i class="bi text-textmuted hover:text-red-400 cursor-pointer "
					:class="{ 'bi-heart-fill': isFavourite(data), 'bi-heart': !isFavourite(data) }"
					@click="toggleFavourite(data)"></i>
			</div>

			<button class="bg-bottomnav text-white w-full p-3 mt-2 rounded-xl cursor-pointer group-hover:opacity-60  duration-300"
				@click="addToCart(data)">
				<span class="inline-block group-hover:translate-x-1 duration-500 mr-1">Add to Cart
				</span><span class="opacity-0 group-hover:opacity-100 duration-100"> +</span>
			</button>

		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import { CartStore } from "../stores/cart.js"
import { FavouriteStore } from "../stores/favourite.js"
import { useRouter } from 'vue-router';

import { useToast } from 'vue-toast-notification';

const toast = useToast();

const router = useRouter();
const cart = CartStore();
const favourite = FavouriteStore();
const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

function isFavourite(x) {
	return favourite.isFavourite(x)
}
function mainPrice(price) {
	const mainprice = price / .75
	return mainprice.toFixed(2)
}

function addToCart(product) {
	product.count = 1
	cart.addtocart(product)

}
function toggleFavourite(data) {
	if (!isFavourite(data)) addToFavourite(data)
	else removeFromFavourite(data)
}

function addToFavourite(product) {
	favourite.addtofavourite(product)

}

function removeFromFavourite(x) {
	favourite.removeFromFavourite(x)

}

function floorRating(x) {
	const l = x - Math.floor(x)
	if (l > 0 && l < 0.5) return 'half'
	else if (l >= 0.5) return 'full'
}
</script>

<style>

</style>