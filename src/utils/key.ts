/**
 * Formats the given key to cypher or decypher a message.
 * @param {string} key a string with the key. The string can be made of one or multiple letters or number.
 * "ABC" as a key would mean no shift, then a shif of one letter, then a shift of two letters.
 * "5,6,7" would mean a shift of 5, then 6, then 7.
 * @param {"encoding" | "decoding"} mode if the key is supposed to encode or decode
 * @returns {number[]} an array with number representing the shit of each letter.
 */
export function formatKey (key: string, mode: "encoding" | "decoding"): number[] {
    const keyRegexp: RegExp = /(?:[a-zA-Z]|-?[0-9]+)/g;
    const matches = key.match(keyRegexp);
    if (matches === null) {
        throw new Error(`Invalid encoding key "${key}"`);
    }
    return matches.map((k: string): number => {
        const n: number = ((((Number.parseInt(k, 10) * ((mode === "decoding") ? -1 : 1)) % 26) + 26) % 26);
        if (Number.isNaN(n)) {
            return Math.abs(((mode === "decoding") ? -26 : 0) + ((k.toLowerCase() === k) ? (k.charCodeAt(0) - 97) : (k.charCodeAt(0) - 65))) % 26;
        }
        return n;
    });
}
