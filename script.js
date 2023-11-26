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

let superHeroNameForm = document.getElementById("form-2");

let superHeroNameInput = document.getElementById("task-input");

let superHeroList = document.getElementById("task-list-1");

let superHeroCountP = document.getElementById("task-count");

// Array of super heroes
let superHeroArray = [];

superHeroNameForm.addEventListener("submit", handleSuperHeroFormSubmit);

function handleSuperHeroFormSubmit(event){

  // Prevent the default behavior of the form
  event.preventDefault();

  // Get the value of the input
  const inputValue = superHeroNameInput.value;

// Push the new hero onto the array
superHeroArray.push(inputValue);

renderList(); // Call the renderList function

}



function renderList() {
  console.log("Render List:", superHeroArray);

  superHeroList.innerHTML = "";

  for(let index = 0; index < superHeroArray.length; index++) {
    let tempName = document.createElement("li");
  tempName.textContent = superHeroArray[index];

 
  superHeroList.prepend(tempName);

  }

  if ( superHeroArray.length === 0 ) {
    superHeroCountP.textContent = "No Tasks To Do! Yay!"
  }
  else {
    superHeroCountP.textContent = "There are " + superHeroArray.length + " Tasks To Do!";
  }


}

renderList();


//
// Inits & Event Listeners
//
//inititialise();