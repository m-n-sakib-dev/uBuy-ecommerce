import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const search = defineStore("search", () => {
        const value = ref("");

        watch(
                value,
                () => {
                        // console.log(searchField.value);
                },
                { deep: true },
        );

        return {
                value,
        };
});
