const listOfCategoriesEl = document.querySelector('#categories');

console.log(`Number of categories: ${listOfCategoriesEl.children.length}`);
console.log('');

for (let category of listOfCategoriesEl.children) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
    console.log('');
}