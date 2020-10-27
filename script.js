//math functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const division = (a,b) => a / b;
// grabbing buttons
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five= document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const clear = document.getElementById('clear')
const times = document.getElementById('multiplier')
const equals = document.getElementById('equals')
const divide = document.getElementById('division')


//math function
function operate(a,b,c)  {
    if (a === add )    {
        return add(b,c)
    }else if(a === subtract)    {
        return subtract(b,c)
    }else if(a === multiply)    {
        return multiply(b,c)
    }   else if(c === 0)    {
        return 'does not compute'
    }else if(a === divide)    {
        return divide(b,c)
    }   else return 'error'
    }   
//consolelogs a click    
display = document.getElementById('display');
function click(e)    {
    display.innerHTML = e.target.textContent;
}

function clearDisplay(e)    {
    display.innerHTML = ''
}

//to do the math operation you need to have a const that is doc.getelemnt or whatever that is connected to the display div, that way when an operator is clicked it can take the const that was in the div before the operator and compute it with the next variable when equal is pressed. or something

one.addEventListener('click', click);
two.addEventListener('click', click);
three.addEventListener('click', click);
four.addEventListener('click', click);
five.addEventListener('click', click);
six.addEventListener('click', click);
seven.addEventListener('click', click);
eight.addEventListener('click', click);
nine.addEventListener('click', click);
zero.addEventListener('click', click);
plus.addEventListener('click', click);
minus.addEventListener('click', click);
times.addEventListener('click', click);
equals.addEventListener('click', click);
divide.addEventListener('click', click);
clear.addEventListener('click', clearDisplay);