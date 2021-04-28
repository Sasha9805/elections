import changeConstruct from './change-construct';

function slider(state, customStyleSelector, sliderSelector, sliderColorSelector,  
  prevSelector, nextSelector, attrName) {

  const customStyle = document.querySelector(customStyleSelector),
        slider = customStyle.querySelector(sliderSelector),
        sliderPrev = slider.querySelector(prevSelector),
        sliderNext = slider.querySelector(nextSelector),
        sliderColor = slider.querySelectorAll(sliderColorSelector),
        sex = state.sex;

  let slideIndex = attrName === 'skinId' ? 1 : sex === 'Мужской' ? 1 : 4;
  const slideEnd = attrName === 'skinId' ? sliderColor.length : sex === 'Мужской' ? 3 : 6;

  sliderPrev.addEventListener('click', () => {

    if (slideIndex === 1 || slideIndex === 4) {
      slideIndex = slideEnd;
    } else {
      slideIndex -= 1;
    }

    showSkinSlide(slideIndex);

    state[attrName] = slideIndex;

  });
  
  sliderNext.addEventListener('click', () => {

    if (slideIndex === slideEnd) {
      slideIndex = attrName === 'skinId' ? 1 : sex === 'Мужской' ? 1 : 4;
    } else {
      slideIndex += 1;
    }

    showSkinSlide(slideIndex);

    state[attrName] = slideIndex;

  });

  function showSkinSlide(index = slideIndex) {

    sliderColor.forEach(skin => {
      skin.style.display = 'none';
    });

    sliderColor[index - 1].style.display = 'block';

    state[attrName] = slideIndex;

    changeConstruct(state);

  }

  showSkinSlide();

}

export default slider;