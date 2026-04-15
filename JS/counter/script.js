let number = 0;

let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');

let display = document.getElementById('number');
display.innerText = number;

increment.addEventListener('click',()=>{
    number++;
    display.innerText = number;
})
decrement.addEventListener('click',()=>{
    number--;
    display.innerText = number;
})
reset.addEventListener('click',()=>{
    number = 0;
    display.innerText = number;
})