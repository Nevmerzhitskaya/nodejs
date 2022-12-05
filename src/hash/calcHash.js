import { readFile } from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const { createHash } = await import('node:crypto');
const filePath = filePathConverter('hash','files','fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const hex = hash.update(contents);
    
    console.log(hex.digest('hex'));
};

await calculateHash();