const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  console.log(closeBtn);
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth > 768) {
        modal.style.display = 'block';
        modal.style.transform = 'translateX(0)';
      } else {
        modal.style.display = 'block';
      }
      // modal.style.opacity = '1';
      // modal.style.transition = 'opacity 0 1 1s linear 0s';
      
    })
  })

  closeBtn.addEventListener('click', () => {
    // let animation = modal.classList.add('opacity');
    // modal.style.transform = "transition"
    // modal.style.transition = 'opacity 0 1 1s linear 0s';
    modal.style.display = 'none';
  })
}

export default modal