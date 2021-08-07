const categories = document.getElementById('categories');
const items = categories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`);
items.forEach((element) => {
    const title = element.querySelector('h2');
    console.log(`Категория:${title.textContent}`);
    const quantityOfCategories = element.querySelectorAll('li');
    console.log (`Количество елементов:${quantityOfCategories.length}`)
});