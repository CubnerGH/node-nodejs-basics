import fs from 'fs';
import path from 'path';

const create = async () => {
    const filePath = path.join('src/fs', 'files', 'fresh.txt');
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFile(filePath, 'I am fresh and young', (err) => {
                if (err) throw err;
                console.log('File created successfully!');
            });
        }
    });
};

await create();