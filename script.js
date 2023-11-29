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
//    let taskForm = document.getElementById("form")
 let exButton = document.createElement("button"); //- new

  //let taskInputTwo = document.getElementById('input-box');

//   just added this one below beacuse seeing the red error in the console log was making me mad LOL
  let listContainer = document.getElementById("list-container"); 
  let list = document.querySelector('ul'); 

 

  
//1st part 
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
  
    taskList.appendChild(li);


    taskInput.value = "";
  

    tasks.push(taskText);

   renderList();
   saveData();

  // saveData();


}
}



// ATTEMPT #2
// let addButton = document.getElementById("btn")
// console.log(addButton);

// addButton.addEventListener("click", addTask)

// function addTask(event) {
//   console.log("add button is clicked")
//   event.preventDefault();

//   let taskText = taskInput.value

//   if (taskText !== "") {
//     let li = document.createElement("li");
//     li.textContent = taskText;

// let exButton = document.createElement("button");
// exButton.textContent = "\u00D7";
// exButton.classList.add("ex-button")

// list.appendChild(exButton);
  
//     taskList.appendChild(li);

//     taskInput.value = "";

//     tasks.push(taskText);

//   renderList();
// }
// }











//RENDERINGGGGG

 function renderList() {
console.log("render list", tasks);

listContainer.innerHTML = "";

for(let i = 0; i < tasks.length; i++) {
  let tempListItem = document.createElement("li");
  tempListItem.textContent = tasks[i];

  let exButton = document.createElement("button");
  exButton.textContent = "\u00D7"; //adds the x symbol, had to look up the unique code for this
  exButton.classList.add("ex-button");
  tempListItem.appendChild(exButton);

  
  listContainer.prepend(tempListItem);

  // saveData();


}
 } 


// marking a todo as completed

let completedTasks = [];

console.log("completed tasks", completedTasks);

listContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked"); 

    saveData();

  }
}, false);



//figured this gets the job done ^


//removing a to do -this one!

let deletedTasks = []; //NEW ARRAY JUST DROPPED... SHEEEESH - this is where the deleted tasks will be stored

console.log("deleted tasks are stored here:", deletedTasks); //you will have to open up the array in the console log to see the deleted tasks


listContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("ex-button")) {
    let listItem = event.target.parentNode;
    let index = Array.from(listItem.parentNode.children).indexOf(listItem);
    
    deletedTasks.push(tasks.splice(index, 1)[0]);
    
    listItem.remove();

    renderList();
    saveData();
   
  }
});



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