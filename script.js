const display = document.getElementById('display');
const history = document.getElementById('history');


function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}


function clearDisplay() {
    display.textContent = '0';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}



function calculate() {
    try {
        const result = eval(display.textContent);
        history.innerHTML += `<div>${display.textContent} = ${result}</div>`;
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}




document.addEventListener('keydown', (event) => {
    const key = event.key;

    
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        appendToDisplay(key);
    } 
    
    else if (key === 'Enter') {
        calculate();
    } 
    
    else if (key === 'Backspace') {
        backspace();
    } 
    
    else if (key === 'Escape') {
        clearDisplay();
    }
});
