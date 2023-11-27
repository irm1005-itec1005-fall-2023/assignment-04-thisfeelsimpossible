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

// all taken from: https://m.youtube.com/watch?v=G0jO8kUrg-I&pp=ygUGI3l1ZGl2

let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  //if(inputBox.value === '') {
    //alert("Write something");
  //}
  //else { 
    {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let button = document.createElement("button");
    button.innerHTML = "\u00d7";
    li.appendChild(button);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(event) {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveData();
  }
  else if(event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    saveData();
  }
}, false);

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