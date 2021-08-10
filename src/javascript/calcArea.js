const calArea = document.querySelectorAll(".calculateArea");
//console.log(calArea)
const calAreaBlock = document.querySelectorAll(".calculateAreaBlock");
const showArea = document.querySelectorAll(".show-area");

const inputOption1 = document.querySelectorAll(".input-option1");
console.log(inputOption1);
const inputOption2 = document.querySelectorAll(".input-option2");
console.log(inputOption2);
const inputOption3 = document.querySelector(".input-option3")
const areaBtn1 = document.querySelector("#area-btn1");
console.log(areaBtn1);

const options = document.forms[0].elements;
console.log(options)

options[0].addEventListener('change',(e)=>{
    e.preventDefault();
    showOrHideBlock(calAreaBlock, 0, 1, 2, 3);
}
)
options[1].addEventListener('change', ()=>{showOrHideBlock(calAreaBlock, 1, 0, 2, 3)})

options[2].addEventListener('change',()=>{showOrHideBlock(calAreaBlock, 2, 0, 1, 3)})

options[3].addEventListener('change',()=>{showOrHideBlock(calAreaBlock, 3, 0, 1, 2)})



function showOrHideBlock(block, showIndex1, hidIndex1, hidIndex2, hidIndex3){
    block[showIndex1].style.display = "block"
    block[hidIndex1].style.display = "none"
    block[hidIndex2].style.display = "none"
    block[hidIndex3].style.display = "none"
}

areaBtn1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("clicked");
    const baseLength = Number(inputOption1[0].value);
    const heightLength = Number(inputOption2[0].value);
    showArea[0].innerText = (baseLength*heightLength)/2;
})

