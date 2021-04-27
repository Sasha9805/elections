import slider from './slider';

function changeStateByInput(state, customSelector, customInfoSelector, 
  inputsSelector, radioSelector, selectSelector, textareaSelector) {

  const custom = document.querySelector(customSelector),
        customInfo = custom.querySelector(customInfoSelector),
        inputs = customInfo.querySelectorAll(inputsSelector),
        radioInputs = customInfo.querySelectorAll(radioSelector),
        select = customInfo.querySelector(selectSelector),
        textarea = customInfo.querySelector(textareaSelector);

  inputs.forEach(input => {

    input.addEventListener('input', () => {

      const attrName = input.name;
      if (input.name === 'age') {
        input.value = input.value.replace(/\D/, '');
      }
      state[attrName] = input.value;

      console.log(state);

    });

  });

  radioInputs.forEach(input => {

    input.addEventListener('change', () => {

      const attrName = input.name;
      state[attrName] = input.value;

      console.log(state);

      slider(state, '.custom-style', '.skin', '.skin-color', '.prev', '.next', 'skinId');
      slider(state, '.custom-style', '.hair', '.hair-style', '.prev', '.next', 'hairId');
      slider(state, '.custom-style', '.clothes', '.clothes-style', '.prev', '.next', 'clothesId');

    });

  });

  select.addEventListener('change', () => {

    const attrName = select.name;
    state[attrName] = select.value;
    console.log(state);

  });

  textarea.addEventListener('input', () => {

    const attrName = textarea.name;
    state[attrName] = textarea.value;
    console.log(state);

  });

}

export default changeStateByInput;