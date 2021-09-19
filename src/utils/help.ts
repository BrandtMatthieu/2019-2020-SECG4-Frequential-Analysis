import { parameters, Parameter } from "../classes/Parameter";

/**
 * Returns the help of the program.
 * @returns {string} the help of the program.
 */
export function getHelp (): string {
    return `\
Frequential Analysis - 44422
Helps you encode/decode a message from a file with the Caeasr or Vigenere cipher.
Parameter syntax: --name=value
Available parameters:
${parameters.map((o: Parameter): string => {
    return `  -${o.short}, --${o.name}\t\t${o.description}${o.accepted
        ? ` [${o.accepted.map((a: string): string => `"${a}"`).join(", ")}]`
        : ""
        }`;
}).join("\n")}`;
}
