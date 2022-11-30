import * as fsPromises from 'node:fs/promises';

const create = async () => {
    const path = './src/fs/files/fresh.txt';
    const error = new Error('FS operation failed');

    try {
        await fsPromises.access(path);
        console.error(error.name + ':', error.message);
        throw error;

    } catch (err) {
        if(err.code === 'ENOENT') await fsPromises.appendFile(path, 'I am fresh and young');
    }
};

await create();