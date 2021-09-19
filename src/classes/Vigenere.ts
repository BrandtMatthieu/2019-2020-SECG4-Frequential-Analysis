import { Cipher } from "./Cipher";
import { formatKey } from "../utils/key";

export class Vigenere implements Cipher {

    public static encode (text: string, key: string): [string, number[]] {
        const k: number[] = formatKey(key, "encoding");
        return [text.split("").map((l: string, index: number): string => {
            if (!/[A-Z]/.test(l)) return l;
            return String.fromCharCode((((l.charCodeAt(0) - 65) + k[index % k.length]) % 26) + 65);
        }).join(""), k];
    }

    public static decode (text: string, lang: string = "en", key?: string): [string, number[]] {
        if(key) {
            const k: number[] = formatKey(key, "decoding");
            return ["Work in progress", k];
        }

        return ["Work in progress", []];
    }
}
