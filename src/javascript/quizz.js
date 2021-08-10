const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["30°", "Isosceles triangle", "Equlateral triangle", "√3/4*a²", "30cm", "acute-angled", "3", "180°", "60°", "80°"];


function checkScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults);
}

checkBtn.addEventListener('click', checkScore);