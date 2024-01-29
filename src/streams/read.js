import fs from 'fs';
import path from 'path';

const read = async () => {
    const pathToReedFile = path.join('src/streams', 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(pathToReedFile);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        process.stdout.write('\n');
    });

};

await read();