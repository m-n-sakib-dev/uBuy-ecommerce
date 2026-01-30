<template>
	<div class="" v-if="isLoading">
		<Loading />
	</div>
	<div class="" v-else>
		<div class="flex justify-center">
			<label for="product_ategory_selection" class="text-lg font-medium p-2">Select A
				Category:</label>
			<select name="selected_category" v-model="selected_category" id="product_ategory_selection"
				class=" capitalize mb-6 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary px-4 py-2 border-primary border cursor-pointer">
				<option class="font-medium" value="all">All category</option>
				<option class="font-medium" v-for="x in categories" :value="x" :key="x">
					{{ x }}</option>
			</select>
		</div>
		<div class="grid lg:grid-cols-4 gap-8">
			<Product_card v-for="x in filteredProduct" :key="x.id" :data="x" />
		</div>
	</div>

</template>

<script setup>
import Product_card from '../components/product_card.vue';
import Loading from '../components/loading.vue'
import { onBeforeMount, ref, computed } from 'vue';
import { search } from '../stores/search';

let searchField = search()
let productList = ref([])
let isLoading = ref(true)
let categories = ref([])
let selected_category = ref("all")

let filteredProduct = computed(() => {
	if (searchField.searchField.length > 0 && productList) {
		return productList.filter(product => product.title.toLowerCase().includes(searchField.serchField))
	}
	else if (productList) {
		return productList.filter(product => product.category == selected_category.value || selected_category.value == 'all')
	}

})

filteredProduct = computed(() => {
	if (productList) {
		return productList.filter(product => productFilter(product))
	}

})

function productFilter(product) {
	if (searchField.value.length > 0) {
		if (selected_category.value == 'all') return product.title.toLowerCase().includes(searchField.value)
		else return product.category == selected_category.value && product.title.toLowerCase().includes(searchField.value)
	}
	else {
		return product.category == selected_category.value || selected_category.value == 'all'
	}
}

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