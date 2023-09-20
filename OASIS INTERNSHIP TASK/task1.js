 function appendToResult(value) {
        document.getElementById('result').value += value;
    }

    function calculate() {
        try {
            const expression = document.getElementById('result').value;
            const result = eval(expression);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }

    function squareRoot() {
        try {
            const expression = document.getElementById('result').value;
            const result = Math.sqrt(eval(expression));
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }

    function clearResult() {
        document.getElementById('result').value = '';
    }
