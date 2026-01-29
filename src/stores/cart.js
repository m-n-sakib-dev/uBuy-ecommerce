import { defineStore } from "pinia";
import { computed, onBeforeMount, onBeforeUnmount, ref, watch } from "vue";

export const CartStore = defineStore("user_cart", () => {
        const cart = ref([]);
        const shipping = ref(2.0);
        const count = computed(() => cart.value.length);
        const subtotal = computed(() => cart.value.reduce((total, data) => total + data.price * data.count, 0));
        const tax = computed(() => subtotal.value / 10);
        const total = computed(() => subtotal.value + tax.value + shipping.value);
        function addtocart(data) {
                const index = cart.value.findIndex((p) => p.id === data.id);
                if (index == -1) {
                        cart.value.push(data);
                } else {
                        cart.value[index].count++;
                }
        }

        function removeFromCart(data) {
                const index = cart.value.findIndex((p) => p.id === data.id);
                if (index != -1) {
                        cart.value.splice(index, 1);
                }
        }

        const localData = localStorage.getItem("cart_data");
        if (localData) {
                cart.value = JSON.parse(localData);
        }

        watch(
                cart,
                () => {
                        localStorage.setItem("cart_data", JSON.stringify(cart.value));
                },
                { deep: true },
        );
        return {
                count,
                cart,
                addtocart,
                subtotal,
                shipping,
                tax,
                total,
                removeFromCart,
        };
});
