document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const number1Input = document.getElementById("number1");
  const number2Input = document.getElementById("number2");
  const selectedActionBtn = document.querySelector(".selected-action");
  const calculateBtn = document.querySelector(".btn-success");
  const resultSpan = document.querySelector(".result");
  const errorSpan = document.querySelector(".error");

  // Add event listener to the calculate button
  calculateBtn.addEventListener("click", function () {
    // Get the values of the input fields
    let number1 = parseFloat(number1Input.value);
    let number2 = parseFloat(number2Input.value);
    const action = selectedActionBtn.textContent.trim();

    // Error message on invalid input
    if (isNaN(number1) || isNaN(number2)) {
      errorSpan.innerHTML = "Input numbers only!";

      number1 = 0;
      number2 = 0;
    } else {
      errorSpan.innerHTML = "";
    }

    // Perform the calculation based on the selected action
    let result;
    switch (action) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      default:
        result = "Invalid action";
    }

    // Display the result
    resultSpan.textContent = result;
  });

  // Add event listener to the action buttons in the dropdown
  const actionButtons = document.querySelectorAll(".dropdown-item");
  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Set the selected action text to the clicked button's text
      selectedActionBtn.textContent = button.textContent;
    });
  });
});