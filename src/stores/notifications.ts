import { defineStore } from "pinia";
import type { Notification } from "@/types/notification";

export const notificationsStore = defineStore({
    id: "notifications",
    state: () =>
        <
            {
                notifications: Array<Notification>;
                lastId: number;
            }
        >{
            notifications: [],
            lastId: 0,
        },
    getters: {
        setup() {
            this.notifications = [];
        },
    },
    actions: {
        // emit a new notification
        async emit(n: Notification) {
            //limit amount of notifications
            this.lastId++;
            n.id = this.lastId;
            if (this.notifications.length >= 4) {
                let deleted = false;
                for (let i = 0; i < this.notifications.length && !deleted; i++) {
                    if (this.notifications[i].dimisable) {
                        this.notifications.splice(i, 1);
                        deleted = true;
                    }
                }
            }
            // defaults
            if (!n.timeout) {
                n.timeout = 5;
            }
            if (n.dimisable == undefined) {
                n.dimisable = true;
            }
            this.notifications.push(n);
            // delete on timeout
            if (n.timeout !== 0 && n.timeout > 0) {
                const Second = 1000;
                setTimeout(() => {
                    this.drop(n);
                }, n.timeout * Second);
            }
        },
        drop(notification: Notification) {
            this.notifications.splice(this.notifications.indexOf(notification), 1);
        },
        clear() {
            this.notifications = [];
        },
    },
});

