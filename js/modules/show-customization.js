function showCustomization() {

  const btnModal = document.querySelector('#popup-btn'),
        overlay = document.querySelector('.overlay'),
        main = document.querySelector('.main'),
        custom = document.querySelector('.custom');

  btnModal.addEventListener('click', () => {

    overlay.classList.add('animate__animated', 'animate__slideOutRight');

    main.classList.add('animate__animated', 'animate__slideOutLeft');

    for (let child of custom.children) {
      child.style.display = 'block';
    }

    setTimeout(() => {
      main.style.display = 'none';
      overlay.style.display = 'none';
      custom.style.display = 'flex';
      
      custom.classList.add('animate__animated', 'animate__slideInUp');
    }, 1000);
  });

}

export default showCustomization;