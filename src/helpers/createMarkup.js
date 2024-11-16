function createMarkup(arr, list, pageType) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(({ id, img, name }) => {
        return `
       <li data-id='${id}' class='js-card'>
      <img src="${img}" alt="${name}" width='300'>
      <h2>${name}</h2>
      
      <p ><a class='js-info' href='#'>More information</a></p>
${
  pageType === 'basket'
    ? "<button class='favoriteBtn'>Add to favorite</button><button class='removeFromBasketBtn'>Remove from basket</button>"
    : ''
}
${
  pageType === 'favorite'
    ? "<button class='removeFavoriteBtn'>Remove from favorites</button><button class='basketBtn'>Add to basket</button>"
    : ''
}
${
  pageType === 'main'
    ? "<button class='favoriteBtn'>Add to favorite</button><button class='basketBtn'>Add to basket</button>"
    : ''
}


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
