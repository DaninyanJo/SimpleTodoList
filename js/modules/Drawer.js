import Data from "./Data.js";


class Drawer {
  constructor() {
   

  }

  todoItem(item) {
    const todo = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.classList.add('cb')
    todo.classList.add('todo')
    todo.append(checkbox) 
    todo.append(item) 
    console.log(todo);
    return todo
  }
  render () {
    const data = new Data();
    const todoList = document.getElementById('todoList')
    let arr =  data.getData()
   arr.map((todo)=>{
     todoList.append(this.todoItem(todo));
   })
  }
}
export default Drawer;
