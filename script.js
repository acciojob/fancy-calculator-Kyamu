// Take input for the first variable and multiply it by 2
const firstInput = prompt('Enter the first number:');
const firstResult = parseFloat(firstInput) * 2;

// Take input for the second variable
const secondInput = prompt('Enter the second number:');

// Add the second input to the result of the first input multiplied by 2
const finalResult = firstResult + parseFloat(secondInput);

// Display the final result using alert()
alert('The final result is: ' + finalResult)