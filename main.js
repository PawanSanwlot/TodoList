import './style.css'
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    task: "Run",
    createdAt: Date.now(),
    isFinished: false
  }
]

const todoLiElements = todos.map((todo) => {
  return `<div class="task-container">
      <li class="list-group-item task">${todo.task}</li>
      <button class="btn btn-outline-danger btn-sm delete-btn" id=${`${uuidv4()}`}>Delete</button>
    </div>`
})

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1 class="heading">My Todo list!</h1>
    <input type="text" placeholder="Add Task" class="form-control add-task-input">
    <button id="add-btn"  class="btn btn-success">Add</button>
    <ul class="list-group">${todoLiElements.join("")}</ul>
  </div>
`
const ul = document.querySelector(".list-group")
const addTaskBtn = document.getElementById('add-btn')
const taskInput = document.querySelector(".add-task-input")

function handleClick() {
  if(taskInput.value !== "") {
    // Making a list Item

    // 1. Creating Elements
    const div = document.createElement("div")
    const li = document.createElement("li")
    const btn = document.createElement("button")

    // 2. Placing Elements accordingly
    ul.appendChild(div)
    div.appendChild(li)
    div.appendChild(btn)

    // 3. Adding text accordingly
    btn.textContent = "Delete"
    li.textContent = taskInput.value

    // 4. add classes to the elements
    div.classList.add("task-container")
    li.classList.add("list-group-item", "task")
    btn.classList.add("btn", "btn-outline-danger", "btn-sm", "delete-btn")
    
    // pushing task data to the todos array 
    todos.push({
      task: taskInput.value,
      createdAt: Date.now(),
      isFinished: false
    })

    // clear the input after makin the list item
    taskInput.value = ""
  }
}

function handleInput(event){
  // console.log("user is typing..")
  // console.log(event.target.value)
}

addTaskBtn.addEventListener("click", handleClick)
taskInput.addEventListener("input", handleInput)

document.addEventListener("click", (event) => { 
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentNode.remove()
  }
  if (event.target.classList.contains("task")) {
    event.target.classList.toggle("done")
  }
})

finc

// edit button made by only js
 
// // 1. create a btn from js
// const btn = document.createElement("button")
// // 2. give text content to btn
// btn.textContent = "Edit"
// // 3. place btn in body element
// document.body.appendChild(btn)
// // 4. give some css style by js
// btn.style.color = "white"
// btn.style.backgroundColor = "black"
// btn.style.margin = "10px"
// btn.style.padding = "10px"
// btn.style.borderRadius = "10px"




// // make car drive age checker 

// // 1. create function checkUserAge
// // 2. give parameter take age as input from user
// function checkUserAge(age){
//   // 3. write a if condition that compare age value 
//   if (age > 25 ){
//     console.log("Lets Ride")
//   }
//   else{
//     console.log("Access Denied")
//   }
// }

// // 4. invoke the function
// checkUserAge(73)




// function addTwoNums(num1, num2) {
//   console.log(num1 + num2)
// }

// addTwoNums(4, 90)



// // Create function for login admin user

// //1. make a function that that take parameter for admin and password
// function loginAdminUser(user, password){
//   //2. create comdition and match the value of both admin and password match and give acess
//   if (user == "admin" && password == 1234){
//     console.log("Welcome content is loading")
//   }
//   else {
//     console.log("Permisson prohibited")
//   }
// }

// //3. invoke the fuction 
// loginAdminUser("admicn",1234)




// const james = {
//   id: 1,
//   bodyCount: 19,
//   name: "james goldberg",
//   isCriminal: true,
//   getCurrentNews: function () {
//     console.log("current news")
//   },
//   crimes: ["murder", "theft", "kidnapping"],
//   connectionsWithOtherCriminals: {
//     criminals: ["jeffery damour", "freddy cougar", "katherine thomas"],
//     bodyCount: 90
//   }
// }

// console.log(james.getCurpushrentNews())

// const array = [1,2,3]

// array.push(9)

















