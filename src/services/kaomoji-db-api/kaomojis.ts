import type { Kaomoji } from "@/types/kaomoji";
import axios from "./index";

export type GetKaomojisRes = {
    status: string;
    message: string;
    total: number;
    count: number;
    offset: number;
    limmit: number;
    next: string;
    kaomojis: Array<Kaomoji>;
};

class kaomojiDBSrv {
    async getKaomojis(opts?: {
        chunk?: number;
        chunkSize?: number;
        filter?: string;
        sorting?: {
            stringLength?: number;
            categoriesAmount?: number;
            categoriesAlphabetic?: number;
        };
    }): Promise<GetKaomojisRes | undefined> {
        // defauls handeling
        opts = opts || { chunk: 0, chunkSize: 10 };
        opts.chunk = opts.chunk || 0;
        opts.chunkSize = opts.chunkSize || 10;

        const offset: number = opts.chunk * opts.chunkSize;
        const limit: number = offset + opts.chunkSize;

        const query: string = opts.filter || "";

        const options = {
            method: "GET",
            url: "/kaomojis/",
            params: { o: offset, l: limit, query: query, scopes: "categories" },
        };

        let res: GetKaomojisRes | undefined = undefined;
        try {
            const ares = await axios.request(options);
            if (ares.status == 200) {
                res = ares.data;
            }
            return res;
        } catch (error) {
            setTimeout(async () => {
                res = await kaomojiDBService.getKaomojis(opts);
            }, 900);
            return res;
        }
    }
}

const kaomojiDBService = new kaomojiDBSrv();

export default kaomojiDBService;

