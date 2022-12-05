import * as fsPromises from 'node:fs/promises';
import { filePathConverter } from '../filePathConverter.js';

const list = async () => {

    const error = new Error('FS operation failed');
    const pathSource = filePathConverter('fs','files');

    try {
        const isExistSource = await checkDir(pathSource);
        if (isExistSource.error) throw error;

        for await (const dirent of isExistSource.dir) {
            console.log(dirent.name)
        }

    } catch (err) {
        console.error(err.name + ':', err.message);
    }
};

await list();

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