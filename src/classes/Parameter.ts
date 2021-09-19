import { Logger } from "../utils/logger";
import { getHelp } from "../utils/help";

/**
 * Represents a parameter for the program.
 */
export class Parameter {
    name: string;
    short: string;
    default: string;
    accepted?: string[];
    value: string;
    description: string;

    /**
     * Creates a new parameter.
     * @param {string} name the name of the parameter.
     * @param {string} short the shortened name of the parameter.
     * @param {string} defaultValue the default value of the parameter.
     * @param {string} description the description of the parameter. What it does.
     * @param {string[]?} accepted the accepted values if any of the parameter. Empty array means any value is accepted.
     */
    constructor(name: string, short: string, defaultValue: string, description: string, accepted?: string[]) {
        this.name = name;
        this.short = short;
        this.default = defaultValue;
        this.value = defaultValue;
        this.description = description;
        this.accepted = accepted;
    }
};

/**
 * An array with all default parameters.
 */
export const parameters: Parameter[] = [
    new Parameter("mode",   "m", "encode",      "Wether to encode or decode the message.", ["encode", "e", "decode", "d"]),
    new Parameter("cipher", "c", "caesar",      "The cipher the provided message is encoded in.", ["caesar", "c", "vigenere", "v"]),
    new Parameter("file",   "f", "",            "The file containing the message to encode or decode."),
    new Parameter("text",   "t", "Sample text", "The input text."),
    new Parameter("key",    "k", "1",           "The key to decode the cipherd message. (Only if decoding the message)"),
    new Parameter("lang",   "l", "en",          "The language the ciphered message is in.", ["english", "en", "french", "fr"]),
    new Parameter("out",    "o", "console",     "The output file for the result. Default output is the console."),
    new Parameter("help",   "h", "",            "Shows the help messages."),
];

/**
 * Returns the value of a parameter by its name.
 * @param {string} parameterName the name of the parameter to get the value from.
 */
export function getParameterValue (parameterName: string): string {
    return parameters.find((o: Parameter): boolean => o.name === parameterName)!.value;
}

/**
 * Takes the command line parameters and put them in the parameters array.
 * Checks all parameters are valid.
 * Prints the help if there are no parameters.
 */
export function getCommandLineParameters (): void {
    process.argv.splice(0, 2);

    if (process.argv.length === 0) {
        Logger.log(getHelp());
        process.exit(0);
    }

    process.argv.forEach((arg: string): void => {
        const nameRegexp: RegExp = /--?(\w+)(?:=.+)?/;
        const valueRegexp: RegExp = /--?.+=(.+)/;

        let name: string = (nameRegexp.exec(arg) || ["", arg])[1];
        let value: string = (valueRegexp.exec(arg) || ["", ""])[1];

        if (name === "help" || name === "h") {
            Logger.log(getHelp());
            process.exit(0);
        }

        if (!parameters.some((o: Parameter): boolean => o.name === name || o.short === name)) {
            throw new Error(`Unknown parameter "${name}" with value "${value}". This parameter will be ignored. See "--help".`);
        }

        let parameter: Parameter = parameters.find((o: Parameter): boolean => o.name === name || o.short === name)!;
        if (!parameter.accepted || parameter.accepted.includes(value)) {
            parameter.value = value;
        } else {
            throw new Error(`Unsupported value "${value}" for parameter "${name}".\nSupported value for this parameter are: ${parameter.accepted.map((a: string | number): string => `"${a}"`).join(", ")}.`);
        }
    });

}
