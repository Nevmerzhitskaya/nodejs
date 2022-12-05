import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const read = async () => {
    const error = new Error('FS operation failed');
    const path = filePathConverter('fs','files','fileToRead.txt');

    try {
        const contents = await fsPromises.readFile(path, { encoding: 'utf8' });
        console.log(contents);

    } catch (err) {
        console.error(error.name + ':', error.message);
    }
};

await read();