// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', () => {
  description.textContent = 'The text has been updated dynamically!';
});

// Modify CSS styles dynamically
const changeColorBtn = document.getElementById('change-color-btn');
const colorBox = document.getElementById('color-box');

changeColorBtn.addEventListener('click', () => {
  colorBox.style.backgroundColor = 'coral'; // Change to any color
  colorBox.style.borderRadius = '15px';
});

// Add or remove an element dynamically
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const itemList = document.getElementById('item-list');

addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

removeItemBtn.addEventListener('click', () => {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
  }
});
