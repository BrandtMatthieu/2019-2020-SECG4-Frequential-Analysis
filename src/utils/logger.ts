/**
 * Logs infos in the console.
 */
export abstract class Logger {
    /**
     * Logs a message in the console.
     * @param {string} message the message to be logged in the console.
     */
    public static log (message?: string): void {
        process.stdout.write((message || "") + "\n");
    }

    /**
     * Logs an error in the console the exits.
     * @param {Error} error the error to be logged in the console.
     */
    public static error (error: Error) {
        process.stderr.write(error.message + "\n");
        process.exit(-1);
    }
}
