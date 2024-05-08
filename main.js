import './style.css'

document.getElementById('app').innerHTML = `
  <div class="container">
    <h1 class="heading">My Todo list</h1>
    
    <input type="text" placeholder="Add Task" class="form-control add-task-input">
    <button class="btn btn-success">Add</button>
    <ul class="list-group">
      <div class="task-container">
        <li class="list-group-item">Wake Up Early</li>
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
      <div class="task-container">
        <li class="list-group-item">Wake Up Early</li>
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
      <div class="task-container">
        <li class="list-group-item">Wake Up Early</li>
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
      <div class="task-container">
        <li class="list-group-item">Wake Up Early</li>
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </ul>

  </div>
`


