import { readFile } from 'node:fs/promises';

const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const filePath = './src/hash/files/fileToCalculateHashFor.txt';
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const hex = hash.update(contents);
    
    console.log(hex.digest('hex'));
};

await calculateHash();