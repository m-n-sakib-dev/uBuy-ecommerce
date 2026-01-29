<template>
	<div class="" v-if="isLoading">{{ isLoading }}</div>
	<div class="grid grid-cols-4 gap-8" v-else>
		<Product_card v-for="x in productList" :key="x.id" :data="x" />
	</div>

</template>

<script setup>
import Product_card from '../components/product_card.vue';
import { onBeforeMount, ref } from 'vue';

let productList = ref([])
let isLoading = ref(true)
onBeforeMount(() => {
	fetch('https://fakestoreapi.com/products').then(r => r.json()).then(data => {
		productList = data
	}).then(() => {
		isLoading.value = false;
	})
})
</script>

<style>
</style>