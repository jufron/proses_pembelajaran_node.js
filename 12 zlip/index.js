import zlib from 'node:zlib';
import fs from 'node:fs';


const srcPath = 'data.txt';
const destPath = 'commpresed.gz';

const readStream = fs.createReadStream(srcPath);
const writeStream = fs.createWriteStream(destPath);

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('data process successfuly');
});