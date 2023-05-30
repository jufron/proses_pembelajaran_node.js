import cluster from 'node:cluster';
import { cpus } from 'node:os';
import { pid } from 'node:process';
import http from 'node:http';

const coreCPU = cpus().length;

// coordinator cluster
if (cluster.isPrimary) {
  console.log(`Primary : ${pid} is running`);

  for (let i = 0; i <= coreCPU; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker : ${worker.id} is emited or exit`);   
    cluster.fork();
  });
}

// worker cluster
if (cluster.isWorker) {

  const server = http.createServer((request, response) => {
    response.write({message: 'success'});
    response.end();

    setTimeout(() => {
      process.end();
    }, 2000);
  });


  server.listen(3000, () => {
    console.log(`server is running http://localhost:3000`);
  });

  console.log(`Worker : ${pid} is running`);
}