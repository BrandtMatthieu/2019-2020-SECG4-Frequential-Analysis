# Frequential Analysis - 44422

## Installation

### Debian / Debian based (Ubuntu, Linux Mint, Kali Linux, Parrot OS, Pure OS)

Using install script:

```
chmod +x ./install
./install
```

### Other

Softwares to install:
* Node.js
* npm
* npx

Dependencies to install:
Run:

```
npm i
```

Compiling the code:

```
npm run compile
```

## Compiling

This step shoudl be done already.

If you need to recompile the code later for whatever reason, run

```
npm run compile
```

## Executing

Run

```
node .
```

### Parameters

Parameters can be give to modify the behaviour of the program.

Syntax: `--parameter=value`.
If the value has spaces, surround your value with double quotes (""). `--parameter="my value"`

* `-m`, `--mode`
    * Wether to encode or decode the message.
    * Acceptde values: `decode`, `d`, `encode`, `e`.
    * Default value is `encode`.
* `-c`, `--cipher`
    * The cipher the provided message is encoded in.
    * Acceptde values: `caesar`, `c`, `vigenere`, `v`.
    * Default value is `caesar`.
* `-f`, `--file`
    * The path to the file containing the message to cipher or decipher.
    * Cannot be used with `--text`.
* `-t`, `--text`
    * The input text.
    * Cannot be used with `--file`.
* `-k`, `--key`
    * The key to decode the cipherd message.
    * Only if decoding the message, otherwise ignored.
    * Can be a number or a letter (A = 0, B = 1, C = 2, etc...).
* `-l`, `--lang`
    * The language the ciphered message is in.
    * Acceptde values: `english`, `en`, `french`, `fr`.
    * Default value is `english`.
* `-o`, `--out`
    * A path to the output file to write the result to.
    * `console` outputs to the console (stdout).
    * Default output is `console`.
*`-h`, `--help`
    * Shows the help messages.

### Example:

* **Encoding** the message "**Hello World!**" with the **Caesar** cipher, with a key of **7** and writing the output to the console.
```
node . -m=encode -c=caesar -t="Hello World!" -k=7
```
Output:
> Olssv Dvysk!

* **Decoding** the message "**JofuIshyfj, ZqlqIshyfj jxqj isqbui.**" with the **Caesar** cipher, with a key of **42** and writing to the file "**./result**".
```
node . -m=decode -c=caesar -t="JofuIshyfj, ZqlqIshyfj jxqj isqbui." -k=42 -o=./result
```

## Help

Run

```
npm run help
```

or

```
node . --help
```
