const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const resetButton = document.getElementById('reset');
const deleteButton = document.getElementById('delete');
 
let currentExpression = '';
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
 
        if (value === '=') {
            // Calculate the result of the current expression
            try {
                const result = eval(currentExpression);
                display.textContent = result;
                currentExpression = result.toString();  // Store the result for further operations
            } catch {
                display.textContent = 'Error';
                currentExpression = '';
            }
        } else if (value === 'C') {
            // Clear the expression and display
            currentExpression = '';
            display.textContent = '0';
        } else if (value === '⌫') {
            // Clear the expression and display
            currentExpression = currentExpression.slice(0, -1);
            display.textContent = currentExpression || '0'; 
        } else {
            // Add value to the current expression
            currentExpression += value;
            display.textContent = currentExpression;
        }
    });
});