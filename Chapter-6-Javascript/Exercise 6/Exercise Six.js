/* The window.onload event triggers when the webpage fully loads, ensuring all elements are accessible before the code runs. */
window.onload = () => {
    /* The document.querySelectorAll("input") method selects all <input> elements on the page, storing them in the inputs variable as a NodeList. */
    const inputs = document.querySelectorAll("input");
    /* The forEach method loops through each input element in the NodeList, allowing individual event handling for every input. */
    inputs.forEach(input => {
        /* The addEventListener method attaches a 'change' event to each input, running the calculate function when the input’s value changes. */
        input.addEventListener('change', calculate);
    });
};

/* The calculate function computes the total cost based on user-entered petrol price and liters. */
function calculate() {
    /* The document.querySelector('#Petrol_Price').value retrieves the current value of the input element with id="Petrol_Price", storing it as Petrol_Price. */
    const Petrol_Price = document.querySelector('#Petrol_Price').value;
    /* The document.querySelector('#liters').value gets the value of the input element with id="liters", storing it as liters. */
    const liters = document.querySelector('#liters').value;
    /* The if statement checks if either Petrol_Price or liters is empty or invalid, exiting the function to avoid errors if data is missing. */
    if (!Petrol_Price || !liters) return;
    /* The document.querySelector('#totalAmount').innerText sets the text content of the element with id="totalAmount" to the result of multiplying Petrol_Price by liters, displaying the total cost. */
    document.querySelector('#totalAmount').innerText = Petrol_Price * liters;
}