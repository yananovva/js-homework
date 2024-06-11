document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultSpan = document.getElementById('result');

    document.querySelectorAll('button[data-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            switch (action) {
                case 'multiply':
                    multiplyNumbers();
                    break;
                case 'divide':
                    divideNumbers();
                    break;
                case 'add':
                    addNumbers();
                    break;
                case 'subtract':
                    subtractNumbers();
                    break;
            }
        });
    });

    function addNumbers() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 + num2;
        resultSpan.textContent = `Результат: ${result}`;
        num1Input.value = '';
        num2Input.value = '';
    }

    function subtractNumbers() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 - num2;
        resultSpan.textContent = `Результат: ${result}`;
        num1Input.value = '';
        num2Input.value = '';
    }

    function multiplyNumbers() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 * num2;
        resultSpan.textContent = `Результат: ${result}`;
        num1Input.value = '';
        num2Input.value = '';
    }

    function divideNumbers() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        if (num2 === 0) {
            resultSpan.textContent = 'Деление на ноль невозможно';
        } else {
            const result = num1 / num2;
            resultSpan.textContent = `Результат: ${result}`;
        }
        num1Input.value = '';
        num2Input.value = '';
    }
});