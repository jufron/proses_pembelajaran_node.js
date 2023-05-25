import util from 'node:util';
import fs from 'node:fs';


// const callbackFunction = util.callbackify(async () => {
//   return 'hello world';
// });


// callbackFunction((err, net) => {
//   if (err) throw err;

//   console.log(net);
// });


// const result = util.format('%s:%s', 'foo', 'bar');

// console.log(util.format('erik : %s', 'ebsan'));

// const name = util.format('erik  %s', 'ebsan');

// const stringToJson = util.format('nama : %j', name);

// console.log(stringToJson);

// const asyncFunctTraditional = (arg1, arg2, callback) => {
//   setTimeout(() => {

//     if (arg1 && arg2) {
//       callback(null, 'berhasil');
//     } 

//   }, 2000);
// }


// const asyncFunctPromise = util.callbackify(asyncFunctTraditional);

// asyncFunctPromise((err, res) => {
//   if (err) throw err;
// }, true, true);

// asyncFunctPromise(true, true)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// const stat = util.promisify(fs.stat);

// async function callStat () {
//   const stat = await data('.');
//   console.log(`this directory is owned by ${stat.uid}`);
// }


class Foo {
  constructor() {
    this.a = 42;   
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = util.promisify(foo.bar);


naiveBar.call(foo)
  .then(a => console.log(a));