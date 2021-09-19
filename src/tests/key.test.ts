import { assert } from "chai";
import { formatKey } from "../utils/key";

describe("Key formatting", (): void => {

    describe("encoding", (): void => {
        
        describe("single key", (): void => {
    
            describe("ascii key", (): void => {
    
                it("uppercase key", (): void => {
    
                    assert.deepEqual(formatKey("A", "encoding"), [0]);
                    assert.deepEqual(formatKey("B", "encoding"), [1]);
                    assert.deepEqual(formatKey("C", "encoding"), [2]);
                    assert.deepEqual(formatKey("X", "encoding"), [23]);
                    assert.deepEqual(formatKey("Y", "encoding"), [24]);
                    assert.deepEqual(formatKey("Z", "encoding"), [25]);
    
                });
    
                it("lowercase key", (): void => {
    
                    assert.deepEqual(formatKey("a", "encoding"), [0]);
                    assert.deepEqual(formatKey("b", "encoding"), [1]);
                    assert.deepEqual(formatKey("c", "encoding"), [2]);
                    assert.deepEqual(formatKey("x", "encoding"), [23]);
                    assert.deepEqual(formatKey("y", "encoding"), [24]);
                    assert.deepEqual(formatKey("z", "encoding"), [25]);
    
                });
    
            });
    
            describe("decimal key", (): void => {
    
                it("positive number", (): void => {
    
                    assert.deepEqual(formatKey("0", "encoding"), [0]);
                    assert.deepEqual(formatKey("1", "encoding"), [1]);
                    assert.deepEqual(formatKey("2", "encoding"), [2]);
                    assert.deepEqual(formatKey("23", "encoding"), [23]);
                    assert.deepEqual(formatKey("24", "encoding"), [24]);
                    assert.deepEqual(formatKey("25", "encoding"), [25]);
                    assert.deepEqual(formatKey("26", "encoding"), [0]);
                    assert.deepEqual(formatKey("27", "encoding"), [1]);
                    assert.deepEqual(formatKey("28", "encoding"), [2]);
    
                });
    
                it("negative number", (): void => {
    
                    assert.deepEqual(formatKey("0", "encoding"), [0]);
                    assert.deepEqual(formatKey("-1", "encoding"), [25]);
                    assert.deepEqual(formatKey("-2", "encoding"), [24]);
                    assert.deepEqual(formatKey("-23", "encoding"), [3]);
                    assert.deepEqual(formatKey("-24", "encoding"), [2]);
                    assert.deepEqual(formatKey("-25", "encoding"), [1]);
                    assert.deepEqual(formatKey("-26", "encoding"), [0]);
                    assert.deepEqual(formatKey("-27", "encoding"), [25]);
                    assert.deepEqual(formatKey("-28", "encoding"), [24]);
    
                });
    
            });
    
        });
    
        describe("multiple key", (): void => {
    
            describe("ascii key", (): void => {
    
                it("uppercase key", (): void => {
    
                    assert.deepEqual(formatKey("ABC", "encoding"), [0, 1, 2]);
                    assert.deepEqual(formatKey("BCD", "encoding"), [1, 2, 3]);
                    assert.deepEqual(formatKey("CDE", "encoding"), [2, 3, 4]);
                    assert.deepEqual(formatKey("XYZ", "encoding"), [23, 24, 25]);
                    assert.deepEqual(formatKey("YZA", "encoding"), [24, 25, 0]);
                    assert.deepEqual(formatKey("ZAB", "encoding"), [25, 0, 1]);
    
                });
    
                it("lowercase key", (): void => {
    
                    assert.deepEqual(formatKey("abc", "encoding"), [0, 1, 2]);
                    assert.deepEqual(formatKey("bcd", "encoding"), [1, 2, 3]);
                    assert.deepEqual(formatKey("cde", "encoding"), [2, 3, 4]);
                    assert.deepEqual(formatKey("xyz", "encoding"), [23, 24, 25]);
                    assert.deepEqual(formatKey("yza", "encoding"), [24, 25, 0]);
                    assert.deepEqual(formatKey("zab", "encoding"), [25, 0, 1]);
    
                });
    
            });
    
            describe("decimal key", (): void => {
    
                it("positive number", (): void => {
    
                    assert.deepEqual(formatKey("0,1,2", "encoding"), [0, 1, 2]);
                    assert.deepEqual(formatKey("1,2,3", "encoding"), [1, 2, 3]);
                    assert.deepEqual(formatKey("2,3,4", "encoding"), [2, 3, 4]);
                    assert.deepEqual(formatKey("23,24,25", "encoding"), [23, 24, 25]);
                    assert.deepEqual(formatKey("24,25,26", "encoding"), [24, 25, 0]);
                    assert.deepEqual(formatKey("25,26,27", "encoding"), [25, 0, 1]);
                    assert.deepEqual(formatKey("26,27,28", "encoding"), [0, 1, 2]);
    
                });
    
                it("negative number", (): void => {
    
                    assert.deepEqual(formatKey("0,1,2", "encoding"), [0, 1, 2]);
                    assert.deepEqual(formatKey("-1,0,1", "encoding"), [25, 0, 1]);
                    assert.deepEqual(formatKey("-2,-1,0", "encoding"), [24, 25, 0]);
                    assert.deepEqual(formatKey("-23,-22,-21", "encoding"), [3, 4, 5]);
                    assert.deepEqual(formatKey("-24,-23,-22", "encoding"), [2, 3, 4]);
                    assert.deepEqual(formatKey("-25,-24,-23", "encoding"), [1, 2, 3]);
                    assert.deepEqual(formatKey("-26,-25,-24", "encoding"), [0, 1, 2]);
                    assert.deepEqual(formatKey("-27,-26,-25", "encoding"), [25, 0, 1]);
                    assert.deepEqual(formatKey("-28,-27,-26", "encoding"), [24, 25, 0]);
    
                });
    
            });
    
            it("separators", (): void => {
    
                assert.deepEqual(formatKey("1,2,3", "encoding"), [1, 2, 3]);
                assert.deepEqual(formatKey("1;2;3", "encoding"), [1, 2, 3]);
                assert.deepEqual(formatKey("1 2 3", "encoding"), [1, 2, 3]);
                assert.deepEqual(formatKey("1,-2,-3", "encoding"), [1, 24, 23]);
                assert.deepEqual(formatKey("1-2-3", "encoding"), [1, 24, 23]);
                assert.deepEqual(formatKey("1, 2, 3", "encoding"), [1, 2, 3]);
                assert.deepEqual(formatKey("1.2.3", "encoding"), [1, 2, 3]);
        
                assert.throw((): void => {
                    formatKey("", "encoding");
                });
        
                assert.throw((): void => {
                    formatKey(".", "encoding");
                });
        
                assert.throw((): void => {
                    formatKey("..", "encoding");
                });
        
                assert.throw((): void => {
                    formatKey("...", "encoding");
                });
        
            });

        });
        
    });

    describe("decoding", (): void => {
        
        describe("single key", (): void => {
    
            describe("ascii key", (): void => {
    
                it("uppercase key", (): void => {
    
                    assert.deepEqual(formatKey("A", "decoding"), [0]);
                    assert.deepEqual(formatKey("B", "decoding"), [25]);
                    assert.deepEqual(formatKey("C", "decoding"), [24]);
                    assert.deepEqual(formatKey("X", "decoding"), [3]);
                    assert.deepEqual(formatKey("Y", "decoding"), [2]);
                    assert.deepEqual(formatKey("Z", "decoding"), [1]);
    
                });
    
                it("lowercase key", (): void => {
    
                    assert.deepEqual(formatKey("a", "decoding"), [0]);
                    assert.deepEqual(formatKey("b", "decoding"), [25]);
                    assert.deepEqual(formatKey("c", "decoding"), [24]);
                    assert.deepEqual(formatKey("x", "decoding"), [3]);
                    assert.deepEqual(formatKey("y", "decoding"), [2]);
                    assert.deepEqual(formatKey("z", "decoding"), [1]);
    
                });
    
            });
    
            describe("decimal key", (): void => {
    
                it("positive number", (): void => {
    
                    assert.deepEqual(formatKey("0", "decoding"), [0]);
                    assert.deepEqual(formatKey("1", "decoding"), [25]);
                    assert.deepEqual(formatKey("2", "decoding"), [24]);
                    assert.deepEqual(formatKey("23", "decoding"), [3]);
                    assert.deepEqual(formatKey("24", "decoding"), [2]);
                    assert.deepEqual(formatKey("25", "decoding"), [1]);
                    assert.deepEqual(formatKey("26", "decoding"), [0]);
                    assert.deepEqual(formatKey("27", "decoding"), [25]);
                    assert.deepEqual(formatKey("28", "decoding"), [24]);
    
                });
    
                it("negative number", (): void => {
    
                    assert.deepEqual(formatKey("0", "decoding"), [0]);
                    assert.deepEqual(formatKey("-1", "decoding"), [1]);
                    assert.deepEqual(formatKey("-2", "decoding"), [2]);
                    assert.deepEqual(formatKey("-23", "decoding"), [23]);
                    assert.deepEqual(formatKey("-24", "decoding"), [24]);
                    assert.deepEqual(formatKey("-25", "decoding"), [25]);
                    assert.deepEqual(formatKey("-26", "decoding"), [0]);
                    assert.deepEqual(formatKey("-27", "decoding"), [1]);
                    assert.deepEqual(formatKey("-28", "decoding"), [2]);
    
                });
    
            });
    
        });
    
    
        describe("multiple key", (): void => {
    
            describe("ascii key", (): void => {
    
                it("uppercase key", (): void => {
    
                    assert.deepEqual(formatKey("ABC", "decoding"), [0, 25, 24]);
                    assert.deepEqual(formatKey("BCD", "decoding"), [25, 24, 23]);
                    assert.deepEqual(formatKey("CDE", "decoding"), [24, 23, 22]);
                    assert.deepEqual(formatKey("XYZ", "decoding"), [3, 2, 1]);
                    assert.deepEqual(formatKey("YZA", "decoding"), [2, 1, 0]);
                    assert.deepEqual(formatKey("ZAB", "decoding"), [1, 0, 25]);
    
                });
    
                it("lowercase key", (): void => {
    
                    assert.deepEqual(formatKey("abc", "decoding"), [0, 25, 24]);
                    assert.deepEqual(formatKey("bcd", "decoding"), [25, 24, 23]);
                    assert.deepEqual(formatKey("cde", "decoding"), [24, 23, 22]);
                    assert.deepEqual(formatKey("xyz", "decoding"), [3, 2, 1]);
                    assert.deepEqual(formatKey("yza", "decoding"), [2, 1, 0]);
                    assert.deepEqual(formatKey("zab", "decoding"), [1, 0, 25]);
    
                });
    
            });
    
            describe("decimal key", (): void => {
    
                it("positive number", (): void => {
    
                    assert.deepEqual(formatKey("0,1,2", "decoding"), [0, 25, 24]);
                    assert.deepEqual(formatKey("1,2,3", "decoding"), [25, 24, 23]);
                    assert.deepEqual(formatKey("2,3,4", "decoding"), [24, 23, 22]);
                    assert.deepEqual(formatKey("23,24,25", "decoding"), [3, 2, 1]);
                    assert.deepEqual(formatKey("24,25,26", "decoding"), [2, 1, 0]);
                    assert.deepEqual(formatKey("25,26,27", "decoding"), [1, 0, 25]);
                    assert.deepEqual(formatKey("26,27,28", "decoding"), [0, 25, 24]);
    
                });
    
                it("negative number", (): void => {
    
                    assert.deepEqual(formatKey("0,1,2", "decoding"), [0, 25, 24]);
                    assert.deepEqual(formatKey("-1,0,1", "decoding"), [1, 0, 25]);
                    assert.deepEqual(formatKey("-2,-1,0", "decoding"), [2, 1, 0]);
                    assert.deepEqual(formatKey("-23,-22,-21", "decoding"), [23, 22, 21]);
                    assert.deepEqual(formatKey("-24,-23,-22", "decoding"), [24, 23, 22]);
                    assert.deepEqual(formatKey("-25,-24,-23", "decoding"), [25, 24, 23]);
                    assert.deepEqual(formatKey("-26,-25,-24", "decoding"), [0, 25, 24]);
                    assert.deepEqual(formatKey("-27,-26,-25", "decoding"), [1, 0, 25]);
                    assert.deepEqual(formatKey("-28,-27,-26", "decoding"), [2, 1, 0]);
    
                });
    
            });
    
            it("separators", (): void => {
    
                assert.deepEqual(formatKey("1,2,3", "decoding"), [25, 24, 23]);
                assert.deepEqual(formatKey("1;2;3", "decoding"), [25, 24, 23]);
                assert.deepEqual(formatKey("1 2 3", "decoding"), [25, 24, 23]);
                assert.deepEqual(formatKey("1,-2,-3", "decoding"), [25, 2, 3]);
                assert.deepEqual(formatKey("1-2-3", "decoding"), [25, 24, 23]);
                assert.deepEqual(formatKey("1, 2, 3", "decoding"), [25, 24, 23]);
                assert.deepEqual(formatKey("1.2.3", "decoding"), [25, 24, 23]);
    
            });
    
        });

    });

});
