import https from 'node:https';
import http from 'node:http';

const endpoint = 'https://eorab75w72hu784.m.pipedream.net';

const req = https.request(endpoint, response => {
  const { statusCode, statusMessage, headers } = response;
  response.setEncoding('utf-8');

  console.log(`response status code : ${statusCode}`);
  console.log(`response status message : ${statusMessage}`);

  console.log(`content type : ${headers['content-type']}`);
  console.log(`content length : ${headers['content-length']}`);
  console.log(`access controll allow origin : ${headers['access-control-allow-origin']}`);

  response.on('data', chunk => {
    console.log(`recived response data using event emit data ${chunk.toString()}`);
  });

  response.on('error', error => console.error(`response error ${error}`));
  response.on('end', () => console.log('response finished'));
  response.on('close', () => console.log(`response close`));
});

req.method = 'GET';
req.setHeader('Content-Type', 'application/json');
req.setHeader('accept', 'application/json');

req.on('timeout', () => console.log('request time out'));
req.on('abort', () => console.log('request aborted'));
req.on('finish', () => console.log('request finished'));
req.on('close', () => console.log('request is close'));
req.on('error', error => console.error(error));



req.end();