function onCloseModal(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}

export { onCloseModal };
