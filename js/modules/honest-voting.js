function honestVoting(btnSelector, progressSelectorBarsSelector, cardsSelector, cardSelector, resultSelector) {

  const btnVote = document.querySelector(btnSelector);
    
  btnVote.addEventListener('click', () => {

    const progressBars = document.querySelectorAll(progressSelectorBarsSelector),
          cards = document.querySelector(cardsSelector),
          allCards = cards.querySelectorAll(cardSelector),
          results = cards.querySelectorAll(resultSelector);
    
    let firstResult = Math.floor(Math.random() * 90 + 1);
    let secondResult = Math.floor(Math.random() * (100 - firstResult + 1));
    let thirdResult = 100 - firstResult - secondResult;
    while(firstResult === 0 || secondResult === 0 || thirdResult === 0) {
      firstResult = Math.floor(Math.random() * 90 + 1);
      secondResult = Math.floor(Math.random() * (100 - firstResult + 1));
      thirdResult = 100 - firstResult - secondResult;
    }

    const arr = [firstResult, secondResult, thirdResult];
    const max = Math.max(...arr);

    progressBars.forEach((bar, ind) => {
      bar.style.height = arr[ind] + '%';
      if (arr[ind] === max) {
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

export default honestVoting;