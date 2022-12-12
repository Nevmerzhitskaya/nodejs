import { createReadStream } from 'node:fs';
import { filePathConverter } from '../filePathConverter.js';

const filePath = filePathConverter('streams','files','fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(filePath).pipe(process.stdout);

    readStream.on('error', function (err) {
        console.log(err);
    });
};

await read();