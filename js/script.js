"use strict";
import showCustomization from './modules/show-customization';
import initState from './modules/init-state';
import slider from './modules/slider';
import createCandidate from './modules/create-candidate';
import changeStateByInput from './modules/change-state-by-input';
import honestVoting from './modules/honest-voting';
import crimeVoting from './modules/crime-voting';
import reset from './modules/reset';

window.addEventListener('DOMContentLoaded', () => {

  showCustomization();

  const cardState = {};
  initState(cardState);
  console.log(cardState);

  changeStateByInput(cardState, '.custom', '.custom-info', 'input:not([type="radio"])', 'input[type="radio"]', 
    'select', 'textarea');

  slider(cardState, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');
  slider(cardState, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');
  slider(cardState, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');

  createCandidate(cardState, '#ready', '.construct', '.main-cards');

  honestVoting('#voting', '.progress-bar', '.main-cards','.main-cards-item', '.result-count');
  crimeVoting('#crime', '.progress-bar', '.main-cards','.main-cards-item', '.result-count');

  reset(cardState, '#reset', '.main-cards', '.main-cards-item', '.result-count', '.progress-bar');

});