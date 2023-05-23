import { Writable } from 'node:stream';
import { createWriteStream } from 'node:fs';
import data  from './data.js';

const file = createWriteStream('output.txt');

// * write data di pause
file.cork();

file.write(data);

// * write data di lanjutkan
file.uncork();

file.on('drain', () => {
  console.log('buffer aliran tulis telah dikosongkan');
})

file.on('ready', () => {
  console.log('file sudah siap');
});

file.on('finish', () => {
  console.log('file sudah selesai');
});

file.on('error', err => {
  console.log(err);
});

file.on('close', () => {
  console.log('aliran tulis telah ditutup sepenuhnya');
});

file.end();


// todo penggunaan function destroy

// const myStram = new Writable();

// console.log(myStram.destroyed); // false

// myStram.destroy();

// console.log(myStram.destroyed); // true

// const myWriteTable = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(`recived data ${chunk}`);
//   }
// });

// myWriteTable.cork();

// myWriteTable.write('write data 1 ');
// myWriteTable.write('write data 2 ');
// myWriteTable.write('write data 3 ');

// myWriteTable.uncork();