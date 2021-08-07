const buttonDecrement =document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]')
const counter = document.getElementById('value')

let counterValue = 0;

function decrement (){
counterValue-=1;
return counter.textContent = counterValue;
}
function increment (){
    counterValue+=1;
    return counter.textContent = counterValue;
    }

    buttonDecrement.addEventListener('click', decrement);
    buttonIncrement.addEventListener('click', increment);  