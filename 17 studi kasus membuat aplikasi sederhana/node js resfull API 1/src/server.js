import http from 'node:http';
import { URL } from 'node:url';
import TodolistService from './todolistService.js';


const todolistService = new TodolistService();

const server = http.createServer((request, response) => {

  if (request.method === 'GET') {
    todolistService.getTodolist(request, response);
  } else if (request.method === 'POST') {
    todolistService.createTodolist(request, response);
  } else if (request.method === 'PUT') {
    todolistService.updateTodolist(request, response);
  } else if (request.method === 'DELETE') {
    todolistService.deleteTodolist(request, response);
  }
});

server.on('error', error => {
  console.error(`terjadi kesalahan : ${error.message}`);
});
 
server.listen(3000, () => {
  console.log('server running : http://localhost:3000');
});

server.on('close', () => {
  console.log('server is shutting down');
  process.exit(0);
});