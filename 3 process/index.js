import { fork } from 'node:child_process';
import { allowedNodeEnvironmentFlags } from 'node:process';
import { arch } from 'node:process';
import { readFileSync } from 'node:fs';

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

// console.log('sebelum process abort penghentian paksa code');

// process.abort();

// console.log('setelah prosess pemanggilan process abort code akan dihentikan secara paksa');

// console.log(allowedNodeEnvironmentFlags);

// todo mengecek arsitektur 
// console.log(arch);

// todo penggunaan env : buat file .env dulu sebelu menggunakanaya

const parse_env_file = filepath => {
  const envData = readFileSync(filepath, 'utf-8');
  const lines = envData.split('\n');

  const envVariable = {};

  lines.forEach(line => {
    const trimline = line.trim();

    if (trimline !== '' && !trimline.startsWith('#')) {
      const [key, value] = trimline.split('=');
      envVariable[key] = value;
    }
  })

  return envVariable;
}

const env = parse_env_file('.env');
const { APP_NAME, PORT, HOST, DATABASE, DB_NAME } = env;

console.log(`app name : ${APP_NAME}`);
console.log(`port : ${PORT}`);
console.log(`host : ${HOST}`);
console.log(`database : ${DATABASE}`);
console.log(`database name : ${DB_NAME}`);
