document.querySelector('button').addEventListener('click', onSubmit);

window.onload = function() {
  if (localStorage.length) {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === 'text')
        inputs[i].setAttribute('value', localStorage[inputs[i].name]);
      else {
        if (localStorage[inputs[i].name] === 'true')
          inputs[i].setAttribute('checked', localStorage[inputs[i].name]);
      }
    }
  }
};

function onSubmit() {
  let inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'text')
        localStorage.setItem(inputs[i].name, inputs[i].value);
    else
        localStorage.setItem(inputs[i].name, inputs[i].checked);
  }
}