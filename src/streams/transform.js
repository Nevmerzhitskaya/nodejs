import { Transform } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({

    transform(chunk, encoding, callback) {

      chunk.reverse();

      callback(null, chunk);

    }

  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();