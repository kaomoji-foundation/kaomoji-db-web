import { defineStore } from "pinia";

export const userStore = defineStore({
    id: "user",
    state: () => ({
        logedIn: false,
        user: {
            UID: "",
            username: "",
            picture: "",
        },
    }),
    getters: {
        setup() {
            this.logedIn = false;
        },
    },
    actions: {
        logOff() {
            this.user.UID = "";
        },
    },
});

