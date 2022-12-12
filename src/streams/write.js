import { createWriteStream } from 'node:fs';
import { filePathConverter } from '../filePathConverter.js';

const filePath = filePathConverter('streams','files','fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);

    writeStream.on('error', function (err) {
        console.log(err);
    });
};

await write();