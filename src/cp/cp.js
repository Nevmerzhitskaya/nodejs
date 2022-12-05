import { spawn } from 'node:child_process';
import { filePathConverter } from '../filePathConverter.js';

const filePath = filePathConverter('cp','files','script.js');

const spawnChildProcess = async (args) => {
    spawn('node', [filePath, ...args], {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);