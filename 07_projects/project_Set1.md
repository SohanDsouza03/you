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
