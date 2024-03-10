let increment = document.getElementById("inc-btn")
let decrement = document.getElementById("dec-btn")
let reset  =document.getElementById("reset")
let count = 0;
increment.addEventListener("click",()=>{
    count++;
    updateCounter();

});

decrement.addEventListener("click",()=>{
    count--;
    updateCounter();
})
reset.addEventListener("click",()=>{
    count = 0;
    updateCounter();
})
let countValue = document.getElementById("value")


function updateCounter(){
    countValue.textContent = count;
}