import net from 'node:net';



const myServer = net.createServer(client => {

  console.log('client connection');

  client.on('end', () => {
    console.log('clinet disconnect');
  });

  client.on('data', data => {
    console.log(`recive data from client : ${data.toString()}`);
    client.write(`hello ${data.toString()}`);
  });

});

myServer.on('error', err => {
  throw err;
});

myServer.listen({
  port: 3000,
  host : 'localhost'
}, () => {
  console.log('server bound');
});