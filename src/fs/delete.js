import * as fsPromises from 'node:fs/promises';

const remove = async () => {
    const path = './src/fs/files/fileToRemove.txt';
    const error = new Error('FS operation failed');
    
    try {

        await fsPromises.unlink(path);

    } catch (err) {
        console.error(error.name + ':', error.message);
    }
};

await remove();