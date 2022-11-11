fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
  .then(response => response.json())
  .then(responce => responce['id'])
//   .then(response => console.log(responce))

