import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const create = async () => {
    const error = new Error('FS operation failed');
    const filePath = filePathConverter('fs','files','fresh.txt');

    try {
        const buff = await fsPromises.open(filePath, 'r');
        
        if(buff) {
            console.error(error.name + ':', error.message);
            throw error;
        }

    } catch (err) {
        if(err.code === 'ENOENT') await fsPromises.appendFile(filePath, 'I am fresh and young');
    }
};

await create();