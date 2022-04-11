// Sep One - controller/accepts requests
function getValues() {
    // Get values from user
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    // Check for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbValues = fizzBuzzA(fizzValue, buzzValue);
        displayValues(fbValues);
    } else {
        alert("You must enter integers!");
    }
}
// Business Logic layer - Model
function fizzBuzzA(fizz, buzz) {
    // Create array
    let fbValues = [];
    for (let i = 1; i < 101; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push('FizzBuzz');
        } else if (i % fizz == 0) {
            fbValues.push('Fizz');
        } else if (i % buzz == 0) {
            fbValues.push('Buzz');
        } else {
            fbValues.push(i);
        }
    }
    return fbValues;
}
// Final Step - view
function displayValues(fbValues) {
    let element = document.getElementById("results");
    // For loop
    for (let i = 0; i < fbValues.length; i++) {
        let item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = fbValues[i];
        if (fbValues[i] == 'Fizz') {
            item.classList.add("fizz");
        } else if (fbValues[i] == 'Buzz') {
            item.classList.add("buzz");
        } else if (fbValues[i] == 'FizzBuzz') {
            item.classList.add("fizzbuzz");
        }
        element.appendChild(item);
    }
}