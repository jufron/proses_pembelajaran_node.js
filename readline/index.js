import readline from 'node:readline';


const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

// input.question('Siapa nama anda : ', answer => {
//   console.log(`Terima kasih sudah memasukan nama : ${answer}`);

//   input.close();
// });

rl.addListener('line', question => {
  console.log(`diterima : ${question}`);

  // rl.prompt();

  rl.close();
});


// input.addListener('close', () => {
//   console.log('terminal input close');
// })

// input.addListener('error', err => {
//   console.log(`terjadi kesalahan pada input output : ${err}`);
// });

// input.addListener('history', history => {
//   console.log(`recived ${history}`);
// });

// input.addListener('pause', () => {
//   console.log(`readline paused`);
// });

// input.addListener('resume', () => {
//   console.log(`readlin resume`);
// });

// input.addListener('SIGCONT', () => {
//   input.prompt();
// });

// input.addListener('SIGINT', () => {
//   input.question('Are you sure do you want to exit', answer => {
//     if (answer.match(/^y(es)?$/i)) input.pause();
//   });
// });

// input.addListener('SIGTSTP', () => {
//   console.log('Caught SIGTSTP.');
// });