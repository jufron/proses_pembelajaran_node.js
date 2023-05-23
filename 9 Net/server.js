import net from 'node:net';


net.createServer( client => {

  console.log('client conneciton');

  client.on('end', () => {
    console.log('client dissconnet');
  });

  client.on('data', data => {
    console.log(`recive data form client : ${data.toString()}`);
    client.write(`hello : ${data.toString()}\r\n`);
  });
})

.on('error', err => {
  throw err
})

.listen(3000, 'localhost');