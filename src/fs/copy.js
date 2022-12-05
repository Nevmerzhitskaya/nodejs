import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const copy = async () => {

    const pathSource = filePathConverter('fs','files');    
    const pathCopy = filePathConverter('fs','files_copy');    
    const error = new Error('FS operation failed');


    try {
        const isExistCopy = await checkDir(pathCopy);
        if (!isExistCopy.error) throw error;

        const isExistSource = await checkDir(pathSource);
        if (isExistSource.error) throw error;

        await fsPromises.mkdir(pathCopy);

        for await (const dirent of isExistSource.dir) {
            await fsPromises.copyFile(pathSource + dirent.name, pathCopy + dirent.name);
        }

    } catch (err) {
        console.error(err.name + ':', err.message);
    }
};

copy();

async function checkDir(path) {
    let dirInfo = {};
    try {
        dirInfo.dir = await fsPromises.opendir(path);
        return dirInfo;
    } catch (err) {
        dirInfo.error = true;
        return dirInfo;
    }
}