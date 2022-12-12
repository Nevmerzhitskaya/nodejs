import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const rename = async () => {
    const oldFile = filePathConverter('fs','files','wrongFilename.txt');
    const newFile = filePathConverter('fs','files','properFilename.md');

    const error = new Error('FS operation failed');
    
    try {

        const isExistSourceFile = await checkFile(oldFile);
        // console.log(isExistSourceFile);
        if(!isExistSourceFile) throw error;

        const isExistResultFile = await checkFile(newFile);
        if(isExistResultFile) throw error;

        await fsPromises.rename(oldFile, newFile);

    } catch (err) {
        console.error(err.name + ':', err.message);
    }
};

await rename();

async function checkFile(path) {
    try {
        await fsPromises.open(path, 'r');

        return true;
    } catch (err) {
        return false;
    }
}