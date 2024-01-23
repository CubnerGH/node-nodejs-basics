import fs from 'fs';
import path from 'path';

const remove = async () => {
    const fileName = path.join('src/fs', 'files', 'fileToRemove.txt');

    if (!fs.existsSync(filename)) {
        throw new Error('FS operation failed: File does not exist.');
    }

    fs.unlinkSync(fileName);
    console.log("File deleted successfully.");
};

await remove();