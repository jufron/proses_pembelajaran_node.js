
import { setTimeout, setImmediate, setInterval } from 'timers/promises';

// todo callback timer
// setInterval(() => {
//   console.log(`waktu terus bertambah ${new Date}`);
// }, 1000);


// todo promises timer

// * setimeout
// const rest = await setTimeout(100, 'result');

// console.log(rest);

// ? penggunaan promise
// const delay = ms => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(ms, resolve());
//   });
// };


// delay(1000)
//   .then(() => {
//     console.log('setalah 1 detik ini dijalankan');
//   })
//   .catch(err => {
//     console.log(`terjadi kesalahan ${err}`);
//   });


// * setInterval

const interval = 2000;
let counter = 0;

for await (const startline of setInterval(interval, `ini ditulis berapa kali `) ) {
  console.log(startline, counter++);
}

