function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(({ id, img, name }) => {
        return `
       <li data-id='${id}' class='js-card'>
      <img src="${img}" alt="${name}" width='300'>
      <h2>${name}</h2>
      
      <p ><a class='js-info' href='#'>More information</a></p>
      <button class='favoriteBtn'>Add to favorite</button>
      <button class='basketBtn'>Add to basket</button>
    </li>
    `;
      })
      .join('');
  } else {
    markup = `<li >
      <img src="https://www.ouinolanguages.com/assets/French/vocab/8/images/pic7.jpg"  width='700'>
      
    </li>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
