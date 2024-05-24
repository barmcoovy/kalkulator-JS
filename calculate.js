const display = document.getElementById('result');
const operators = document.querySelectorAll('.operator');
function appendToDisplay(value){
    display.value += value;
}


function clearDisplay() {
    display.value = "";
}
function calculate(result){
    try{
        result = changeSystem();
        display.value = result;
    }
    catch(error){
        display.value = "Błąd!";
    }
    
}

function changeSystem(){
    const selectSystem = document.getElementById('system').value;
    let result;
    let decimalValue = parseInt(display.value, 10);
    
    for(let i=0; i<operators.length;i++){
        operators[i].disabled = selectSystem !== 'decimal';
    }

    if (selectSystem === 'hexadecimal') {
        display.value = "";
        result = decimalToHexString(decimalValue);
    }
    if (selectSystem === 'octal') {
        display.value = "";
        result = decimalToOctalString(decimalValue);
    } 
    if (selectSystem === 'binary') {
        display.value = "";
        result = decimalToBinaryString(decimalValue);
    } 
    if (selectSystem === 'decimal') {
        let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');
        result= eval(expression);
        display.value = "";
    }
    return result;
}


function deleteLast(){
    let currentDisplay = display.value;

    if(currentDisplay !==""){
        const lastChar = currentDisplay.charAt(currentDisplay.length-1);
        if(lastChar ==='+' || lastChar ==='÷' || lastChar ==='x' || lastChar ==='-'){
            return;   
        }
        else{
            currentDisplay = currentDisplay.slice(0,-1);
        }
        
        display.value = currentDisplay;
    }
}



function decimalToHexString(number) {

    let hexString = number.toString(16).toUpperCase();
    return hexString;
}

function decimalToOctalString(number){
    let octalString = number.toString(8).toUpperCase();
    return octalString;
}

function decimalToBinaryString(number){
    let binaryString = number.toString(2).toUpperCase();
    return binaryString;
}

function sqrtNumber(){
    try{
         display.value = Math.sqrt(display.value);
    }
    catch(error){
        display.value = "Błąd!";
    }
}