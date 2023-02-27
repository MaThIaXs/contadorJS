const incrementButton = document.getElementById('increment');
incrementButton.addEventListener("click", increment);

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener("click", decrement);

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;



function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        document.getElementById('currentNumber').style.color = "#FAF9F6";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = "red";
    }
}