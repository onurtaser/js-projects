
const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiURL+"?_limit=10")
    .then(res => res.json())
    .then(data => {
      
      data.forEach(todo => addTodoToDOM(todo));
    })
}

const addTodoToDOM = (todo) => {

  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);
  div.classList.add("todo");

  if(todo.completed){
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);

}

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => addTodoToDOM(data));
}

const toggleCompleted = (e) => {
  if(e.target.classList.contains("todo")){
    e.target.classList.toggle("done");
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
} 

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({completed}),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const deleteTodo = (e) => {
  if(e.target.classList.contains("todo")){
    e.target.remove();

    fetch(`${apiURL}/${e.target.dataset.id}`, {
      method: "DELETE"
    });
  }
}

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos());
  document.getElementById("todo-form").addEventListener("submit", createTodo);
  document.getElementById("todo-list").addEventListener("click", toggleCompleted);
  document.getElementById("todo-list").addEventListener("dblclick", deleteTodo);
}

init();