const btn = document.getElementById("btn");
const prompt_box = document.getElementById("prompt_box");
const promt_txt = document.getElementById("promt_txt");
const txt = document.getElementById("txt");
const num = document.getElementById("num");
let chancesTxt = document.getElementById("chancesTxt");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let number;
let chances = 3;
chancesTxt.innerHTML = "chances:- " + chances;
console.log(randomNumber);
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(num.value);
    chances--;
    chancesTxt.innerHTML = "chances:- " + chances;
    if(chances == 0){
        activateBox("Loss");
    }
    number = num.value;
    checkNum(number);
    num.value = "";
  
});


function checkNum(number) {
    if (number === randomNumber) {
        activateBox("Congratulations, you guessed it!");
   } else if (number > randomNumber) {
        txt.textContent = " Too low! Try again.";
    } else {
        txt.textContent = "To high! Try again.";
        console.log("else");
   }

    chancesTxt.textContent = "chances:" + chances;
 }


function activateBox(e){
    prompt_box.classList.add("active");
    promt_txt.innerHTML = "You" + e + "The Game";
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
function play(e){
    prompt_box.classList.remove("active");
    chances = 3;
    txt.innerHTML = "";
    chancesTxt.innerHTML = "chances:- " + chances;
}