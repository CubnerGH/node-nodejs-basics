import { Transform, pipeline } from 'stream';

const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    }
  });

  pipeline(readStream, reverseTransform, writeStream, (err) => {
      if (err)
        console.error(err);
    }
  );
}

transform();
