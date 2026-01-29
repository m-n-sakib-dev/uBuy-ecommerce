import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Products from "../views/products.vue";
import ProductsDetails from "../views/product_details.vue";
import Favourite from "../views/favourite.vue";
import Cart from "../views/cart.vue";
import Product_details from "../views/product_details.vue";

const routes = [
        { path: "/", component: Home },
        { path: "/products", component: Products },
        { path: "/products/:product_id", component: ProductsDetails, name: "product_details", props: true },
        { path: "/favourite", component: Favourite },
        { path: "/cart", component: Cart },
];
const router = createRouter({
        history: createWebHistory(),
        routes,
});

export default router;
