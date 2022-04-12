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
function fizzBuzzB(fizz, buzz) {
    let fbValues = [];
    let isFizz = false;
    let isBuzz = false;
    for (let i = 1; i < 101; i++) {
        isFizz = i % fizz == 0;
        isBuzz = i % buzz == 0;
        switch (true) {
            case isFizz && isBuzz: {
                fbValues.push('FizzBuzz');
                break;
            }
            case isFizz: {
                fbValues.push('Fizz');
                break;
            }
            case isBuzz: {
                fbValues.push('Buzz');
                break;
            }
            default: {
                fbValues.push(i);
                break;
            }
        }
        
    }
    return fbValues;
}
function fizzBuzzC(fizz, buzz) {
    let fbValues = [];
    for (let i = 1; i < 101; i++) {
        let value = ((i % fizz == 0 ? 'Fizz' : '') + (i % buzz == 0 ? 'Buzz' : '') || i);
        fbValues.push(value);
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