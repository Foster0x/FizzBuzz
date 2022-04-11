// Sep One - controller/accepts requests
function getValues() {
    // Get values from user
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    // Check for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        displayValues(fizzValue, buzzValue);
    } else {
        alert("You must enter integers!");
    }
}
// Final Step - view
function displayValues(fizz, buzz) {
    element = document.getElementById("results");
    // For loop to display 0-100
    for (let i = 1; i < 101; i++) {
        let item = document.createElement("div");
        item.classList.add("col");
        // Test if divisible by fizz and buzz-If true replace with FIZZBUZZ
        if (i % 3 == 0 && i % 5 == 0) {
            item.classList.add("fizzbuzz")
            item.innerHTML = 'FizzBuzz';
        }
        // Test if divisible by fizz only-If true replace with FIZZ
        else if (i % 3 == 0) {
            item.classList.add("fizz");
            item.innerHTML = 'Fizz';
        }
        // Test if divisible by buzz only-If true replace with BUZZ
        else if (i % 5 == 0) {
            item.classList.add("buzz");
            item.innerHTML = 'Buzz';
        }
        // Finally just print number
        else {
            item.innerHTML = i;
        }
        element.appendChild(item);
    }
}