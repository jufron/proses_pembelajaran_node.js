import { Buffer } from 'node:buffer';


// const text = 'jufron tamo ama';

// const buf = Buffer.from(text, 'utf-8');

// console.log(buf.toString('hex'));

// console.log(buf.toString('base64'));

// * membuat buffer (hitungan 10 = 10 byte)
// const buff = Buffer.alloc(10);
// console.log(buff);

// todo menggunakan buffer.from()
// const text = 'ini adalah text';
// const result = Buffer.from(text);
// console.log(result);

// todo menggunakan buffer.write();
// const text = 'ini adalah text';
// const buff = Buffer.alloc(20);

// buff.write(text);
// console.log(buff);

// Buffer.poolSize();
// Buffer.from();
// Buffer.of();
// Buffer.alloc();
// Buffer.allocUnsafe();
// Buffer.allocUnsafeSlow();
// Buffer.isBuffer();
// Buffer.compare();
// Buffer.isEncoding();
// Buffer.concat();
// Buffer.byteLength();

// * pengenalan buffer
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(3, 'hay');
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1, 2, 3]);
// const buf5 = Buffer.from([257, 257.5, -255, '1']);
// console.log(buf5);

const buff = Buffer.from('hello world', 'utf-8');

// todo konversi utf-8 ke hexadecimal
// const convertHex = buff.toString('hex');

// todo konversi utf-8 ke base64
// const convertBase64 = buff.toString('base64');

// console.log(convertBase64);

// todo tipe tipe encoding di buffer
// const text = 'jufron tamo ama';

// const result1 = Buffer.from(text, 'utf-8');
// const result2 = Buffer.from(text, 'utf16le');
// const result3 = Buffer.from(text, 'ascii');
// const result4 = Buffer.from(text, 'base64');
// const result5 = Buffer.from(text, 'base64url');
// const result6 = Buffer.from(text, 'binary');
// const result7 = Buffer.from(text, 'hex');
// const result8 = Buffer.from(text, 'latin1');
// const result9 = Buffer.from(text, 'ucs-2');
// const result10 = Buffer.from(text, 'ucs2');
// const result11 = Buffer.from(text, 'utf16le');
// const result12 = Buffer.from(text, 'utf8');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result6);
// console.log(result7);
// console.log(result8);
// console.log(result9);
// console.log(result10);
// console.log(result11);
// console.log(result12);

const text = 'hallo ini adalah text string';

const buf = Buffer.from(text, 'utf-8');
console.log(buf.toString('base64'));