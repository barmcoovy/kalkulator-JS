const result = {
    value: ""
};

const display = document.getElementById('result');

function appendToDisplay(value) {
    if(value ==='÷' || value ==='+' || value ==='-' || value ==='x'){
        display.value = "";
        result.value +=value;
        return;
    }
    result.value += value;
    display.value +=value;
    
}

function clearDisplay() {
    result.value = "";
    display.value = result.value;
}

function calculate() {
    try {
        let expression = result.value.replace(/x/g, '*').replace(/÷/g, '/');
        let resultDecimal = eval(expression);
        if (document.getElementById('system').value === 'hexadecimal') {
            let resultHex = decimalToHexString(resultDecimal);
            display.value = resultHex;
            result.value = resultHex;
        } else {
            display.value = resultDecimal;
            result.value = resultDecimal;
        }
    } catch (error) {
        display.value = "Błąd";
    }
}


function deleteLast(){
    let currentResult = result.value;

    if(currentResult !==""){
        const lastChar = currentResult.charAt(currentResult.length-1);
        if(lastChar ==='+' || lastChar ==='÷' || lastChar ==='x' || lastChar ==='-'){
            return;   
        }
        else{
            currentResult = currentResult.slice(0,-1);
        }
        
        result.value = currentResult;
        display.value = currentResult;
    }
}
    // konwertuj na szesnastkowy

    document.getElementById('system').addEventListener('change', function() {
        if (this.value === 'hexadecimal') {
            document.querySelectorAll('.operator').forEach(function(button) {
                button.setAttribute('disabled', 'true');
            });
            let resultDecimal = parseInt(result.value, 10);
            display.value = resultDecimal.toString(16).toUpperCase();
            result.value = display.value;
        } else {
            document.querySelectorAll('.operator').forEach(function(button) {
                button.removeAttribute('disabled');
            });
            display.value = result.value;
        }
    });
    





    function decimalToHexString(number) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
    
        let hexString = number.toString(16).toUpperCase();
        while (hexString.length < 6) {
            hexString = '0' + hexString;
        }
    
        return hexString;
    }
    