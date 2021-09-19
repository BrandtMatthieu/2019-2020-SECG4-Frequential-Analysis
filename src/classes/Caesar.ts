import { Cipher } from "./Cipher";
import { formatKey } from "../utils/key";
import { LetterMatch } from "./LetterMatch";
import { LetterFrequency } from "./LetterFrequency";
import { getLetterFrequencies } from "../utils/words";

/**
 * Class for the Caesar cipher.
 */
export class Caesar implements Cipher {

    /**
     * Encode a message with the Caesar cipher.
     * @param {string} text the text to be ciphered.
     * @param {string} key the key to cipher the message.
     * @returns {string} the ciphered message.
     */
    public static encode (text: string, key: string): [string, number[]] {
        const k: number = formatKey(key, "encoding")[0];
        return [this.shiftWithKey(text, k), [k]];
    }
    /**
     * Decodes a enciphered text
     * @param {string} text the text to decode.
     * @param {string} lang the language the text is in.
     * @param {string?} key the key to decode the enciphered text.
     * @returns {[string, number]} the deciphered message and the key used to decipher it.
     */
    public static decode (text: string, lang: string = "en", key?: string): [string, number[]] {
        if(!Boolean(text.split("").filter((l: string): boolean => /[a-z]/i.test(l)).length)) {
            throw new Error(`Text has to have at least one letter.`);
        }

        if (key) {
            const k: number = formatKey(key, "decoding")[0];
            return [this.shiftWithKey(text, k), [k]];
        }

        // TODO
        /**
         * 1. get frequency of all letters
         * 2. find ciphered letter representing "E" (letter with highest frequency) or letter with highest freq in ./frequencies/*.json
         * 3. Get key by doing difference of "ciphered E" and actual "E"
         * 4. Decode message with key
         * 
         * 
         * Make sure E is the highest frequency letter in cipher text by calling makeSense()
         */
        const letters: LetterMatch[] = [];

        const freq: LetterFrequency[] = getLetterFrequencies(text);
        freq[0]

        return ["Work in progress", [0]];
    }

    /**
     * Shifts the text with the key.
     * @param {string} text the text to be shifted.
     * @param {number} key the amound to be shifted.
     */
    private static shiftWithKey(text: string, key: number): string {
        return text.split("").map((l: string): string => {
            if (!/[a-z]/i.test(l)) return l;
            return l.toLowerCase() === l
                ? String.fromCharCode((((l.charCodeAt(0) - 97) + key) % 26) + 97)
                : String.fromCharCode((((l.charCodeAt(0) - 65) + key) % 26) + 65);
        }).join("");
    }
}
