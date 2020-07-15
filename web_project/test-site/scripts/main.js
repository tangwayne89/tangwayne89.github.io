var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/qf_logo.JPG') {
      myImage.setAttribute ('src','images/fake_logo.png');
    } else {
      myImage.setAttribute ('src','images/qf_logo.JPG');
    }
}

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Quantitative Finance is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Quantitative Finance is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }