import { LetterFrequency } from "../classes/LetterFrequency";
import { LetterMatch } from "../classes/LetterMatch";

/**
 * Returns the frequency of every letter in a provided text.
 * @param {string} text the text to get the letter frequencies from.
 * @return {LetterFrequency[]} an array with the frequency for every letter.
 */
export function getLetterFrequencies(text: string): LetterFrequency[] {
    return Array.from(text
        .toUpperCase()
        .split("")
        .filter((l: string) => /[a-z]/i.test(l))
        .reduce((p: Map<string, number>, c: string): Map<string, number> => {
            return p.set(c, (p.get(c) || 0) + 1);
        }, new Map<string, number>())
        .entries())
        .map((v: [string, number], i: number, a: Array<[string, number]>): LetterFrequency => {
            i;
            return {
                letter: v[0],
                frequency: v[1] / a.reduce((p: number, c: [string, number]): number => p + c[1], 0),
            }
        })
        .sort((a: LetterFrequency, b: LetterFrequency): number => b.frequency - a.frequency || a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
}

/**
 * Substitutes letters in a text with others letters or replace with question marks.
 * @param {string} text the text to substitute
 * @param {LetterMatch[]} letters the letters to 
 */
export function substitute(text: string, letters: LetterMatch[]): string {
    return text.toUpperCase().split("").map((l: string): string => {
        if(!/[a-z]/i.test(l)) {
            return l;
        }
        return letters.some((lm: LetterMatch): boolean => lm.cipheredLetter === l)
        ? letters.find((lm: LetterMatch): boolean => lm.cipheredLetter === l)!.letter
        : "\x1A";
    }).join("");
}

/**
 * Returns a high number the more a sentence makes sense.
 * @param {string} text the text to check to see if it makes sense.
 * @param {LetterMatch[]} found an array with ciphered letter and what they are
 * @param {LetterMatch[]} toTry an array with ciphered letter and what they could be
 * @param {string[]} dictionnary a list of words in a language
 */
export function makeSense(text: string, found: LetterMatch[], toTry: LetterMatch[], dictionnary: string[]): {match: LetterMatch, sense: number}[] {
    const words: string[] = text.split(/[,\.;: '"\(\)]/).filter((v: string): boolean => Boolean(v));
    return toTry.map((letter: LetterMatch): {match: LetterMatch, sense: number} => {
        return {
            match: letter,
            sense: words.map((w: string): string => substitute(w, found))
                        .map((w: string): number => {
                            const r: RegExp = new RegExp(w.split("\x1A").join("."));
                            return dictionnary.filter((d: string): boolean => {
                                return r.test(d);
                            }).length;
                        })
                        .reduce((p: number, c: number): number => p + c, 0),
        };
    });
}
