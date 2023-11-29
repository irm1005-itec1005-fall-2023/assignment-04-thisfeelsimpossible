/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
//const appID = "app";
//const headingText = "To do. To done. ✅";

// DOM Elements
//let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
//function inititialise() {
  // If anything is wrong with the app container then end
  //if (!appContainer) {
    //console.error("Error: Could not find app contianer");
    //return;
  //}

  // Create an h1 and add it to our app
  //const h1 = document.createElement("h1");
  //h1.innerText = headingText;
  //appContainer.appendChild(h1);

  // Init complete
  //console.log("App successfully initialised");
//}

//  https://m.youtube.com/watch?v=G0jO8kUrg-I&pp=ygUGI3l1ZGl2

//adding a task

let tasks = [];

let taskInput = document.getElementById("input-box")
  let taskList = document.getElementById("list-container")
//   // let taskForm = document.getElementById("form")

//   // let taskInputTwo = document.getElementById('input-box');

//   //just added this one below beacuse seeing the red error in the console log was making me mad
  let listContainer = document.getElementById("list-container"); 

  let list = document.querySelector('ul'); 
  


let addButton = document.getElementById("btn")
console.log(addButton);

addButton.addEventListener("click", addTask)

function addTask(event) {
  console.log("add button is clicked")
  event.preventDefault();

  let taskText = taskInput.value

  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    //when the task is clicked, it should be marked as completed
    //li.addEventListener("click", markTaskCompleted)
    taskList.appendChild(li);

    taskInput.value = "";

    tasks.push(taskText);

  renderList();
}
}

 function renderList() {
console.log("render list", tasks);

listContainer.innerHTML = "";

for(let i = 0; i < tasks.length; i++) {
  let tempName = document.createElement("li");
  tempName.textContent = tasks[i];
  listContainer.prepend(tempName);
}
 } 


// // Handle form submission
// taskForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Get the task input value
//   //let taskInputTwo = document.getElementById('input-box');
//   //let taskText = taskInput.value.trim();

//   if (taskText !== '') {
//     // Create a new task item
//     let taskItem = document.createElement('li');
//     taskItem.textContent = taskText;

//     // Append the task item to the task list
//     taskList.appendChild(taskItem);

//     // Clear the task input
//     taskInputTwo.value = '';
//   }
// });




///////////////////////////////////////
 //marking task as completed or checked

//  function markTaskCompleted(event) {
//   let li = event.target;
//   li.classList.toggle("completed"); 

// let taskText = li.textContent;
// let taskIndex = tasks.findIndex(task => task.text === taskText);

// if (taskIndex !== -1) {
//   tasks[taskIndex].completed = li.classList.contains("completed");
// }

// //renderList();
//  }


 //this is so that it actually shows the completion on the website
 list.addEventListener("click", function(event) {
   if (event.target.tagName === "LI") {
     event.target.classList.toggle("checked", "close");
   }
 }, false);






//  function toggleDone(itemKey) {
//   const task = tasks.find(task => task.key === itemKey);

//   if (task) {
//     task.completed = !task.completed;
//     renderList();
//   }
// }

// function renderList() {
//   for(let i = 0; i < tasks.length; i++) {
//     let task = tasks[i];
//     let listItem = document.createElement("click");
//     listItem.textContent = task.name;
    
//     if (task.completed) {
//       listItem.classList.add("completed");
//     }
    
//     listItem.dataset.key = task.key;
//     listItem.classList.add("text");
//     listContainer.appendChild(listItem);
//   }
// }


// list.addEventListener("click", function(event) {
//   if (event.target.tagName === 'LI') {
//     const li = event.target;
//     li.classList.toggle('checked');

//     const index = tasks.from(li.parentNode.children).indexOf(li);
//     tasks[index].completed = li.classList.contains('checked');
//   }
// }, false);


// list.addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     const li = event.target;
//     const isCompleted = li.classList.contains('checked');

//     // Toggle the 'checked' class only if it is not already present
//     if (!isCompleted) {
//       li.classList.add('checked');
//     } else {
//       li.classList.remove('checked');
//     }
//   }
// }, false);


// list.addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     const li = event.target;
//     const isCompleted = li.classList.contains('checked');

//     // Toggle the 'checked' class only if it is not already present
//     if (!isCompleted) {
//       li.classList.add('checked');
//     } else {
//       li.classList.remove('checked');
//     }
//   }
// }, false);







//////////////////////////////



function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

////////////////////////////////
// list.addEventListener("click", event => { //run the toggleDone on the whole list and use the event object
//   if (event.target.classList.contains(text)) {
//   const itemKey = event.target.parentElement.dataset.key;
//   toggleDone(itemKey);
//   }
//  });

//
// Inits & Event Listeners
//
//inititialise();