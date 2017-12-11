const app = function() {
  const catList = document.createElement('ul');
  catList.classList.add('cat');

  const listItemName = document.createElement('li');
  listItemName.innerText = "Fig and Tenne";

  const listItemVafouriteFood = document.createElement('li');
  listItemVafouriteFood.innerText = "Anything";

  const catImage = document.createElement('li');
  const img = document.createElement('img');
  catImage.appendChild(img);
  img.src = "https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2016/02/featured-image_adopt-2-cats-blog-858x429.jpg";

  catList.appendChild(listItemName);
  catList.appendChild(listItemVafouriteFood);
  catList.appendChild(catImage);

  const cats = document.querySelector('#cats');
  cats.appendChild(catList);
}

document.addEventListener("DOMContentLoaded", app);
