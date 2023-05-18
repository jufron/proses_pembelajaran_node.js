import { fork } from 'node:child_process';

console.log('code is running 1');

console.log(process.version);
console.log(process.argv);
console.log(process.cwd());
console.log(process.env);
console.log(process.exitCode);

// const childProcess = fork('child.js');

// childProcess.addListener('message', message => {
//   console.log(`menerima pesan dari proses anak ${message}`);
// });

// childProcess.addListener('exit', code => {
//   console.log(`code is exit ${code}`);
// });


// childProcess.send('hallo, ini process anak');
