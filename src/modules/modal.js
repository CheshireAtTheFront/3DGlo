const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth > 768) {
        modal.style.display = 'block';
        modalContent.style.opacity = '.5';
        setTimeout(() => {
          modalContent.style.opacity = '1';
        }, 120);
      } else {
        modal.style.display = 'block';
      }
    })
  })

  closeBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      modalContent.style.opacity = '.5';
      setTimeout(() => {
        modalContent.style.opacity = '0';
        modal.style.display = 'none';
      }, 120);
    } else {
      modal.style.display = 'none';
    }
  })

}

export default modal