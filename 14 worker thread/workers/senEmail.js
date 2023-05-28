import { parentPort, threadId } from 'node:worker_threads';


parentPort.on('message', message => {

  let counter = 0;
  for (let i = 0; i <= message; i++) {
    counter += i;
    processSuperBerat(counter);
    parentPort.postMessage(counter);
  }

  parentPort.close();
});

const processSuperBerat = (counter) => {
  console.log(`send email ${counter}`);
};