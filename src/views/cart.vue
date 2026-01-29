<template>
	<div class="">
		<div class="flex justify-between">
			<h1 class="text-3xl font-bold">Your Cart</h1>
			<h3 class="text-primary cursor-pointer hover:text-green-700" @click="router.push('/products')">
				<i class="bi bi-chevron-left mr-3"></i>Continue Shopping
			</h3>
		</div>
		<div class=" text-center" v-if="cart.count == 0">
			<p class="text-[200px] text-textmuted"><i class="bi bi-cart3"></i></p>
			<p class="text-xl font-medium">Your cart is empty</p>
			<p class="text-textmuted mt-2">Looks like you haven't added anything to your cart yet</p>
			<p class="mt-6"><button @click="router.push('/products')"
					class="px-6 py-2 rounded-lg shadow-lg hover:-translate-y-0.5 bg-primary text-white font-medium cursor-pointer transition duration-300">Brouse
					Products</button></p>
		</div>
		<div class="grid grid-cols-3 gap-6" v-else>

			<div class="col-span-2">
				<div class="rounded-xl bg-bgsecondary shadow-sm p-4 flex gap-4 mb-4 relative"
					v-for="x in cart.cart" :key="x">

					<div class="absolute top-3 right-4 text-textmuted cursor-pointer hover:text-red-500 z-100"
						@click="removeFromCart(x)">
						<i class="bi bi-x-lg"></i>
					</div>

					<div class="overflow-hidden w-25 cursor-pointer bg-imagebg rounded-lg"><img
							:src="x.image"
							class="w-full h-full object-contain hover:scale-110 duration-700">
					</div>

					<div class="flex flex-col justify-between flex-1">

						<div class="">
							<p class="">{{ x.title }}</p>
							<p class="font-bold text-textmuted text-sm"><span
									class="text-primary mr-2 text-lg">${{
										x.price * x.count }}</span>(${{
										x.price }})</p>
						</div>

						<div class="rounded-lg border border-textmuted w-fit p-0">
							<button class="px-2 font-bold text-lg border-r border-textmuted cursor-pointer hover:bg-bgprimary"
								@click="productDecreament(x)"><i
									class="bi bi-dash-lg"></i></button><span
								class="px-4 ">{{
									x.count
								}}</span>
							<button class="px-2 font-bold text-lg border-l border-textmuted cursor-pointer hover:bg-bgprimary"
								@click="x.count++"><i
									class="bi bi-plus-lg"></i></button>
						</div>

					</div>
				</div>

			</div>


			<div class="col bg-bgsecondary p-6 rounded-xl h-fit">
				<h1 class="text-lg font-bold">Order Summery</h1>

				<ul class="grid gap-3 mt-6">
					<li class="flex justify-between">
						<h3 class="text-textmuted">Subtotal</h3>
						<h4 class="font-medium">${{ cart.subtotal.toFixed(2) }}</h4>
					</li>
					<li class="flex justify-between">
						<h3 class="text-textmuted">Shipping</h3>
						<h4 class="font-medium">${{ cart.shipping.toFixed(2) }}</h4>
					</li>
					<li class="flex justify-between">
						<h3 class="text-textmuted">Tax</h3>
						<h4 class="font-medium">${{ cart.tax.toFixed(2) }}</h4>
					</li>
					<li class="my-2">
						<hr class="text-textmuted">
					</li>
					<li class="flex justify-between text-lg font-bold">
						<h3 class="">Total</h3>
						<h4 class="text-primary">${{ cart.total.toFixed(2) }}</h4>
					</li>
					<li class="mt-3">
						<button
							class="bg-bottomnav text-white w-full p-2 font-medium rounded-lg hover:bg-primary curson-pointer">
							Proceed
							to
							Checkout</button>
					</li>
					<li class="text-center text-textmuted text-sm">
						<i class="bi bi-lock mr-1"></i> Secure checkout
					</li>
				</ul>

			</div>

		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { CartStore } from '../stores/cart';

const router = useRouter();
const cart = CartStore();



function removeFromCart(x) {
	cart.removeFromCart(x)
}

function productDecreament(x) {
	if (x.count > 0) x.count--

}
</script>

<style>
</style>