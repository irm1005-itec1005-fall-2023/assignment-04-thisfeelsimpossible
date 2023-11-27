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


let addButton = document.getElementById("btn")
console.log(addButton);

addButton.addEventListener("click", addTask)

function addTask(event) {
  console.log("i was clicked")
  event.preventDefault();

  let taskText = taskInput.value

  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
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











function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//
// Inits & Event Listeners
//
//inititialise();