import net from 'node:net';


const connection = net.createConnection({
  port: 3000, 
  host: 'localhost'
}, () => {
  console.log('connected to server!');
});

setInterval(() => {
  // send data client to server using delay
  connection.write('jufron\r\n');
}, 2000);


connection.on('data', data => {
  // recive data from server to client
  console.log(`recive data from server ${data.toString()}`);
});

connection.on('error', err => {
  console.error(err);
})

connection.on('end', () => {
  console.log('dissconnect from server');
});