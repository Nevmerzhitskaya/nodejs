import * as fsPromises from 'node:fs/promises';

const create = async () => {

    fsPromises.access('./src/fs/files/fresh.txt')
        .then(() => {
            console.error(new Error('FS operation failed'))
        })
        .catch(() => {
            fsPromises.appendFile('./src/fs/files/fresh.txt', 'I am fresh and young');
        });     
};

await create();