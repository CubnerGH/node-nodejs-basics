import fs from 'fs';
import path from 'path';

const rename = async () => {
    const oldFilename = path.join('src/fs', 'files', 'wrongFilename.txt');
    const newFilename = path.join('src/fs', 'files', 'properFilename.md');

    if (!fs.existsSync(oldFilename)) {
        throw new Error('FS operation failed: Source file does not exist.');
    }
    if (fs.existsSync(newFilename)) {
        throw new Error('FS operation failed: Destination file already exists.');
    }

    fs.renameSync(oldFilename, newFilename);
    console.log("File renamed successfully.");
};

await rename();