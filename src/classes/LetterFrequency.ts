/**
 * Represents a letter frequency.
 */
export interface LetterFrequency {
    /**
     * The letter in the text.
     */
    letter: string;
    /**
     * the frequency of this letter in the text (between 0 and 1).
     */
    frequency: number;
}
