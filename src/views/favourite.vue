<template>
	<div class="">
		<div class="flex justify-between">
			<h1 class="text-xl lg:text-3xl font-bold">❤ Your Favourite</h1>
			<h3 class="text-primary cursor-pointer hover:text-green-700" @click="router.push('/products')">
				<i class="bi bi-chevron-left mr-3"></i>Continue Shopping
			</h3>
		</div>
		<div class=" text-center mt-30" v-if="favourite.count == 0">
			<p class="text-[150px] text-red-500/20"><i class="bi bi-heart-fill"></i></p>
			<p class="text-xl font-medium">Your favourite is empty</p>
			<p class="text-textmuted mt-2">Looks like you haven't added anything to your favourite yet</p>
			<p class="mt-6"><button @click="router.push('/products')"
					class="px-6 py-2 rounded-lg shadow-lg hover:-translate-y-0.5 bg-primary text-white font-medium cursor-pointer transition duration-300">Brouse
					Products</button></p>
		</div>

		<div class="grid lg:grid-cols-4 gap-8 my-8">
			<div class="rounded-xl shadow-lg group hover:shadow-2xl bg-bgsecondary h-90 relative transition duration-500 overflow-hidden"
				v-for="x in favourite.favourite" :key="x">

				<div class="absolute top-3 right-4 text-textmuted cursor-pointer hover:text-red-500 rounded-full bg-white px-2 py-1 shadow-sm z-100"
					@click="removeFromFavourite(x)">
					<i class="bi bi-x-lg"></i>
				</div>

				<div
					class="overflow-hidden h-[70%] bg-imagebg group-hover:bg-white cursor-pointe duration-3000 cursor-pointer">
					<img :src="x.image"
						class="w-full h-full object-contain group-hover:scale-110 duration-700">
				</div>

				<div class="px-4 py-2">
					<p
						class="flex-1 font-medium hover:text-primary cursor-pointer line-clamp-2 min-h-[2lh]">
						{{
							x.title
						}}</p>
					<div class="flex justify-between pt-2">
						<p class="text-primary font-bold text-lg ">{{ x.price }}$</p>
						<button
							class="text-sm px-4 py-1 bg-imagebg rounded-lg cursor-pointer hover:bg-primary/30 hover:text-green-800 duration-200">+
							Add to
							Cart</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { FavouriteStore } from '../stores/favourite';

const router = useRouter();
const favourite = FavouriteStore()

function removeFromFavourite(x) {
	favourite.removeFromFavourite(x)
}
</script>

<style>
</style>