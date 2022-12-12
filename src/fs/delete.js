import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const remove = async () => {
    const error = new Error('FS operation failed');
    const filePath = filePathConverter('fs','files','fileToRemove.txt');
    
    try {

        await fsPromises.unlink(filePath);

    } catch (err) {
        console.error(error.name + ':', error.message);
    }
};

await remove();