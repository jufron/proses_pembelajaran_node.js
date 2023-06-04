

const createResponse = (response, data, responseHeader) => {
  const {status, message} = responseHeader;

  response.statusCode = status;
  response.statusMessage = message;
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('accept', 'application/json');

  if (data === null) {
    response.write(JSON.stringify({
      status : status,
      message : message,
    }));
    response.end();
  } else {
    response.write(JSON.stringify({
      status : status,
      message : message,
      data
    }));
    response.end();
  }
}

export default createResponse;