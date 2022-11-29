import * as fsPromises from 'node:fs/promises';

const create = async () => {
    const path = './src/fs/files/fresh.txt';
    fsPromises.access(path)
        .then(() => {
            console.error(new Error('FS operation failed'))
        })
        .catch(() => {
            fsPromises.appendFile(path, 'I am fresh and young');
        });     
};

await create();