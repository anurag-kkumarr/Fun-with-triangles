const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["30°", "Isosceles triangle", "Equlateral triangle", "√3/4*a²", "30cm", "acute-angled", "3", "180°", "60°", "80°"];
outputDiv.style.display = "none";

function checkScore(){
    console.log("clicked");
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your score is " + score;
    

checkBtn.addEventListener('click', checkScore);