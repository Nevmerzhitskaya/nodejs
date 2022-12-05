import { spawn } from 'node:child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);    
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    spawn('node', [filePath, ...args], {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);