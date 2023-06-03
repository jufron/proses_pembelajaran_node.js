


export const createResponse = (response, dataResponse) => {
  response.writeHead(200, {
    'Content-Type' : 'application/json',
    'accept' : 'application/json'
  });

  response.write(dataResponse);
  response.end();
};