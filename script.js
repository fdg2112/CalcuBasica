const input1 = document.getElementById("display1");
const input2 = document.getElementById("display2");
const resultInput = document.getElementById("result");

function calculate(operator) {
    switch (operator) {
        case '+':
            resultInput.value = parseFloat(input1.value) + parseFloat(input2.value);
            break;
        case '-':
            resultInput.value = parseFloat(input1.value) - parseFloat(input2.value);
            break;
        case '*':
            resultInput.value = parseFloat(input1.value) * parseFloat(input2.value);
            break;
        case '/':
            if (parseFloat(input2.value) !== 0) {
                resultInput.value = parseFloat(input1.value) / parseFloat(input2.value);
            } else {
                alert("Cannot divide by zero");
                resultInput.value = '';
            }    
    } 
}