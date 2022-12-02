import { createWriteStream } from 'node:fs';

const write = async () => {
    const writeStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(writeStream);

    writeStream.on('error', function (err) {
        console.log(err);
    });
};

await write();