document.addEventListener('DOMContentLoaded', function() {
        let result = document.getElementById('result');
        let clearButton = document.getElementById('clear');
        let equalsButton = document.getElementById('equals');
        let buttons = document.querySelectorAll("input[type='button']");

        buttons.forEach(function (button) {
                button.addEventListener('click', function() {
                        let buttonText = button.value;

                        if (buttonText === '=') {
                                calculate();
                        } else if (buttonText === 'c') {
                                clear();
                        } else {
                                appendToResult(buttonText);
                        }
                });
        });

        function calculate() {
                let expression = result.value;
                let operators = ['+', '-', '*', '/'];

                let pureExpression = expression.replace(/[^0-9+\-*/.]/g, '');

                for (let i = 0; i < operators.length; i++) {
                        pureExpression = pureExpression.replace(operators[i],' ' + operators[i] + ' ');
                }

                let tokens = pureExpression.split(' ');

                console.log(expression);
                console.log(pureExpression);
                console.log(tokens);

                for(let i = 0; i < tokens.length; i++) {
                        if(operators.includes(tokens[i])) {
                                let operator = tokens[i];
                                let operand1 = parseFloat(tokens[i - 1]);
                                let operand2 = parseFloat(tokens[i + 1]);

                                switch (operator) {
                                        case '+':
                                                result.value = add(operand1, operand2);
                                                break;

                                        case '-':
                                                result.value = subtract(operand1, operand2);
                                                break;

                                        case '*':
                                                result.value = multiply(operand1, operand2);
                                                break;
                                        
                                        case '/':
                                                result.value = divide(operand1, operand2);
                                                break;

                                        default:
                                                result.value = 'Error';
                                                break;
                                        }
                                break;
                        }
                }
        }

        function clear() {
                result.value = '';
        }

        function appendToResult(value) {
                result.value += value;
        }

        function add (a, b) {
                return a + b;
        }

        function subtract (a, b) {
                return a - b;
        }

        function multiply (a, b) {
                return a * b;
        }

        function divide( a, b) {
                if (b != 0) {
                        return a / b;
                } else {
                        return 'Error';
                }
        }
});