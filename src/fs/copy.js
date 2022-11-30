import * as fsPromises from 'node:fs/promises';

const copy = async () => {

    const pathSource = './src/fs/files/';
    const pathCopy = './src/fs/files_copy/';
    const error = new Error('FS operation failed');


    try {
        const dirCopy = await checkDir(pathCopy);
        if (!dirCopy.error) throw error;

        const dirSource = await checkDir(pathSource);
        if (dirSource.error) throw error;

        await fsPromises.mkdir(pathCopy);

        for await (const dirent of dirSource.dir) {
            await fsPromises.copyFile(pathSource + dirent.name, pathCopy + dirent.name);
        }

    } catch (err) {
        console.error(err);
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