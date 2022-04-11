// Sep One - controller/accepts requests
function getMessage() {
    let msg = document.getElementById("txtMessage").value;
    displayMessage(msg);
}

// Final Step - view
function displayMessage(message) {

    // First get the ol element from the page
    element = document.getElementById("results");
    // Next creat a new li element
    let item = document.createElement("li");
    // Add classes to the li element
    item.classList.add("list-group-item");
    // Set the message for the li element
    item.innerHTML = message;
    // Add the new item to the list 
    element.appendChild(item);
}