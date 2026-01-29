<template>
	<div class="" v-if="isLoading">
		<Loading />
	</div>
	<div class="" v-else>
		<div class="flex justify-center">
			<select name="selected_category capitalize" v-model="selected_category" id=""
				class="mx-auto mb-6 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-4 py-2 border-primary border cursor-pointer">
				<option class="capitalize font-medium" value="all">Select a category</option>
				<option class="capitalize font-medium" v-for="x in categories" :value="x" :key="x">
					{{ x[0].toUpperCase() + x.slice(1) }}</option>
			</select>
		</div>
		<div class="grid lg:grid-cols-4 gap-8">
			<Product_card v-for="x in categorizedProduct" :key="x.id" :data="x" />
		</div>
	</div>

</template>

<script setup>
import Product_card from '../components/product_card.vue';
import Loading from '../components/loading.vue'
import { onBeforeMount, ref, computed } from 'vue';

let productList = ref([])
let isLoading = ref(true)
let categories = ref([])
let selected_category = ref("all")

let categorizedProduct = computed(() => {
	if (productList) {
		console.log(selected_category.value);

		return productList.filter(product => product.category == selected_category.value || selected_category.value == 'all')
	}
})

onBeforeMount(() => {
	fetch('https://fakestoreapi.com/products').then(r => r.json()).then(data => {
		productList = data
		data.forEach(element => {
			if (!categories.value.includes(element.category)) {
				categories.value.push(element.category)
			}
		});
		console.log(data);

	}).then(() => {
		isLoading.value = false;
	})
})


</script>

<style>
</style>