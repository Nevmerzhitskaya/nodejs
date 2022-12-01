import { createReadStream } from 'node:fs';

const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');    
    const hex = input.pipe(hash).digest('hex');

    console.log(hex);
};

await calculateHash();