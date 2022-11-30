import * as fsPromises from 'node:fs/promises';

const read = async () => {
    const path = './src/fs/files/fileToRead.txt';
    const error = new Error('FS operation failed');
    try {
        const contents = await fsPromises.readFile(path, { encoding: 'utf8' });
        console.log(contents);

    } catch (err) {
        console.error(error.name + ':', error.message);
    }
};

await read();