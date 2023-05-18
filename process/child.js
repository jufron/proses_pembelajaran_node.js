import { on } from 'node:events';

on('message', message => {
  console.log(`menerima pesan dari proses utama ${message}`);

  process.send('hallo, pesan utama');
});

