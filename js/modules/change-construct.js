function changeConstruct(state) {

  const custom = document.querySelector('.custom'),
        skin = custom.querySelector('.person-skin'),
        clothes = custom.querySelector('.person-clothes'),
        hair = custom.querySelector('.person-hair'),
        skinId = state.sex === 'Мужской' ? state.skinId : state.skinId + 3;

  skin.style.background = `url(./img/skin/skin-${skinId}.png) center no-repeat`;
  skin.style.backgroundSize = 'cover';

  clothes.style.background = `url(./img/clothes/construct/clothes-${state.clothesId}.png) center no-repeat`;
  clothes.style.backgroundSize = 'cover';

  hair.style.background = `url(./img/hair/construct/hair-${state.hairId}.png) center no-repeat`;
  hair.style.backgroundSize = 'cover';

}

export default changeConstruct;