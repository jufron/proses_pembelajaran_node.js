import http from 'node:http';

http.createServer((request, resposne) => {

  const { method, url, headers, statusCode, statusMessage, httpVersion} = request;

  console.log(`request method : ${method}`);
  console.log(`request url : ${url}`);
  console.table(headers);
  console.log(`request status code : ${statusCode}`);
  console.log(`request status message : ${statusMessage}`);
  console.log(`request HTTP version : ${httpVersion}`);

  if (method === 'POST' && url === '/') {
    request.on('data', data => {
      console.log(`response dikembalikan ${data}`);

      resposne.on('error', error => {
        console.log(error);
      });

      resposne.writeHead('200', {
        'Content-Type' : 'application/json',
        'accept' : 'application/json'
      });

      resposne.write(data);
      resposne.end();
    });
  } else {
    resposne.writeHead('404', {
      'Content-Type' : 'application/json',
      'accept' : 'application/json'
    });
  
    const data = JSON.stringify({
      message : 'fail',
      statusCode : 404
    });
  
    resposne.statusCode = 404;
    resposne.message = 'Fail';
    resposne.write(data);
    resposne.end();
  }

})
.listen(3000, () => {
  console.log(`server is running http://localhost:3000`);
});
