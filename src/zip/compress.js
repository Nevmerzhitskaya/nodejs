import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { filePathConverter } from '../filePathConverter.js';

const sourcePath = filePathConverter('zip','files','fileToCompress.txt');
const destinationPath = filePathConverter('zip','files','archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    
    source.pipe(gzip).pipe(destination);
};

await compress();