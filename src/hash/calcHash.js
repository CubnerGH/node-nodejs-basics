import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream('fileToCalculateHashFor.txt');

    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();