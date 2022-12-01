import * as fsPromises from 'node:fs/promises';

const rename = async () => {
    const path = './src/fs/files/';
    const oldFile = path + 'wrongFilename.txt';
    const newFile = path + 'properFilename.md';
    const error = new Error('FS operation failed');
    
    try {

        const isExistSourceFile = await checkFile(oldFile);
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