import { substitute } from "../utils/words";
import { assert } from "chai";

describe("Substitute letters", (): void => {

    it("substitute empty string", (): void => {

        assert.equal(substitute("", []), "");

    });

    it("substitute empty letter match", (): void => {

        assert.equal(substitute("A", []), "\x1A");

    });

    it("substitute on letter string one letter", (): void => {

        assert.equal(substitute("A", [
            {
                cipheredLetter: "A",
                letter: "B",
            },
        ]), "B");
        assert.equal(substitute("A", [
            {
                cipheredLetter: "B",
                letter: "C",
            },
        ]), "\x1A");

    });

    it("substitute multiple letters", (): void => {
        assert.equal(substitute("ABC D", [
            {
                cipheredLetter: "A",
                letter: "B",
            },
            {
                cipheredLetter: "B",
                letter: "C",
            },
            {
                cipheredLetter: "C",
                letter: "D",
            },
        ]), "BCD \x1A");
    });


});
