import http from 'node:http';
import routes from './src/routes.js';

const port = 3000;

const server = http.createServer((request, response) => {
  routes(request, response);
});

server.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});

server.on('close', () => {
  console.log(`server is shuting down`);
  process.exit(0);
});

server.on('error', error => console.log(`terjadi kesalahan ${error}`));