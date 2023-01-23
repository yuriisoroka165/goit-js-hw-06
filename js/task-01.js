const listOfCategoriesEl = document.querySelector('#categories');
const numbersOfCategories = listOfCategoriesEl.children.length;

console.log(`Number of categories: ${numbersOfCategories}`);
console.log('');

for (let category of listOfCategoriesEl.children) {
    console.log(`Category: ${category.children[0].textContent}`);
    console.log(`Elements: ${category.children[1].children.length}`);
    console.log('');
}