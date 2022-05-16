import kaomojiDBResource from "@/services/kaomoji-db-api/kaomojis";
import type { kaomoji } from "@/types/kaomoji";
import { defineStore, type StateTree } from "pinia";

export const kaomojiStore = defineStore("kaomojis", {
    state: () => ({
        kaomojis: <Array<kaomoji>>[],
        loaded: <Array<string>>[],
        first: { chunk: 0, chunkSize: 30 },
        last: { chunk: 0, chunkSize: 30 }, // placeholder
        next: { chunk: 0, chunkSize: 30 }, // placeholder
        max: 150,
    }),
    getters: {},
    actions: {
        async loadNewChunk() {
            // defauls handeling
            const res = await kaomojiDBResource.getKaomojis(
                this.next || { chunk: 0, chunkSize: 30 }
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
                const chunkSize = 40;
                const chunk = this.next.chunk + this.last.chunkSize / chunkSize;
                this.next = { chunk: chunk, chunkSize: chunkSize };
            }
        },
        // a chunk contains 10 entries by default
        async loadChunks(chunks?: number) {
            chunks = chunks || 1;
            for (let i = 0; i < chunks; i++) {
                await this.loadNewChunk();
            }
        },
    },
});

