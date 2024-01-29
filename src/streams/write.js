import fs from 'fs';
import path from 'path';

const write = async () => {
    const pathToWriteFile = path.join('src/streams', 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(pathToWriteFile);
    const readStream = process.stdin;

    readStream.on('data', (chunk) => {
        writeStream.write(chunk);
    });
};

await write();