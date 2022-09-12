const category = document.querySelector('#categories');

const numberOfCategories = category.children;

console.log('Number of categories:', numberOfCategories.length);

for (let i = 0; i < numberOfCategories.length; i += 1) {
  console.log(' ');
  console.log('Category:', numberOfCategories[i].firstElementChild.textContent);
  console.log('Elements:', numberOfCategories[i].children[1].children.length);
}
