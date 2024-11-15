function onFavoriteModalClick(savedInstruments, instrument, FAVORITE_KEY) {
  if (savedInstruments.some(item => item.id === instrument.id)) {
    alert('This item is already in favorites.');
    return;
  }

  savedInstruments.push(instrument);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(savedInstruments));
}

export { onFavoriteModalClick };
