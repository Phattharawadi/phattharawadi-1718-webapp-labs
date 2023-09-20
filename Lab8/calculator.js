import inquirer from 'inquirer';

const [,, firstNumber, secondNumber] = process.argv; 

// Check if values are null, undefined, or not numbers
if (!firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('Please enter two numbers');
    process.exit(1); // Exit with an error code
}

inquirer.prompt([
    {
        type: 'input',
        name: 'operation',
        message: 'add | subtract'
    }
])
.then(answers => {
    switch (answers.operation) {
        case 'add':
            console.log(`${firstNumber} + ${secondNumber} = ${parseFloat(firstNumber) + parseFloat(secondNumber)}`);
            break;
        case 'subtract':
            console.log(`${firstNumber} - ${secondNumber} = ${parseFloat(firstNumber) - parseFloat(secondNumber)}`);
            break;
        default:
            console.log('unknown operator');
    }
});
