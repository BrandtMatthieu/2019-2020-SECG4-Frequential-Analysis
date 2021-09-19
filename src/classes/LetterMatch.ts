/**
 * Represents a match between a letter from the plain text and the cipher text.
 */
export interface LetterMatch {
    /**
     * the letter in plain text.
     */
    letter: string;
    /**
     * The letter in the cipher text.
     */
    cipheredLetter: string;
}
