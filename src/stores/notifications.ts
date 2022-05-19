import { defineStore } from "pinia";
import type { Notification } from "@/types/notification";

export const notificationsStore = defineStore({
    id: "notifications",
    state: () =>
        <{ notifications: Array<Notification> }>{
            notifications: [],
        },
    getters: {
        setup() {
            this.notifications = [];
        },
    },
    actions: {
        // emit a new notification
        emit(n: Notification) {
            if (!n.timeout) {
                n.timeout = 5;
            }
            if (n.dimisable == undefined) {
                n.dimisable = true;
            }
            this.notifications.push(n);
            const timeout = async (seconds: number) => {
                const Second = 1000;
                setTimeout(() => {
                    const i = this.notifications.findIndex((notification) => notification === n);
                    this.notifications.splice(i, 1);
                }, seconds * Second);
            };
            if (n.timeout !== 0 && n.timeout > 0) {
                timeout(n.timeout);
            }
        },
        clear() {
            this.notifications = [];
        },
    },
});

