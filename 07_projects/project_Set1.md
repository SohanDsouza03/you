# projects related to dom

## project link by hitesh in stackblitz
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-p8ggubhq?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)


#solution code 

#project 1

``` javascript
console.log("SOHAN DSOUZA")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (sooo) {
    console.log(sooo);
    console.log(sooo.target);
    if (sooo.target.id === 'grey') {
      body.style.backgroundColor = sooo.target.id;
    }
    if (sooo.target.id === 'white') {
      body.style.backgroundColor = sooo.target.id;
    }
    if (sooo.target.id === 'blue') {
      body.style.backgroundColor = sooo.target.id;
    }
    if (sooo.target.id === 'yellow') {
      body.style.backgroundColor = sooo.target.id;
    }
    // if (sooo.target.id === 'red') {
    //   body.style.backgroundColor = sooo.target.id;
    // }
  });
});


```


##  project 2 Solution

``` javascript
const form = document.querySelector('form');
//  this use case will give uh a empty
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the resu
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // results.innerHTML = `${height}`;
});

```
## project 3 solution code 

``` javascript

const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());  <--- this basically runs in inspect console
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

