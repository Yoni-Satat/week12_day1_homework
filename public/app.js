const app = function() {
  // const catList = document.createElement('ul');
  // catList.classList.add('cat');

  // const listItemName = document.createElement('li');
  // listItemName.innerText = "Fig and Tenne";
  //
  // const listItemVafouriteFood = document.createElement('li');
  // listItemVafouriteFood.innerText = "Anything";

  // const catImage = document.createElement('li');
  // const img = document.createElement('img');
  // catImage.appendChild(img);
  // img.src = "https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2016/02/featured-image_adopt-2-cats-blog-858x429.jpg";

  // catList.appendChild(listItemName);
  // catList.appendChild(listItemVafouriteFood);
  // catList.appendChild(catImage);

  // const cats = document.querySelector('#cats');
  // cats.appendChild(catList);

  const addNewCat = function(name, food, url){
    const ul = addUl();
    const liName = addLiText(name);
    const liFavFood = addLiText(food);
    const addImage = addCatImage(url);
    const cats = document.querySelector('#cats');
    const connectAll = append(ul, liName, liFavFood, addImage, cats);
  }

  const addUl = function() {
    const catList = document.createElement('ul');
    catList.classList.add('cat');
    return catList;
  }

  const addLiText = function(text) {
    const listItemName = document.createElement('li');
    listItemName.innerText = text;
    return listItemName;
  }

  const addCatImage = function(catUrl) {
    const catImage = document.createElement('li');
    const img = document.createElement('img');
    catImage.appendChild(img);
    img.src = catUrl;
    return catImage;
  }

  const append = function(catList, listItemName, listItemVafouriteFood, catImage, cats) {
    catList.appendChild(listItemName);
    catList.appendChild(listItemVafouriteFood);
    catList.appendChild(catImage);

    cats.appendChild(catList);
  }

  addNewCat("Yoni", "Banana", "https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2016/02/featured-image_adopt-2-cats-blog-858x429.jpg")

};









document.addEventListener("DOMContentLoaded", app);
