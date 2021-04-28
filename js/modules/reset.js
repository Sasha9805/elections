import initState from "./init-state";
import slider from './slider';

function reset(state, btnSelector, customSelector, 
  mainSelector, cardsWrapperSelector, cardsSelector, resultSelector, progressBarSelector) {

  const btnReset = document.querySelector(btnSelector);

  function resetCards(cardsWrapperSelector, cardsSelector, resultSelector, progressBarSelector) {

    const cards = document.querySelectorAll(cardsSelector);
    cards[1].remove();

    const cardsWrapper = document.querySelector(cardsWrapperSelector),
          results = cardsWrapper.querySelectorAll(resultSelector),
          progressBars = cardsWrapper.querySelectorAll(progressBarSelector);

    results.forEach(res => {
      res.innerHTML = '0%';
    });

    progressBars.forEach(bar => {
      bar.style.height = '';
    });

  }

  function resetCustomStyles(customSelector, mainSelector) {

    const custom = document.querySelector(customSelector),
          main = document.querySelector(mainSelector);

    custom.classList.remove('animate__slideOutUp');
    main.classList.remove('animate__slideInLeft');

    custom.classList.add('animate__slideInUp');
    main.classList.add('animate__slideOutLeft');

    setTimeout(() => {
      main.style.display = 'none';
      custom.style.display = 'flex';
    }, 1000);

  }

  btnReset.addEventListener('click', () => {

    resetCards(cardsWrapperSelector, cardsSelector, resultSelector, progressBarSelector);

    initState(state);

    slider(state, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');
    slider(state, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');
    slider(state, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');
    console.log(state);

    resetCustomStyles(customSelector, mainSelector);

  });

}

export default reset;