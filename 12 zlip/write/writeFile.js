import zlib from 'node:zlib';
import util from 'node:util';
import { readFile } from 'node:fs/promises';


const file = './hasil.txt';
const unzipPromise = util.promisify(zlib.unzip);

// read & unzip
const readAndUnzip = async () => {
  try {
    const resources = await readFile(file);
    const uncompress = await unzipPromise(resources);

    console.log(uncompress.toString());

  } catch (error) {
    console.log(error);
  }
};

readAndUnzip();