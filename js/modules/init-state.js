function initState(state = {}) {

  const custom = document.querySelector('.custom'),
        customInfo = custom.querySelector('.custom-info'),
        inputs = customInfo.querySelectorAll('input:not([type="radio"])'),
        radioInputs = customInfo.querySelectorAll('input[type="radio"]'),
        select = customInfo.querySelector('select'),
        textarea = customInfo.querySelector('textarea');

  inputs.forEach(input => {
    const attrName = input.name;
    input.value = '';
    state[attrName] = input.value;
  });

  radioInputs[0].checked = true;

  radioInputs.forEach(input => {
    const attrName = input.name;
    if (input.checked) {
      state[attrName] = input.value;
    }
  });

  select.selectedIndex = 0;
  state[select.name] = select.options[select.selectedIndex].value;

  textarea.value = '';
  state[textarea.name] = textarea.value;

}

export default initState;