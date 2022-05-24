import { defineStore } from "pinia";

export const filtersStore = defineStore({
    id: "filters&sorting-home",
    state: () => ({
        queryString: "",
        sorting: {
            stringLength: 0,
            categoriesAmount: 0,
            categoriesAlphabetic: 0,
        },
    }),
    getters: {
        setup() {
            this.queryString = "";
        },
    },
    actions: {
        clear() {
            this.queryString = "";
        },
    },
});

