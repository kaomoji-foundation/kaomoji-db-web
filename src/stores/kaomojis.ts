import kaomojiDBService from "@/services/kaomoji-db-api/kaomojis";
import type { Kaomoji } from "@/types/kaomoji";
import { defineStore } from "pinia";
import { filtersStore } from "./filters";

export const kaomojiStore = defineStore("kaomojis", {
    state: () => ({
        kaomojis: <Array<Kaomoji>>[],
        loaded: <Array<string>>[],
        // chunk to start with every time the kaomois array is reset
        startPoint: { chunk: 0, chunkSize: 100, filter: "" },
        last: { chunk: 0, chunkSize: 100, filter: "" }, // placeholder
        next: { chunk: 0, chunkSize: 100, filter: "" }, // placeholder
        max: 150,
        fullyLoaded: false,
    }),
    getters: {},
    actions: {
        async search(filter?: string) {
            const filters = filtersStore();

            const fil = filter;
            setTimeout(() => {
                if (filters.queryString == fil) {
                    this.$reset();
                    this.next.filter = filters.queryString;
                    this.loadNewChunk();
                }
            }, 500);
        },
        async loadNewChunk() {
            // defauls handeling
            if (this.fullyLoaded) {
                return null;
            }

            const res = await kaomojiDBService.getKaomojis(this.next);
            if (res) {
                this.max = res.total;
                /*
                //* Code meant to work for a persistant storage
                //* this is not required here by the time going
                if (res.kaomojis.length + this.kaomojis.length >= this.max) {
                    const toAdd = this.max - this.kaomojis.length;
                    res.kaomojis = res.kaomojis.slice(0, toAdd);
                } 
                res.kaomojis = res.kaomojis.filter((k) => !this.loaded.includes(k.id));
                */
                this.kaomojis.push(...res.kaomojis);
                this.loaded.push(...res.kaomojis.map((s) => s.id));
                // Preapeare data for newx chunk load
                this.last = this.next;
                const chunkSize = this.next.chunkSize;
                const chunk = this.next.chunk + this.last.chunkSize / chunkSize;

                this.next = { chunk: chunk, chunkSize: chunkSize, filter: this.next.filter };

                this.fullyLoaded = res.next == "";
            }
        },
        // a chunk contains 10 entries by default
        async loadChunks(chunks?: number) {
            chunks = chunks || 1;
            for (let i = 0; i < chunks && !this.fullyLoaded; i++) {
                await this.loadNewChunk();
            }
        },
    },
});

