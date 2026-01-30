<template>
	<div v-if="isLoading">
		<Loading />
	</div>
	<div class="" v-else>
		<h3 class="text-primary cursor-pointer hover:text-green-700 w-fit" @click="router.push('/products')">
			<i class="bi bi-chevron-left mr-3"></i>Back to Products
		</h3>

		<div class="grid lg:grid-cols-2 gap-8 mt-8">
			<div class="">
				<div class="overflow-hidden bg-imagebg rounded-xl shadow-lg h-[60vh] group p-4"><img
						:src="data.image"
						class="w-full h-full object-contain group-hover:scale-102 duration-700">
				</div>

			</div>

			<div class="">
				<p class="text-xl lg:text-3xl font-bold">{{ data.title }}</p>
				<p class="text-[#facc15] mt-3"><i class="bi bi-star-fill"
						v-for="n in Math.floor(data.rating.rate)" :key="n"></i><i
						class="bi bi-star-fill"
						v-if="floorRating(data.rating.rate) == 'full'"></i>
					<i class="bi bi-star-half" v-if="floorRating(data.rating.rate) == 'half'"></i>
					<i class="bi bi-star" v-for="n in Math.floor(5 - data.rating.rate)"
						:key="n"></i>
					<span class="text-textmuted ml-3">({{ data.rating.count }} reviews)</span>
				</p>
				<p class="text-xl lg:text-3xl text-primary font-bold my-8">${{ data.price }} <span
						class="text-textmuted text-sm font-normal">+ Free Shipping</span></p>

				<p class="font-medium text-lg">Description</p>

				<p class="my-6">{{ data.description }}</p>

				<div class="grid grid-cols-2 gap-6">

					<div class="">
						<p class="text-textmuted font-medium">Weight</p>
						<p class="">100g</p>
					</div>
					<div class="">
						<p class="text-textmuted font-medium">Dimensions</p>
						<p class="">10 * 5 * 5 cm</p>
					</div>
					<div class="">
						<p class="text-textmuted font-medium">Material</p>
						<p class="">Premium Quality</p>
					</div>
					<div class="">
						<p class="text-textmuted font-medium">SKU</p>
						<p class="">PRD-4</p>
					</div>
					<button class="bg-bottomnav text-white w-full p-3 mt-2 rounded-xl cursor-pointer hover:bg-primary font-medium  duration-300"
						@click="addToCart(data)">
						<i class="bi bi-cart3"></i> Add to Cart
					</button>
					<button class="border-2 border-gray-400 text-gray-700 w-full p-3 mt-2 rounded-xl cursor-pointer hover:text-primary hover:border-primary font-medium  duration-300"
						@click="toggleFavourite(data)">
						<i class="bi  hover:text-red-400 cursor-pointer "
							:class="{ 'bi-heart-fill': isFavourite(data), 'bi-heart': !isFavourite(data) }"></i>
						Add to Favourite
					</button>

				</div>
				<hr class="my-8 text-textmuted">
				<p class="text-sm text-textmuted font-medium">Share this product</p>
				<div class="flex gap-3 mt-3"><button
						class="w-10 h-10 rounded-full cursor-pointer bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"><svg
							class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
							aria-hidden="true">
							<path fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"></path>
						</svg></button><button
						class="w-10 h-10 rounded-full cursor-pointer bg-blue-100 text-blue-400 flex items-center justify-center hover:bg-blue-200 transition-colors"><svg
							class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
							aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
							</path>
						</svg></button><button
						class="w-10 h-10 rounded-full cursor-pointer bg-pink-100 text-pink-500 flex items-center justify-center hover:bg-pink-200 transition-colors"><svg
							class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
							aria-hidden="true">
							<path fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z"
								clip-rule="evenodd"></path>
						</svg></button></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, onBeforeMount, onMounted, ref } from 'vue';
import { CartStore } from "../stores/cart.js"
import { FavouriteStore } from "../stores/favourite.js"
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import Loading from '../components/loading.vue'
const toast = useToast();
const router = useRouter();
let isLoading = ref(true)
const cart = CartStore();
const favourite = FavouriteStore();
const props = defineProps({
	product_id: {
		type: String,
		required: true,
	}
})
let data = ref([])

onMounted(() => {
	fetch(`https://fakestoreapi.com/products/${props.product_id}`).then(r => r.json()).then(d => {
		data.value = d
	}).then(() => {
		isLoading.value = false;
	})
})

function isFavourite(x) {
	return favourite.isFavourite(x)
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