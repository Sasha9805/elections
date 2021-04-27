function crimeVoting(btnSelector, progressSelectorBarsSelector, cardsSelector, cardSelector, resultSelector) {

  const btnVote = document.querySelector(btnSelector);

  btnVote.addEventListener('click', () => {

    const progressBars = document.querySelectorAll(progressSelectorBarsSelector),
          cards = document.querySelector(cardsSelector),
          allCards = cards.querySelectorAll(cardSelector),
          results = cards.querySelectorAll(resultSelector);

    let [firstResult, secondResult, thirdResult] = Array.from(results).map(item => item.textContent.slice(0, -1));

    if (firstResult == 0 && secondResult == 0 && thirdResult == 0) {
      return;
    }

    const arr = getArrOfResults(firstResult, secondResult, thirdResult);
    const max = Math.max(...arr);

    progressBars.forEach((bar, ind) => {
      bar.style.height = arr[ind] + '%';
      if (arr[ind] == max) {
        allCards[ind].classList.add('main-cards-item-active');
      } else {
        allCards[ind].classList.remove('main-cards-item-active');
      }
    });

    results.forEach((res, ind) => {
      res.innerHTML = arr[ind] + '%';
    });

  });

}

function getArrOfResults(firstResult, secondResult, thirdResult) {
  if (secondResult < 98) {
    const res = Math.floor(secondResult * 1.25);
    if (res >= 100) {
      secondResult = 98;
      firstResult = 1;
      thirdResult = 1;
    } else {
      const rest = 100 - res;
      secondResult = res;
      firstResult = Math.floor(Math.random() * rest);
      thirdResult = rest - firstResult;
    }
  }

  return [firstResult, secondResult, thirdResult];
}

export default crimeVoting;