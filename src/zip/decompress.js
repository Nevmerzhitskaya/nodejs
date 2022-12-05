import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const filePath = './src/zip/files/';
    const unzip = createUnzip();
    const source = createReadStream(filePath + 'archive.gz');
    const destination = createWriteStream(filePath + 'fileToCompress.txt');

    source.pipe(unzip).pipe(destination);
};

await decompress();