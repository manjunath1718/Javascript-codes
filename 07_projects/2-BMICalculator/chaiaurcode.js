const form = document.querySelector('form');
console.log(form);
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please add valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please add valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    const message = document.querySelector('#message');
    if (bmi < 18.6) {
      message.innerHTML = `<h2>you're underweight</h2>`;
    } else if (bmi > 24.9) {
      message.innerHTML = `<h2>you're overrweight</h2>`;
    } else {
      message.innerHTML = `<h2>you're weight is normal</h2>`;
    }
  }
});
