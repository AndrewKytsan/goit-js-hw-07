const size = document.getElementById('font-size-control');
const text = document.getElementById('text');

function changeSize(){
text.style.fontSize = `${size.value}px`
}
size.addEventListener('input',changeSize);