import kaomojiDBResource from "@/services/kaomoji-db-api/kaomojis";
import type { Kaomoji } from "@/types/kaomoji";
import { defineStore } from "pinia";
import type { GetKaomojisRes } from "../services/kaomoji-db-api/kaomojis";

export const kaomojiStore = defineStore("kaomojis", {
    state: () => ({
        kaomojis: <Array<Kaomoji>>[],
        loaded: <Array<string>>[],
        first: { chunk: 0, chunkSize: 100 },
        last: { chunk: 0, chunkSize: 100 }, // placeholder
        next: { chunk: 0, chunkSize: 100 }, // placeholder
        max: 150,
        fullyLoaded: false,
    }),
    getters: {},
    actions: {
        async loadNewChunk() {
            // defauls handeling
            if (this.fullyLoaded) {
                return null;
            }
            const res = await kaomojiDBResource.getKaomojis(
                this.next || { chunk: 0, chunkSize: 50 }
            );
            if (res) {
                this.max = res.total;
                if (res.kaomojis.length + this.kaomojis.length >= this.max) {
                    const toAdd = this.max - this.kaomojis.length;
                    res.kaomojis = res.kaomojis.slice(0, toAdd);
                }
                res.kaomojis = res.kaomojis.filter((k) => !this.loaded.includes(k.id));
                this.kaomojis.push(...res.kaomojis);
                this.loaded.push(...res.kaomojis.map((s) => s.id));
                this.last = this.next;
                const chunkSize = this.next.chunkSize;
                const chunk = this.next.chunk + this.last.chunkSize / chunkSize;
                this.next = { chunk: chunk, chunkSize: chunkSize };

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

