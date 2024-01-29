import fs from 'fs';
import path from 'path';

const copy = async () => {
    const sourceDir = path.join('src/fs', 'files');
    const targetDir = path.join('src/fs', 'files_copy');

    if (!fs.existsSync(sourceDir)) {
        throw new Error('FS operation failed');
    }

    if (fs.existsSync(targetDir)) {
        throw new Error('FS operation failed');
    }

    fs.mkdirSync(targetDir);

    fs.readdirSync(sourceDir).forEach(file => {
        const sourceFile = path.join(sourceDir, file);
        const targetFile = path.join(targetDir, file);

        fs.copyFileSync(sourceFile, targetFile);
    });

    console.log('Directory copied successfully!');
};

await copy();
