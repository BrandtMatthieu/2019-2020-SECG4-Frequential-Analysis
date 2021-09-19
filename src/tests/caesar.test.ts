import { assert } from "chai";
import { Caesar } from "../classes/Caesar";

describe("Caesar cipher", (): void => {

    describe("encoding", (): void => {

        describe("single char", (): void => {

            describe("uppercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.encode("A", "0")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "0")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "0")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "0")[0], "Z");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "1")[0], "B");
                            assert.strictEqual(Caesar.encode("B", "1")[0], "C");
                            assert.strictEqual(Caesar.encode("Y", "1")[0], "Z");
                            assert.strictEqual(Caesar.encode("Z", "1")[0], "A");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "2")[0], "C");
                            assert.strictEqual(Caesar.encode("B", "2")[0], "D");
                            assert.strictEqual(Caesar.encode("Y", "2")[0], "A");
                            assert.strictEqual(Caesar.encode("Z", "2")[0], "B");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "25")[0], "Z");
                            assert.strictEqual(Caesar.encode("B", "25")[0], "A");
                            assert.strictEqual(Caesar.encode("Y", "25")[0], "X");
                            assert.strictEqual(Caesar.encode("Z", "25")[0], "Y");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "26")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "26")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "26")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "26")[0], "Z");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.encode("A", "27")[0], "B");
                                assert.strictEqual(Caesar.encode("B", "27")[0], "C");
                                assert.strictEqual(Caesar.encode("Y", "27")[0], "Z");
                                assert.strictEqual(Caesar.encode("Z", "27")[0], "A");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.encode("A", "100")[0], "W");
                                assert.strictEqual(Caesar.encode("B", "100")[0], "X");
                                assert.strictEqual(Caesar.encode("Y", "100")[0], "U");
                                assert.strictEqual(Caesar.encode("Z", "100")[0], "V");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "-0")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "-0")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "-0")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "-0")[0], "Z");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-1")[0], "Z");
                            assert.strictEqual(Caesar.encode("B", "-1")[0], "A");
                            assert.strictEqual(Caesar.encode("Y", "-1")[0], "X");
                            assert.strictEqual(Caesar.encode("Z", "-1")[0], "Y");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-2")[0], "Y");
                            assert.strictEqual(Caesar.encode("B", "-2")[0], "Z");
                            assert.strictEqual(Caesar.encode("Y", "-2")[0], "W");
                            assert.strictEqual(Caesar.encode("Z", "-2")[0], "X");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-25")[0], "B");
                            assert.strictEqual(Caesar.encode("B", "-25")[0], "C");
                            assert.strictEqual(Caesar.encode("Y", "-25")[0], "Z");
                            assert.strictEqual(Caesar.encode("Z", "-25")[0], "A");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-26")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "-26")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "-26")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "-26")[0], "Z");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-27")[0], "Z");
                            assert.strictEqual(Caesar.encode("B", "-27")[0], "A");
                            assert.strictEqual(Caesar.encode("Y", "-27")[0], "X");
                            assert.strictEqual(Caesar.encode("Z", "-27")[0], "Y");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.encode("A", "-100")[0], "E");
                            assert.strictEqual(Caesar.encode("B", "-100")[0], "F");
                            assert.strictEqual(Caesar.encode("Y", "-100")[0], "C");
                            assert.strictEqual(Caesar.encode("Z", "-100")[0], "D");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("A", "A")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "A")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "A")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "A")[0], "Z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "B")[0], "B");
                            assert.strictEqual(Caesar.encode("B", "B")[0], "C");
                            assert.strictEqual(Caesar.encode("Y", "B")[0], "Z");
                            assert.strictEqual(Caesar.encode("Z", "B")[0], "A");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "C")[0], "C");
                            assert.strictEqual(Caesar.encode("B", "C")[0], "D");
                            assert.strictEqual(Caesar.encode("Y", "C")[0], "A");
                            assert.strictEqual(Caesar.encode("Z", "C")[0], "B");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "Z")[0], "Z");
                            assert.strictEqual(Caesar.encode("B", "Z")[0], "A");
                            assert.strictEqual(Caesar.encode("Y", "Z")[0], "X");
                            assert.strictEqual(Caesar.encode("Z", "Z")[0], "Y");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "Y")[0], "Y");
                            assert.strictEqual(Caesar.encode("B", "Y")[0], "Z");
                            assert.strictEqual(Caesar.encode("Y", "Y")[0], "W");
                            assert.strictEqual(Caesar.encode("Z", "Y")[0], "X");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("A", "X")[0], "X");
                            assert.strictEqual(Caesar.encode("B", "X")[0], "Y");
                            assert.strictEqual(Caesar.encode("Y", "X")[0], "V");
                            assert.strictEqual(Caesar.encode("Z", "X")[0], "W");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("A", "a")[0], "A");
                            assert.strictEqual(Caesar.encode("B", "a")[0], "B");
                            assert.strictEqual(Caesar.encode("Y", "a")[0], "Y");
                            assert.strictEqual(Caesar.encode("Z", "a")[0], "Z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "b")[0], "B");
                            assert.strictEqual(Caesar.encode("B", "b")[0], "C");
                            assert.strictEqual(Caesar.encode("Y", "b")[0], "Z");
                            assert.strictEqual(Caesar.encode("Z", "b")[0], "A");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "c")[0], "C");
                            assert.strictEqual(Caesar.encode("B", "c")[0], "D");
                            assert.strictEqual(Caesar.encode("Y", "c")[0], "A");
                            assert.strictEqual(Caesar.encode("Z", "c")[0], "B");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "z")[0], "Z");
                            assert.strictEqual(Caesar.encode("B", "z")[0], "A");
                            assert.strictEqual(Caesar.encode("Y", "z")[0], "X");
                            assert.strictEqual(Caesar.encode("Z", "z")[0], "Y");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("A", "y")[0], "Y");
                            assert.strictEqual(Caesar.encode("B", "y")[0], "Z");
                            assert.strictEqual(Caesar.encode("Y", "y")[0], "W");
                            assert.strictEqual(Caesar.encode("Z", "y")[0], "X");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("A", "x")[0], "X");
                            assert.strictEqual(Caesar.encode("B", "x")[0], "Y");
                            assert.strictEqual(Caesar.encode("Y", "x")[0], "V");
                            assert.strictEqual(Caesar.encode("Z", "x")[0], "W");
                    
                        });
                    
                    });

                });
                
            });

            describe("lowercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.encode("a", "0")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "0")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "0")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "0")[0], "z");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "1")[0], "b");
                            assert.strictEqual(Caesar.encode("b", "1")[0], "c");
                            assert.strictEqual(Caesar.encode("y", "1")[0], "z");
                            assert.strictEqual(Caesar.encode("z", "1")[0], "a");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "2")[0], "c");
                            assert.strictEqual(Caesar.encode("b", "2")[0], "d");
                            assert.strictEqual(Caesar.encode("y", "2")[0], "a");
                            assert.strictEqual(Caesar.encode("z", "2")[0], "b");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "25")[0], "z");
                            assert.strictEqual(Caesar.encode("b", "25")[0], "a");
                            assert.strictEqual(Caesar.encode("y", "25")[0], "x");
                            assert.strictEqual(Caesar.encode("z", "25")[0], "y");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "26")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "26")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "26")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "26")[0], "z");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.encode("a", "27")[0], "b");
                                assert.strictEqual(Caesar.encode("b", "27")[0], "c");
                                assert.strictEqual(Caesar.encode("y", "27")[0], "z");
                                assert.strictEqual(Caesar.encode("z", "27")[0], "a");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.encode("a", "100")[0], "w");
                                assert.strictEqual(Caesar.encode("b", "100")[0], "x");
                                assert.strictEqual(Caesar.encode("y", "100")[0], "u");
                                assert.strictEqual(Caesar.encode("z", "100")[0], "v");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "-0")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "-0")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "-0")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "-0")[0], "z");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-1")[0], "z");
                            assert.strictEqual(Caesar.encode("b", "-1")[0], "a");
                            assert.strictEqual(Caesar.encode("y", "-1")[0], "x");
                            assert.strictEqual(Caesar.encode("z", "-1")[0], "y");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-2")[0], "y");
                            assert.strictEqual(Caesar.encode("b", "-2")[0], "z");
                            assert.strictEqual(Caesar.encode("y", "-2")[0], "w");
                            assert.strictEqual(Caesar.encode("z", "-2")[0], "x");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-25")[0], "b");
                            assert.strictEqual(Caesar.encode("b", "-25")[0], "c");
                            assert.strictEqual(Caesar.encode("y", "-25")[0], "z");
                            assert.strictEqual(Caesar.encode("z", "-25")[0], "a");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-26")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "-26")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "-26")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "-26")[0], "z");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-27")[0], "z");
                            assert.strictEqual(Caesar.encode("b", "-27")[0], "a");
                            assert.strictEqual(Caesar.encode("y", "-27")[0], "x");
                            assert.strictEqual(Caesar.encode("z", "-27")[0], "y");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.encode("a", "-100")[0], "e");
                            assert.strictEqual(Caesar.encode("b", "-100")[0], "f");
                            assert.strictEqual(Caesar.encode("y", "-100")[0], "c");
                            assert.strictEqual(Caesar.encode("z", "-100")[0], "d");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("a", "A")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "A")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "A")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "A")[0], "z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "B")[0], "b");
                            assert.strictEqual(Caesar.encode("b", "B")[0], "c");
                            assert.strictEqual(Caesar.encode("y", "B")[0], "z");
                            assert.strictEqual(Caesar.encode("z", "B")[0], "a");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "C")[0], "c");
                            assert.strictEqual(Caesar.encode("b", "C")[0], "d");
                            assert.strictEqual(Caesar.encode("y", "C")[0], "a");
                            assert.strictEqual(Caesar.encode("z", "C")[0], "b");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "Z")[0], "z");
                            assert.strictEqual(Caesar.encode("b", "Z")[0], "a");
                            assert.strictEqual(Caesar.encode("y", "Z")[0], "x");
                            assert.strictEqual(Caesar.encode("z", "Z")[0], "y");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "Y")[0], "y");
                            assert.strictEqual(Caesar.encode("b", "Y")[0], "z");
                            assert.strictEqual(Caesar.encode("y", "Y")[0], "w");
                            assert.strictEqual(Caesar.encode("z", "Y")[0], "x");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("a", "X")[0], "x");
                            assert.strictEqual(Caesar.encode("b", "X")[0], "y");
                            assert.strictEqual(Caesar.encode("y", "X")[0], "v");
                            assert.strictEqual(Caesar.encode("z", "X")[0], "w");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("a", "a")[0], "a");
                            assert.strictEqual(Caesar.encode("b", "a")[0], "b");
                            assert.strictEqual(Caesar.encode("y", "a")[0], "y");
                            assert.strictEqual(Caesar.encode("z", "a")[0], "z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "b")[0], "b");
                            assert.strictEqual(Caesar.encode("b", "b")[0], "c");
                            assert.strictEqual(Caesar.encode("y", "b")[0], "z");
                            assert.strictEqual(Caesar.encode("z", "b")[0], "a");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "c")[0], "c");
                            assert.strictEqual(Caesar.encode("b", "c")[0], "d");
                            assert.strictEqual(Caesar.encode("y", "c")[0], "a");
                            assert.strictEqual(Caesar.encode("z", "c")[0], "b");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "z")[0], "z");
                            assert.strictEqual(Caesar.encode("b", "z")[0], "a");
                            assert.strictEqual(Caesar.encode("y", "z")[0], "x");
                            assert.strictEqual(Caesar.encode("z", "z")[0], "y");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("a", "y")[0], "y");
                            assert.strictEqual(Caesar.encode("b", "y")[0], "z");
                            assert.strictEqual(Caesar.encode("y", "y")[0], "w");
                            assert.strictEqual(Caesar.encode("z", "y")[0], "x");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("a", "x")[0], "x");
                            assert.strictEqual(Caesar.encode("b", "x")[0], "y");
                            assert.strictEqual(Caesar.encode("y", "x")[0], "v");
                            assert.strictEqual(Caesar.encode("z", "x")[0], "w");
                    
                        });
                    
                    });

                });
                
            });

        });

        describe("multiple char", (): void => {

            describe("uppercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.encode("AB C", "0")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "0")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "0")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "0")[0], ("ZA B"));
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "1")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("BC D", "1")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("YZ A", "1")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("ZA B", "1")[0], ("AB C"));
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "2")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("BC D", "2")[0], ("DE F"));
                            assert.strictEqual(Caesar.encode("YZ A", "2")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("ZA B", "2")[0], ("BC D"));
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "25")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("BC D", "25")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("YZ A", "25")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("ZA B", "25")[0], ("YZ A"));
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "26")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "26")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "26")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "26")[0], ("ZA B"));
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                            assert.strictEqual(Caesar.encode("AB C", "27")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("BC D", "27")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("YZ A", "27")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("ZA B", "27")[0], ("AB C"));
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                            assert.strictEqual(Caesar.encode("AB C", "100")[0], ("WX Y"));
                            assert.strictEqual(Caesar.encode("BC D", "100")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("YZ A", "100")[0], ("UV W"));
                            assert.strictEqual(Caesar.encode("ZA B", "100")[0], ("VW X"));
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "-0")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "-0")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "-0")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "-0")[0], ("ZA B"));
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-1")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("BC D", "-1")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("YZ A", "-1")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("ZA B", "-1")[0], ("YZ A"));
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-2")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("BC D", "-2")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("YZ A", "-2")[0], ("WX Y"));
                            assert.strictEqual(Caesar.encode("ZA B", "-2")[0], ("XY Z"));
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-25")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("BC D", "-25")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("YZ A", "-25")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("ZA B", "-25")[0], ("AB C"));
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-26")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "-26")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "-26")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "-26")[0], ("ZA B"));
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-27")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("BC D", "-27")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("YZ A", "-27")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("ZA B", "-27")[0], ("YZ A"));
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.encode("AB C", "-100")[0], ("EF G"));
                            assert.strictEqual(Caesar.encode("BC D", "-100")[0], ("FG H"));
                            assert.strictEqual(Caesar.encode("YZ A", "-100")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("ZA B", "-100")[0], ("DE F"));
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("AB C", "A")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "A")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "A")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "A")[0], ("ZA B"));
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "B")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("BC D", "B")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("YZ A", "B")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("ZA B", "B")[0], ("AB C"));
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "C")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("BC D", "C")[0], ("DE F"));
                            assert.strictEqual(Caesar.encode("YZ A", "C")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("ZA B", "C")[0], ("BC D"));
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "Z")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("BC D", "Z")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("YZ A", "Z")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("ZA B", "Z")[0], ("YZ A"));
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "Y")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("BC D", "Y")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("YZ A", "Y")[0], ("WX Y"));
                            assert.strictEqual(Caesar.encode("ZA B", "Y")[0], ("XY Z"));
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("AB C", "X")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("BC D", "X")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("YZ A", "X")[0], ("VW X"));
                            assert.strictEqual(Caesar.encode("ZA B", "X")[0], ("WX Y"));
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("AB C", "a")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("BC D", "a")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("YZ A", "a")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("ZA B", "a")[0], ("ZA B"));
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "b")[0], ("BC D"));
                            assert.strictEqual(Caesar.encode("BC D", "b")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("YZ A", "b")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("ZA B", "b")[0], ("AB C"));
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "c")[0], ("CD E"));
                            assert.strictEqual(Caesar.encode("BC D", "c")[0], ("DE F"));
                            assert.strictEqual(Caesar.encode("YZ A", "c")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("ZA B", "c")[0], ("BC D"));
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "z")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("BC D", "z")[0], ("AB C"));
                            assert.strictEqual(Caesar.encode("YZ A", "z")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("ZA B", "z")[0], ("YZ A"));
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("AB C", "y")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("BC D", "y")[0], ("ZA B"));
                            assert.strictEqual(Caesar.encode("YZ A", "y")[0], ("WX Y"));
                            assert.strictEqual(Caesar.encode("ZA B", "y")[0], ("XY Z"));
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("AB C", "x")[0], ("XY Z"));
                            assert.strictEqual(Caesar.encode("BC D", "x")[0], ("YZ A"));
                            assert.strictEqual(Caesar.encode("YZ A", "x")[0], ("VW X"));
                            assert.strictEqual(Caesar.encode("ZA B", "x")[0], ("WX Y"));
                    
                        });
                    
                    });

                });
                
            });

            describe("lowercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.encode("ab c", "0")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "0")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "0")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "0")[0], ("za b"));
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "1")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("bc d", "1")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("yz a", "1")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("za b", "1")[0], ("ab c"));
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "2")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("bc d", "2")[0], ("de f"));
                            assert.strictEqual(Caesar.encode("yz a", "2")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("za b", "2")[0], ("bc d"));
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "25")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("bc d", "25")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("yz a", "25")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("za b", "25")[0], ("yz a"));
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "26")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "26")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "26")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "26")[0], ("za b"));
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.encode("ab c", "27")[0], ("bc d"));
                                assert.strictEqual(Caesar.encode("bc d", "27")[0], ("cd e"));
                                assert.strictEqual(Caesar.encode("yz a", "27")[0], ("za b"));
                                assert.strictEqual(Caesar.encode("za b", "27")[0], ("ab c"));
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.encode("ab c", "100")[0], ("wx y"));
                                assert.strictEqual(Caesar.encode("bc d", "100")[0], ("xy z"));
                                assert.strictEqual(Caesar.encode("yz a", "100")[0], ("uv w"));
                                assert.strictEqual(Caesar.encode("za b", "100")[0], ("vw x"));
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "-0")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "-0")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "-0")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "-0")[0], ("za b"));
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-1")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("bc d", "-1")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("yz a", "-1")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("za b", "-1")[0], ("yz a"));
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-2")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("bc d", "-2")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("yz a", "-2")[0], ("wx y"));
                            assert.strictEqual(Caesar.encode("za b", "-2")[0], ("xy z"));
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-25")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("bc d", "-25")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("yz a", "-25")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("za b", "-25")[0], ("ab c"));
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-26")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "-26")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "-26")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "-26")[0], ("za b"));
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-27")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("bc d", "-27")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("yz a", "-27")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("za b", "-27")[0], ("yz a"));
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.encode("ab c", "-100")[0], ("ef g"));
                            assert.strictEqual(Caesar.encode("bc d", "-100")[0], ("fg h"));
                            assert.strictEqual(Caesar.encode("yz a", "-100")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("za b", "-100")[0], ("de f"));
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("ab c", "A")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "A")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "A")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "A")[0], ("za b"));
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "B")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("bc d", "B")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("yz a", "B")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("za b", "B")[0], ("ab c"));
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "C")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("bc d", "C")[0], ("de f"));
                            assert.strictEqual(Caesar.encode("yz a", "C")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("za b", "C")[0], ("bc d"));
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "Z")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("bc d", "Z")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("yz a", "Z")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("za b", "Z")[0], ("yz a"));
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "Y")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("bc d", "Y")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("yz a", "Y")[0], ("wx y"));
                            assert.strictEqual(Caesar.encode("za b", "Y")[0], ("xy z"));
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("ab c", "X")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("bc d", "X")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("yz a", "X")[0], ("vw x"));
                            assert.strictEqual(Caesar.encode("za b", "X")[0], ("wx y"));
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.encode("ab c", "a")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("bc d", "a")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("yz a", "a")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("za b", "a")[0], ("za b"));
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "b")[0], ("bc d"));
                            assert.strictEqual(Caesar.encode("bc d", "b")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("yz a", "b")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("za b", "b")[0], ("ab c"));
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "c")[0], ("cd e"));
                            assert.strictEqual(Caesar.encode("bc d", "c")[0], ("de f"));
                            assert.strictEqual(Caesar.encode("yz a", "c")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("za b", "c")[0], ("bc d"));
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "z")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("bc d", "z")[0], ("ab c"));
                            assert.strictEqual(Caesar.encode("yz a", "z")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("za b", "z")[0], ("yz a"));
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.encode("ab c", "y")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("bc d", "y")[0], ("za b"));
                            assert.strictEqual(Caesar.encode("yz a", "y")[0], ("wx y"));
                            assert.strictEqual(Caesar.encode("za b", "y")[0], ("xy z"));
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.encode("ab c", "x")[0], ("xy z"));
                            assert.strictEqual(Caesar.encode("bc d", "x")[0], ("yz a"));
                            assert.strictEqual(Caesar.encode("yz a", "x")[0], ("vw x"));
                            assert.strictEqual(Caesar.encode("za b", "x")[0], ("wx y"));
                    
                        });
                    
                    });

                });
                
            });

        });

    });

    describe("decoding", (): void => {

        describe("single char", (): void => {

            describe("uppercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.decode("A", "0")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "0")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "0")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "0")[0], "Z");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.decode("B", "1")[0], "A");
                            assert.strictEqual(Caesar.decode("C", "1")[0], "B");
                            assert.strictEqual(Caesar.decode("Z", "1")[0], "Y");
                            assert.strictEqual(Caesar.decode("A", "1")[0], "Z");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.decode("C", "2")[0], "A");
                            assert.strictEqual(Caesar.decode("D", "2")[0], "B");
                            assert.strictEqual(Caesar.decode("A", "2")[0], "Y");
                            assert.strictEqual(Caesar.decode("B", "2")[0], "Z");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.decode("Z", "25")[0], "A");
                            assert.strictEqual(Caesar.decode("A", "25")[0], "B");
                            assert.strictEqual(Caesar.decode("X", "25")[0], "Y");
                            assert.strictEqual(Caesar.decode("Y", "25")[0], "Z");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.decode("A", "26")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "26")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "26")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "26")[0], "Z");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.decode("B", "27")[0], "A");
                                assert.strictEqual(Caesar.decode("C", "27")[0], "B");
                                assert.strictEqual(Caesar.decode("Z", "27")[0], "Y");
                                assert.strictEqual(Caesar.decode("A", "27")[0], "Z");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.decode("W", "100")[0], "A");
                                assert.strictEqual(Caesar.decode("X", "100")[0], "B");
                                assert.strictEqual(Caesar.decode("U", "100")[0], "Y");
                                assert.strictEqual(Caesar.decode("V", "100")[0], "Z");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.decode("A", "-0")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "-0")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "-0")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "-0")[0], "Z");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.decode("Z", "-1")[0], "A");
                            assert.strictEqual(Caesar.decode("A", "-1")[0], "B");
                            assert.strictEqual(Caesar.decode("X", "-1")[0], "Y");
                            assert.strictEqual(Caesar.decode("Y", "-1")[0], "Z");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.decode("Y", "-2")[0], "A");
                            assert.strictEqual(Caesar.decode("Z", "-2")[0], "B");
                            assert.strictEqual(Caesar.decode("W", "-2")[0], "Y");
                            assert.strictEqual(Caesar.decode("X", "-2")[0], "Z");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.decode("B", "-25")[0], "A");
                            assert.strictEqual(Caesar.decode("C", "-25")[0], "B");
                            assert.strictEqual(Caesar.decode("Z", "-25")[0], "Y");
                            assert.strictEqual(Caesar.decode("A", "-25")[0], "Z");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.decode("A", "-26")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "-26")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "-26")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "-26")[0], "Z");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.decode("Z", "-27")[0], "A");
                            assert.strictEqual(Caesar.decode("A", "-27")[0], "B");
                            assert.strictEqual(Caesar.decode("X", "-27")[0], "Y");
                            assert.strictEqual(Caesar.decode("Y", "-27")[0], "Z");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.decode("E", "-100")[0], "A");
                            assert.strictEqual(Caesar.decode("F", "-100")[0], "B");
                            assert.strictEqual(Caesar.decode("C", "-100")[0], "Y");
                            assert.strictEqual(Caesar.decode("D", "-100")[0], "Z");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode("A", "A")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "A")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "A")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "A")[0], "Z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode("B", "B")[0], "A");
                            assert.strictEqual(Caesar.decode("C", "B")[0], "B");
                            assert.strictEqual(Caesar.decode("Z", "B")[0], "Y");
                            assert.strictEqual(Caesar.decode("A", "B")[0], "Z");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode("C", "C")[0], "A");
                            assert.strictEqual(Caesar.decode("D", "C")[0], "B");
                            assert.strictEqual(Caesar.decode("A", "C")[0], "Y");
                            assert.strictEqual(Caesar.decode("B", "C")[0], "Z");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode("Z", "Z")[0], "A");
                            assert.strictEqual(Caesar.decode("A", "Z")[0], "B");
                            assert.strictEqual(Caesar.decode("X", "Z")[0], "Y");
                            assert.strictEqual(Caesar.decode("Y", "Z")[0], "Z");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode("Y", "Y")[0], "A");
                            assert.strictEqual(Caesar.decode("Z", "Y")[0], "B");
                            assert.strictEqual(Caesar.decode("W", "Y")[0], "Y");
                            assert.strictEqual(Caesar.decode("X", "Y")[0], "Z");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode("X", "X")[0], "A");
                            assert.strictEqual(Caesar.decode("Y", "X")[0], "B");
                            assert.strictEqual(Caesar.decode("V", "X")[0], "Y");
                            assert.strictEqual(Caesar.decode("W", "X")[0], "Z");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode("A", "a")[0], "A");
                            assert.strictEqual(Caesar.decode("B", "a")[0], "B");
                            assert.strictEqual(Caesar.decode("Y", "a")[0], "Y");
                            assert.strictEqual(Caesar.decode("Z", "a")[0], "Z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode("B", "b")[0], "A");
                            assert.strictEqual(Caesar.decode("C", "b")[0], "B");
                            assert.strictEqual(Caesar.decode("Z", "b")[0], "Y");
                            assert.strictEqual(Caesar.decode("A", "b")[0], "Z");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode("C", "c")[0], "A");
                            assert.strictEqual(Caesar.decode("D", "c")[0], "B");
                            assert.strictEqual(Caesar.decode("A", "c")[0], "Y");
                            assert.strictEqual(Caesar.decode("B", "c")[0], "Z");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode("Z", "z")[0], "A");
                            assert.strictEqual(Caesar.decode("A", "z")[0], "B");
                            assert.strictEqual(Caesar.decode("X", "z")[0], "Y");
                            assert.strictEqual(Caesar.decode("Y", "z")[0], "Z");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode("Y", "y")[0], "A");
                            assert.strictEqual(Caesar.decode("Z", "y")[0], "B");
                            assert.strictEqual(Caesar.decode("W", "y")[0], "Y");
                            assert.strictEqual(Caesar.decode("X", "y")[0], "Z");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode("X", "x")[0], "A");
                            assert.strictEqual(Caesar.decode("Y", "x")[0], "B");
                            assert.strictEqual(Caesar.decode("V", "x")[0], "Y");
                            assert.strictEqual(Caesar.decode("W", "x")[0], "Z");
                    
                        });
                    
                    });

                });
                
            });

            describe("lowercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.decode("a", "0")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "0")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "0")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "0")[0], "z");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.decode("b", "1")[0], "a");
                            assert.strictEqual(Caesar.decode("c", "1")[0], "b");
                            assert.strictEqual(Caesar.decode("z", "1")[0], "y");
                            assert.strictEqual(Caesar.decode("a", "1")[0], "z");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.decode("c", "2")[0], "a");
                            assert.strictEqual(Caesar.decode("d", "2")[0], "b");
                            assert.strictEqual(Caesar.decode("a", "2")[0], "y");
                            assert.strictEqual(Caesar.decode("b", "2")[0], "z");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.decode("z", "25")[0], "a");
                            assert.strictEqual(Caesar.decode("a", "25")[0], "b");
                            assert.strictEqual(Caesar.decode("x", "25")[0], "y");
                            assert.strictEqual(Caesar.decode("y", "25")[0], "z");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.decode("a", "26")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "26")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "26")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "26")[0], "z");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.decode("b", "27")[0], "a");
                                assert.strictEqual(Caesar.decode("c", "27")[0], "b");
                                assert.strictEqual(Caesar.decode("z", "27")[0], "y");
                                assert.strictEqual(Caesar.decode("a", "27")[0], "z");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.decode("w", "100")[0], "a");
                                assert.strictEqual(Caesar.decode("x", "100")[0], "b");
                                assert.strictEqual(Caesar.decode("u", "100")[0], "y");
                                assert.strictEqual(Caesar.decode("v", "100")[0], "z");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.decode("a", "-0")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "-0")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "-0")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "-0")[0], "z");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.decode("z", "-1")[0], "a");
                            assert.strictEqual(Caesar.decode("a", "-1")[0], "b");
                            assert.strictEqual(Caesar.decode("x", "-1")[0], "y");
                            assert.strictEqual(Caesar.decode("y", "-1")[0], "z");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.decode("y", "-2")[0], "a");
                            assert.strictEqual(Caesar.decode("z", "-2")[0], "b");
                            assert.strictEqual(Caesar.decode("w", "-2")[0], "y");
                            assert.strictEqual(Caesar.decode("x", "-2")[0], "z");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.decode("b", "-25")[0], "a");
                            assert.strictEqual(Caesar.decode("c", "-25")[0], "b");
                            assert.strictEqual(Caesar.decode("z", "-25")[0], "y");
                            assert.strictEqual(Caesar.decode("a", "-25")[0], "z");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.decode("a", "-26")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "-26")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "-26")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "-26")[0], "z");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.decode("z", "-27")[0], "a");
                            assert.strictEqual(Caesar.decode("a", "-27")[0], "b");
                            assert.strictEqual(Caesar.decode("x", "-27")[0], "y");
                            assert.strictEqual(Caesar.decode("y", "-27")[0], "z");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.decode("e", "-100")[0], "a");
                            assert.strictEqual(Caesar.decode("f", "-100")[0], "b");
                            assert.strictEqual(Caesar.decode("c", "-100")[0], "y");
                            assert.strictEqual(Caesar.decode("d", "-100")[0], "z");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode("a", "A")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "A")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "A")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "A")[0], "z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode("b", "B")[0], "a");
                            assert.strictEqual(Caesar.decode("c", "B")[0], "b");
                            assert.strictEqual(Caesar.decode("z", "B")[0], "y");
                            assert.strictEqual(Caesar.decode("a", "B")[0], "z");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode("c", "C")[0], "a");
                            assert.strictEqual(Caesar.decode("d", "C")[0], "b");
                            assert.strictEqual(Caesar.decode("a", "C")[0], "y");
                            assert.strictEqual(Caesar.decode("b", "C")[0], "z");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode("z", "Z")[0], "a");
                            assert.strictEqual(Caesar.decode("a", "Z")[0], "b");
                            assert.strictEqual(Caesar.decode("x", "Z")[0], "y");
                            assert.strictEqual(Caesar.decode("y", "Z")[0], "z");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode("y", "Y")[0], "a");
                            assert.strictEqual(Caesar.decode("z", "Y")[0], "b");
                            assert.strictEqual(Caesar.decode("w", "Y")[0], "y");
                            assert.strictEqual(Caesar.decode("x", "Y")[0], "z");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode("x", "X")[0], "a");
                            assert.strictEqual(Caesar.decode("y", "X")[0], "b");
                            assert.strictEqual(Caesar.decode("v", "X")[0], "y");
                            assert.strictEqual(Caesar.decode("w", "X")[0], "z");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode("a", "a")[0], "a");
                            assert.strictEqual(Caesar.decode("b", "a")[0], "b");
                            assert.strictEqual(Caesar.decode("y", "a")[0], "y");
                            assert.strictEqual(Caesar.decode("z", "a")[0], "z");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode("b", "b")[0], "a");
                            assert.strictEqual(Caesar.decode("c", "b")[0], "b");
                            assert.strictEqual(Caesar.decode("z", "b")[0], "y");
                            assert.strictEqual(Caesar.decode("a", "b")[0], "z");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode("c", "c")[0], "a");
                            assert.strictEqual(Caesar.decode("d", "c")[0], "b");
                            assert.strictEqual(Caesar.decode("a", "c")[0], "y");
                            assert.strictEqual(Caesar.decode("b", "c")[0], "z");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode("z", "z")[0], "a");
                            assert.strictEqual(Caesar.decode("a", "z")[0], "b");
                            assert.strictEqual(Caesar.decode("x", "z")[0], "y");
                            assert.strictEqual(Caesar.decode("y", "z")[0], "z");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode("y", "y")[0], "a");
                            assert.strictEqual(Caesar.decode("z", "y")[0], "b");
                            assert.strictEqual(Caesar.decode("w", "y")[0], "y");
                            assert.strictEqual(Caesar.decode("x", "y")[0], "z");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode("x", "x")[0], "a");
                            assert.strictEqual(Caesar.decode("y", "x")[0], "b");
                            assert.strictEqual(Caesar.decode("v", "x")[0], "y");
                            assert.strictEqual(Caesar.decode("w", "x")[0], "z");
                    
                        });
                    
                    });

                });
                
            });

        });

        describe("multiple char", (): void => {

            describe("uppercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.decode(("AB C"), "0")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "0")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "0")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "0")[0], "ZA B");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("BC D"), "1")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("CD E"), "1")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("ZA B"), "1")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("AB C"), "1")[0], "ZA B");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("CD E"), "2")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("DE F"), "2")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("AB C"), "2")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("BC D"), "2")[0], "ZA B");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("ZA B"), "25")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("AB C"), "25")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("XY Z"), "25")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("YZ A"), "25")[0], "ZA B");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("AB C"), "26")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "26")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "26")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "26")[0], "ZA B");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("BC D"), "27")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("CD E"), "27")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("ZA B"), "27")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("AB C"), "27")[0], "ZA B");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("WX Y"), "100")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("XY Z"), "100")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("UV W"), "100")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("VW X"), "100")[0], "ZA B");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("AB C"), "-0")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "-0")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "-0")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "-0")[0], "ZA B");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.decode(("ZA B"), "-1")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("AB C"), "-1")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("XY Z"), "-1")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("YZ A"), "-1")[0], "ZA B");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.decode(("YZ A"), "-2")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("ZA B"), "-2")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("WX Y"), "-2")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("XY Z"), "-2")[0], "ZA B");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.decode(("BC D"), "-25")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("CD E"), "-25")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("ZA B"), "-25")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("AB C"), "-25")[0], "ZA B");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.decode(("AB C"), "-26")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "-26")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "-26")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "-26")[0], "ZA B");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.decode(("ZA B"), "-27")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("AB C"), "-27")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("XY Z"), "-27")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("YZ A"), "-27")[0], "ZA B");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.decode(("EF G"), "-100")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("FG H"), "-100")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("CD E"), "-100")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("DE F"), "-100")[0], "ZA B");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode(("AB C"), "A")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "A")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "A")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "A")[0], "ZA B");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("BC D"), "B")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("CD E"), "B")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("ZA B"), "B")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("AB C"), "B")[0], "ZA B");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("CD E"), "C")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("DE F"), "C")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("AB C"), "C")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("BC D"), "C")[0], "ZA B");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("ZA B"), "Z")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("AB C"), "Z")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("XY Z"), "Z")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("YZ A"), "Z")[0], "ZA B");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("YZ A"), "Y")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("ZA B"), "Y")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("WX Y"), "Y")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("XY Z"), "Y")[0], "ZA B");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("XY Z"), "X")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("YZ A"), "X")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("VW X"), "X")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("WX Y"), "X")[0], "ZA B");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode(("AB C"), "a")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("BC D"), "a")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("YZ A"), "a")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("ZA B"), "a")[0], "ZA B");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("BC D"), "b")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("CD E"), "b")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("ZA B"), "b")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("AB C"), "b")[0], "ZA B");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("CD E"), "c")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("DE F"), "c")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("AB C"), "c")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("BC D"), "c")[0], "ZA B");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("ZA B"), "z")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("AB C"), "z")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("XY Z"), "z")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("YZ A"), "z")[0], "ZA B");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("YZ A"), "y")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("ZA B"), "y")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("WX Y"), "y")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("XY Z"), "y")[0], "ZA B");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("XY Z"), "x")[0], "AB C");
                            assert.strictEqual(Caesar.decode(("YZ A"), "x")[0], "BC D");
                            assert.strictEqual(Caesar.decode(("VW X"), "x")[0], "YZ A");
                            assert.strictEqual(Caesar.decode(("WX Y"), "x")[0], "ZA B");
                    
                        });
                    
                    });

                });
                
            });

            describe("lowercase", (): void => {

                describe("decimal key", (): void => {

                    describe("key >= 0", (): void => {

                        it("key = 0", (): void => {
        
                            assert.strictEqual(Caesar.decode(("ab c"), "0")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "0")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "0")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "0")[0], "za b");
                    
                        });
                    
                        it("key = 1", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("bc d"), "1")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("cd e"), "1")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("za b"), "1")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("ab c"), "1")[0], "za b");
                    
                        });
                    
                        it("key = 2", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("cd e"), "2")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("de f"), "2")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("ab c"), "2")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("bc d"), "2")[0], "za b");
                    
                        });
                    
                        it("key = 25", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("za b"), "25")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("ab c"), "25")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("xy z"), "25")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("yz a"), "25")[0], "za b");
                    
                        });
                    
                        it("key = 26", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("ab c"), "26")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "26")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "26")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "26")[0], "za b");
                    
                        });
                    
                        it("key = 26", (): void => {
                            
                                assert.strictEqual(Caesar.decode(("bc d"), "27")[0], "ab c");
                                assert.strictEqual(Caesar.decode(("cd e"), "27")[0], "bc d");
                                assert.strictEqual(Caesar.decode(("za b"), "27")[0], "yz a");
                                assert.strictEqual(Caesar.decode(("ab c"), "27")[0], "za b");
                    
                        });
                    
                        it("key = 100", (): void => {
                            
                                assert.strictEqual(Caesar.decode(("wx y"), "100")[0], "ab c");
                                assert.strictEqual(Caesar.decode(("xy z"), "100")[0], "bc d");
                                assert.strictEqual(Caesar.decode(("uv w"), "100")[0], "yz a");
                                assert.strictEqual(Caesar.decode(("vw x"), "100")[0], "za b");
                    
                        });
                    
                    });

                    describe("key <= 0", (): void => {

                        it("key = -0", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("ab c"), "-0")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "-0")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "-0")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "-0")[0], "za b");
                    
                        });
                    
                        it("key = -1", (): void => {
                            assert.strictEqual(Caesar.decode(("za b"), "-1")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("ab c"), "-1")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("xy z"), "-1")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("yz a"), "-1")[0], "za b");
                        });
                    
                        it("key = -2", (): void => {
                            assert.strictEqual(Caesar.decode(("yz a"), "-2")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("za b"), "-2")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("wx y"), "-2")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("xy z"), "-2")[0], "za b");
                        });
                    
                        it("key = -25", (): void => {
                            assert.strictEqual(Caesar.decode(("bc d"), "-25")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("cd e"), "-25")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("za b"), "-25")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("ab c"), "-25")[0], "za b");
                        });
                    
                        
                        it("key = -26", (): void => {
                            assert.strictEqual(Caesar.decode(("ab c"), "-26")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "-26")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "-26")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "-26")[0], "za b");
                        });
                    
                        it("key = -27", (): void => {
                            assert.strictEqual(Caesar.decode(("za b"), "-27")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("ab c"), "-27")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("xy z"), "-27")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("yz a"), "-27")[0], "za b");
                        });
                    
                    
                        it("key = -100", (): void => {
                            assert.strictEqual(Caesar.decode(("ef g"), "-100")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("fg h"), "-100")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("cd e"), "-100")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("de f"), "-100")[0], "za b");
                        });
                        
                    });

                });

                describe("ascii key", (): void => {

                    describe("uppercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode(("ab c"), "A")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "A")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "A")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "A")[0], "za b");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("bc d"), "B")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("cd e"), "B")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("za b"), "B")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("ab c"), "B")[0], "za b");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("cd e"), "C")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("de f"), "C")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("ab c"), "C")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("bc d"), "C")[0], "za b");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("za b"), "Z")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("ab c"), "Z")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("xy z"), "Z")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("yz a"), "Z")[0], "za b");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("yz a"), "Y")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("za b"), "Y")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("wx y"), "Y")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("xy z"), "Y")[0], "za b");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("xy z"), "X")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("yz a"), "X")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("vw x"), "X")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("wx y"), "X")[0], "za b");
                    
                        });
                    
                    });

                    describe("lowercase key", (): void => {

                        it("key = A", (): void => {
        
                            assert.strictEqual(Caesar.decode(("ab c"), "a")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("bc d"), "a")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("yz a"), "a")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("za b"), "a")[0], "za b");
                    
                        });
                    
                        it("key = B", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("bc d"), "b")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("cd e"), "b")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("za b"), "b")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("ab c"), "b")[0], "za b");
                    
                        });
                    
                        it("key = C", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("cd e"), "c")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("de f"), "c")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("ab c"), "c")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("bc d"), "c")[0], "za b");
                    
                        });
                    
                        it("key = Z", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("za b"), "z")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("ab c"), "z")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("xy z"), "z")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("yz a"), "z")[0], "za b");
                    
                        });
                    
                        it("key = Y", (): void => {
                    
                            assert.strictEqual(Caesar.decode(("yz a"), "y")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("za b"), "y")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("wx y"), "y")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("xy z"), "y")[0], "za b");
                    
                        });
                    
                        it("key = X", (): void => {
                            
                            assert.strictEqual(Caesar.decode(("xy z"), "x")[0], "ab c");
                            assert.strictEqual(Caesar.decode(("yz a"), "x")[0], "bc d");
                            assert.strictEqual(Caesar.decode(("vw x"), "x")[0], "yz a");
                            assert.strictEqual(Caesar.decode(("wx y"), "x")[0], "za b");
                    
                        });
                    
                    });

                });
                
            });

        });

    });

});
