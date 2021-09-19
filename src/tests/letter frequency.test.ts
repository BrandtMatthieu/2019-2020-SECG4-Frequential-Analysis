import { assert } from "chai";
import { getLetterFrequencies } from "../utils/words";

describe("Get Letter Frequency Test", (): void => {

    it("empty string", (): void => {

        assert.deepEqual(getLetterFrequencies(""), []);

    });

    it("one char string uppercase", (): void => {

        assert.deepEqual(getLetterFrequencies("A"), [{letter: "A", frequency: 1}]);
        assert.deepEqual(getLetterFrequencies("B"), [{letter: "B", frequency: 1}]);
        assert.deepEqual(getLetterFrequencies("C"), [{letter: "C", frequency: 1}]);

    });

    it("one char string lowercase", (): void => {

        assert.deepEqual(getLetterFrequencies("a"), [{letter: "A", frequency: 1}]);
        assert.deepEqual(getLetterFrequencies("b"), [{letter: "B", frequency: 1}]);
        assert.deepEqual(getLetterFrequencies("c"), [{letter: "C", frequency: 1}]);

    });

    it("one char not letter", (): void => {

        assert.deepEqual(getLetterFrequencies("."), []);
        assert.deepEqual(getLetterFrequencies(","), []);
        assert.deepEqual(getLetterFrequencies(";"), []);
        assert.deepEqual(getLetterFrequencies(" "), []);

    });

    it("string mixed", (): void => {

        assert.deepEqual(getLetterFrequencies("AaBbCcDdEe"), [
            {letter: "A", frequency: 0.2},
            {letter: "B", frequency: 0.2},
            {letter: "C", frequency: 0.2},
            {letter: "D", frequency: 0.2},
            {letter: "E", frequency: 0.2},
        ]);
        
        assert.deepEqual(getLetterFrequencies("EA Sports, it's in the game."), [
            {letter: "E", frequency: 3/20},
            {letter: "S", frequency: 3/20},
            {letter: "T", frequency: 3/20},
            {letter: "A", frequency: 2/20},
            {letter: "I", frequency: 2/20},
            {letter: "G", frequency: 1/20},
            {letter: "H", frequency: 1/20},
            {letter: "M", frequency: 1/20},
            {letter: "N", frequency: 1/20},
            {letter: "O", frequency: 1/20},
            {letter: "P", frequency: 1/20},
            {letter: "R", frequency: 1/20},
        ]);

    });


});
