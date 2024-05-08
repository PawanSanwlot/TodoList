import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1 class="heading">My Todo list!</h1>

    <input type="text" placeholder="Add Task" class="form-control add-task-input">
    <button id="add-btn"  class="btn btn-success">Add</button>
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

const addTaskBtn = document.getElementById('add-btn')
const taskInput = document.querySelector(".add-task-input")

function handleClick() {
  console.log("button was clicked!")
}

function handleInput(event){
  console.log("user is typing..")
  console.log(event.target.value)
}

addTaskBtn.addEventListener("click", handleClick)
taskInput.addEventListener("input", handleInput)





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
//   crimes: ["murder", "theft", "kidnapping"],
//   connectionsWithOtherCriminals: {
//     criminals: ["jeffery damour", "freddy cougar", "katherine thomas"],
//     bodyCount: 90
//   }
// }

// console.log( james.connectionsWithOtherCriminals.criminals[2])

















