
const loadTodo = async() => {
          const url = "https://jsonplaceholder.typicode.com/todos";
          
        const res = await fetch(url);
        const data = await res.json();
         displayTodo(data);
}
// "userId": 1,
// "id": 5,
// "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
// "completed": false

const displayTodo = (todos) => {
         //1. 
         const todoContainer = document.getElementById('todo-container');
        todoContainer.innerHTML = '';

        todos.forEach(todo => {
          

          const todoCard = document.createElement('div');
          todoCard.innerHTML = `
          <div class="todo-card" >
          <p>${todo.completed == true ? `<i class="fa-regular fa-square-check"></i>` : `<i class="fa-solid fa-circle-xmark"></i>`}  
          <h4>${todo.title}</h4>
          </div>
          ` 

          todoContainer.append(todoCard);
        });

        

}
loadTodo()

