<template>
	<div class="">
		<div class="my-14 flex gap-4">
			<div class="w-2.5 rounded-lg bg-primary animate-bounce"></div>
			<h3 class="text-lg font-medium text-primary">
				Investigate Buy & Repeat</h3>
		</div>

		<div class="grid grid-cols-2 gap-12">
			<div class="">
				<div class="text-6xl font-bold uppercase transition">
					<h1 class="hover:scale-104 duration-500">your trusted</h1>
					<h1
						class="hover:scale-104 duration-500 bg-linear-to-r from-primary to-blue-600 text-transparent bg-clip-text">
						ecommerce</h1>
					<h1 class="hover:scale-104 duration-500">plartform</h1>
				</div>
				<p class="mt-10 text-muted text-xl">Explore our curated collection of categories
					tailored to
					meet
					your
					every need. From fashion and electronics to home essentials, we have it all
					under one
					roof.</p>
				<p class="mt-10 text-muted text-xl">Don't miss out on exclusive deals and seasonal
					discounts
					featured right at the top! Save big with our handpicked offers and daily deals.
				</p>

				<p class="mt-10 text-muted text-xl"><button
						class="rounded-lg bg-primary hover:-translate-y-0.5 py-2 font-medium text-white px-10 mt-4 cursor-pointer"
						@click="router.push('/products')">Shop
						Now</button>
					<button
						class="ml-6 border-2 border-gray-400 text-gray-700  p-2 px-10 mt-2 rounded-xl cursor-pointer hover:-translate-y-0.5 hover:text-primary hover:border-primary font-medium  duration-300">
						Learn More
					</button>
				</p>

				<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
					<div class="flex justify-center"><a href="https://www.google.com"><img
								src="https://readymadeui.com/google-logo.svg"
								alt="google-logo"
								class="h-12 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300"></a>
					</div>
					<div><a href="https://www.facebook.com/share/16Wwm5B7Bj/?mibextid=wwXIfr"><img
								src="https://readymadeui.com/facebook-logo.svg"
								alt="facebook-logo"
								class="h-12 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300"></a>
					</div>
					<div><a href="https://www.linkedin.com/in/sheikh-sahed-hasan-556b77312/"><img
								src="https://readymadeui.com/linkedin-logo.svg"
								alt="linkedin-logo"
								class="h-12 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300"></a>
					</div>
					<div><a href="https://www.pinterest.com"><img
								src="https://readymadeui.com/pinterest-logo.svg"
								alt="pinterest-logo"
								class="h-12 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transform hover:scale-110 transition-all duration-300"></a>
					</div>
				</div>

			</div>

			<div class="relative w-fit h-fit hover:scale-102 transition duration-400 hover:-rotate-1 mt-12">
				<div
					class="absolute -inset-2 bg-linear-to-r from-primary to-blue-600 rounded-lg opacity-70 blur-xl">
				</div>
				<img src="/public/landing_page.png"
					class="rounded-xl shadow-2xl bg-linear-to-r from-primary to-blue-600 relative">
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
</script>

<style>
</style>