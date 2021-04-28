function createCandidate(state, btnSelector, constructSelector, cardsSelector, activeClass) {

  const main = document.querySelector('.main'),
        custom = document.querySelector('.custom'),
        btnCreate = document.querySelector(btnSelector),
        mainCards = document.querySelector(cardsSelector);

  function createBox(activeClass, constructSelector) {
    const div = document.createElement('div');
    div.classList.add(activeClass);

    const photoCandidate = custom.querySelector(constructSelector).cloneNode(true);

    div.innerHTML = `
      <div class="candidate-block">
        <div class="photo photo-1"></div>
        <div class="result">
          <div class="result-count">0%</div>
          <div class="progress">
            <div class="progress-bar progress-bar-1"></div>
          </div>
        </div>
      </div>
      <div class="name">${state.wholeName}</div>
      <div class="age">${state.age} лет</div>
      Пол:
      <div class="sex">${state.sex}</div>
      Полит. взгляды:
      <div class="views">${state.politicOpinion}</div>
      Биография
      <div class="bio">${state.bio}</div>
    `;

    div.querySelector('.photo').replaceWith(photoCandidate);

    return div;
  }

  function showMainScreen() {
    custom.classList.remove('animate__slideInUp');
    main.classList.remove('animate__slideOutLeft');

    custom.classList.add('animate__slideOutUp');
    main.classList.add('animate__slideInLeft');

    setTimeout(() => {
      main.style.display = '';
      custom.style.display = '';
    }, 1000);
  }

  btnCreate.addEventListener('click', () => {

    const div = createBox(activeClass, constructSelector);
    mainCards.children[0].after(div);

    showMainScreen();

  });

}

export default createCandidate;