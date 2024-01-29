import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const pathToReadFile = path.join('src/zip', 'files', 'archive.gz');
    const pathToWriteFile = path.join('src/zip', 'files', 'fileToCompress.txt');

    const readStream = fs.createReadStream(pathToReadFile);
    const writeStream = fs.createWriteStream(pathToWriteFile);
    const gunzip = zlib.createGunzip();

    pipeline(readStream, gunzip, writeStream, (err) => {
        if (err)
            console.error(err);
        }
    );
};

await decompress();