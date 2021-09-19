import * as Fs from "fs";
import { Logger } from "./utils/logger";
import { getParameterValue, getCommandLineParameters } from "./classes/Parameter";
import { Vigenere } from "./classes/Vigenere";
import { Caesar } from "./classes/Caesar";


try {
    getCommandLineParameters();
    let text: string = getParameterValue("file") ? Fs.readFileSync(getParameterValue("file")).toString() : getParameterValue("text");
    let key: string = getParameterValue("key");
    let lang: string = getParameterValue("lang");
    let result: [string, number[]] = ["", []];
    switch(getParameterValue("cipher")) {
        case "caesar":
        case "c":
            switch (getParameterValue("mode")) {
                case "decode":
                case "d":
                    result = Caesar.decode(text, lang, key);
                    break;
                case "encode":
                case "e":
                    result = Caesar.encode(text, key);
                    break;
            }
            break;
        case "vigenere":
        case "v":
            switch (getParameterValue("mode")) {
                case "decode":
                case "d":
                    result = Vigenere.decode(text, lang, key);
                    break;
                case "encode":
                case "e":
                    result = Vigenere.encode(text, key);
                    break;
            }
            break;
    }
    if(getParameterValue("out") === "console") {
        Logger.log(result[0]);
    } else {
        Fs.writeFileSync(getParameterValue("out"), result[0]);
    }
} catch (err) {
    Logger.error(err);
}
