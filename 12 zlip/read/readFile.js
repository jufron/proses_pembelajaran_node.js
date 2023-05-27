import zlib from 'node:zlib';
import util from 'node:util';
import { writeFile, readFile } from 'node:fs/promises';

const filePath = './data.txt';

// ubah ke promise murni
const gzipPromise = util.promisify(zlib.gzip);

async function readFileAndCompress () {
  try {
    const resources = await readFile(filePath);
    const compressData = await gzipPromise(resources);

    await writeFile('hasil.txt', compressData);

    console.log('data compress berhasil ditulis');

  } catch (err) {
    console.log(err);
  }
};

readFileAndCompress();