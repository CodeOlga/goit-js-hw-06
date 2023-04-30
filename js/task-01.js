const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  console.log(
    `Category: ${item.firstElementChild.textContent}
      Elements: ${item.lastElementChild.children.length}`
  );
});
