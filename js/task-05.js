const userName = document.getElementById('name-input');
const answer = document.getElementById('name-output');

function addAnswer(text){
if(userName.value=== ''){
    answer.textContent = 'незнакомец'
}else
answer.textContent = userName.value;
}

userName.addEventListener('input',addAnswer);