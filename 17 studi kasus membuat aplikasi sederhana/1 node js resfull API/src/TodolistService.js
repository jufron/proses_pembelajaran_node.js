import { createResponse } from "./helpres/createResponse.js";


class TodolistService {

  todolist = ['vue js', 'react js', 'laravel', 'javascript', 'node js', 'tailwindCSS'];

  getData () {
    return JSON.stringify({
      code : 200,
      status : 'OK',
      data : this.todolist.map((value, index) => {
        return {
          id : index,
          todo : value
        }
      })
    });
  }

  getTodolist (request, response) {
    const jsonFile = this.getData();
   createResponse(response, jsonFile);
  }

  createTodolist (request, response) {
    request.on('data', chunk => {
      const body = JSON.parse(chunk.toString());
      this.todolist.push(body.todo);
      createResponse(response, this.getData());
    });
  }

  updateTodolist (request, response) {

    request.on('data', chunk => {
      const body = JSON.parse(chunk.toString());

      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }
      createResponse(response, this.getData());
    });
  }

  deleteTodolist (request, response) {
    request.on('data', chunk => {

      const body = JSON.parse(chunk.toString());

      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }
      
      createResponse(response, this.getData());
    });
  }
}


export default TodolistService;