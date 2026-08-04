import generate from "../sodesktop/build.js"
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const type = await rl.question('Type: ');
const version = await rl.question('Version: ');
const versionFile = version.replaceAll(".", "")

console.log(generate(type, version, versionFile))

rl.close()
