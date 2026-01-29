import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useToast } from "vue-toast-notification";

const toast = useToast();
export const FavouriteStore = defineStore("user_favourite", () => {
        const favourite = ref([]);
        const count = computed(() => favourite.value.length);

        function addtofavourite(data) {
                if (!favourite.value.includes(data)) favourite.value.push(data);
                toast.success("Product added to favourite");
        }
        function removeFromFavourite(data) {
                const index = favourite.value.findIndex((p) => p.id === data.id);
                if (index != -1) favourite.value.splice(index, 1);
                toast.error("Product removed from favourite");
        }
        function isFavourite(product) {
                return favourite.value.includes(product);
        }
        return {
                count,
                favourite,
                addtofavourite,
                removeFromFavourite,
                isFavourite,
        };
});
