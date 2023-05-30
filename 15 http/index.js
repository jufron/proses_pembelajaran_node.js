import https from 'node:https';

const postData = JSON.stringify({
  message : 'hello world'
});

const endpoint = 'https://eorab75w72hu784.m.pipedream.net';

const option = {
  method : 'POST',
  Headers : {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  }
}

const req = https.request(endpoint, option, response => {

  response.setEncoding('utf-8');

  response.on('data', chunk => {
    console.log(`body : ${chunk.toString()}`);
  });

  response.on('data', () => {
    console.log('no more data in response');
  });
});

req.on('error', err => {
  console.error(`problem request ${err}`);
});


req.write(postData);
req.end();