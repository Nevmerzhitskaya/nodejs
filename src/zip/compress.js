import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const filePath = './src/zip/files/';
    const gzip = createGzip();
    const source = createReadStream(filePath + 'fileToCompress.txt');
    const destination = createWriteStream(filePath + 'archive.gz');
    
    source.pipe(gzip).pipe(destination);
};

await compress();