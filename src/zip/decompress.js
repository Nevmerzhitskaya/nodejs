import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { filePathConverter } from '../filePathConverter.js';

const sourcePath = filePathConverter('zip','files','archive.gz');
const destinationPath = filePathConverter('zip','files','fileToCompress.txt');

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    source.pipe(unzip).pipe(destination);
};

await decompress();