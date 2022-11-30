import * as fsPromises from 'node:fs/promises';

const create = async () => {
    const path = './src/fs/files/fresh.txt';
    
    fsPromises.access(path)
        .then(() => {
            const error = new Error('FS operation failed');
            console.error(error);
            throw error;
        })
        .catch((err) => {
            if(err.code === 'ENOENT') fsPromises.appendFile(path, 'I am fresh and young');
        });
};

await create();