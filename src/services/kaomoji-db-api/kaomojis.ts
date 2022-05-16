import type { kaomoji } from "@/types/kaomoji";
import axios from "./index";

type GetKaomojisRes = {
    status: string;
    message: string;
    total: number;
    count: number;
    offset: number;
    limmit: number;
    next: string;
    kaomojis: Array<kaomoji>;
};

class kaomojiDBSrv {
    async getKaomojis(opts?: {
        chunk?: number;
        chunkSize?: number;
    }): Promise<GetKaomojisRes | undefined> {
        // defauls handeling
        opts = opts || { chunk: 0, chunkSize: 10 };
        opts.chunk = opts.chunk || 0;
        opts.chunkSize = opts.chunkSize || 10;

        const offset: number = opts.chunk * opts.chunkSize;
        const limit: number = offset + opts.chunkSize;

        const options = {
            method: "GET",
            url: "/kaomojis/",
            params: { o: offset, l: limit },
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
                res = await kaomojiDBResource.getKaomojis(opts);
            }, 900);
            return res;
        }
    }
}

const kaomojiDBResource = new kaomojiDBSrv();

export default kaomojiDBResource;

