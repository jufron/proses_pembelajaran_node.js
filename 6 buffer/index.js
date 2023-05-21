import { Buffer } from 'node:buffer';


const text = 'jufron tamo ama';

const buf = Buffer.from(text, 'utf-8');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));