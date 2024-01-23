import fs from 'fs';
import path from 'path';

const list = async () => {
    const folderName = path.join('src/fs', 'files');

    if (!fs.existsSync(folderName)) {
        throw new Error('FS operation failed: Folder does not exist.');
    }

    const fileNames = fs.readdirSync(folderName);
    console.log(fileNames);
};

await list();