const inputForChecking = document.getElementById('validation-input')

function checkInput(text){
if(text.currentTarget.value.length==inputForChecking.dataset.length){
    inputForChecking.classList='valid';
}
else {inputForChecking.classList='invalid'};
}
inputForChecking.addEventListener('blur',checkInput);