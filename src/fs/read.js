import fs from 'fs';
import path from 'path';

const read = async () => {
    //const filename = './fileToRead.txt';
    const fileName = path.join('src/fs', 'files', 'fileToRead.txt');

    if (!fs.existsSync(fileName)) {
        throw new Error('FS operation failed: File does not exist.');
    }

    const content = fs.readFileSync(fileName, 'utf8');
    console.log(content);
};

await read();