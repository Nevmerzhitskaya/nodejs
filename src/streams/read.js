import { createReadStream } from 'node:fs';

const read = async () => {
    const readStream = createReadStream('./src/streams/files/fileToRead.txt').pipe(process.stdout);

    readStream.on('error', function (err) {
        console.log(err);
    });
};

await read();