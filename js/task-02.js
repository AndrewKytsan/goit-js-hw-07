const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listOfIngredients=document.getElementById('ingredients');
const list = [];
ingredients.forEach((ingredient)=>{
const listPoint =document.createElement('li')
listPoint.textContent= ingredient;
list.push(listPoint);
listOfIngredients.append(...list);
})