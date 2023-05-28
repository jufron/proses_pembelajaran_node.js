import { Worker, threadId, isMainThread } from 'node:worker_threads';


if (isMainThread) {

  const worker1 = new Worker('./workers/senEmail.js');

  worker1.postMessage(5);
  
  worker1.on('error', err => {
    console.log(err);
  });

  worker1.on('exit', () => {
    console.log('worker finish');
  });

  worker1.on('message', message => {
    console.log(message);
  });
}