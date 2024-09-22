import { Component } from '@angular/core';
import { Todo } from './todoTypes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  allTodos: Todo[] = []
  emptyInputError: string = '';
  constructor(){
  }

  onSubmit(todoInput: HTMLInputElement) {
    const value = todoInput.value.trim();
    if (value.length !== 0) {
      this.todoAdd(value); 
      todoInput.value = ''; 
    }
  }
  
  todoAdd (newTodo: string){
    if (newTodo.length !== 0) {
      
      this.emptyInputError = '';
      const newTodoObj: Todo = {
        id: Date.now(),
        value: newTodo,
        isCheck: false
      }
      this.allTodos.unshift(newTodoObj);
      newTodo = ''
    } else {
      this.emptyInputError = "Sorry input field is empty"
    }
  }

  todoDelete (id: number){
    this.allTodos = this.allTodos.filter(( obj ) => obj.id !== id);
  }

  todoCheck(id: number){
    this.allTodos = this.allTodos.map(( obj ) => {
      if (obj.id === id) {
        console.log({...obj, isCheck: !obj.isCheck});
        
        return {...obj, isCheck: !obj.isCheck}
      }
      return obj;
    });
  }

}
