import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    const pathToReadFile = path.join('src/zip', 'files', 'fileToCompress.txt');
    const pathToWriteFile = path.join('src/zip', 'files', 'archive.gz');

    const readStream = fs.createReadStream(pathToReadFile);
    const writeStream = fs.createWriteStream(pathToWriteFile);
    const gzip = zlib.createGzip();

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err)
          console.error(err);
      }
    );
};

await compress();