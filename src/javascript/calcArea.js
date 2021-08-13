const calArea = document.querySelectorAll(".calculateArea");
const calAreaBlock = document.querySelectorAll(".calculateAreaBlock");
const showArea = document.querySelectorAll(".show-area");

const inputOption1 = document.querySelectorAll(".input-option1");
const inputOption2 = document.querySelectorAll(".input-option2");
const inputOption3 = document.querySelectorAll(".input-option3");
const inputOption4 = document.querySelector(".input-option4");

const areaBtn1 = document.querySelector("#area-btn1");
const areaBtn2 = document.querySelector("#area-btn2");
const areaBtn3 = document.querySelector("#area-btn3");
const areaBtn4 = document.querySelector("#area-btn4")

for(index =0;index<4;index++){
    calAreaBlock[index].style.display = "none";
}


const options = document.forms[0].elements;

options[0].addEventListener('change',()=>{
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
    const heightLength = Number(inputOption1[1].value);
    showArea[0].innerText = "The area of Triangle is " + (baseLength*heightLength)/2 + " cm²";
})

areaBtn2.addEventListener('click',()=>{
    const side1 = Number(inputOption2[0].value);
    const side2 = Number(inputOption2[1].value);
    const side3 = Number(inputOption2[2].value);
    const semiPerimeter = (side1 + side2 + side3)/2;

    if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
        const areaTriangle = Math.sqrt(semiPerimeter*(semiPerimeter - side1)*(semiPerimeter-side2)*(semiPerimeter-side3));
        showArea[1].innerText = "The area of Triangle is "+ areaTriangle + " cm²";
    }
    else {
        showArea[1].innerText = "The triangle is not possible with these three sides."
    }
    
})

areaBtn3.addEventListener('click',()=>{
    const len1 = Number(inputOption3[0].value);
    const len2 = Number(inputOption3[1].value);
    const angle1 = Number(inputOption3[2].value);
    showArea[2].innerText = "The area of Triangle is " + (len1*len2* Math.sin(angle1* Math.PI/180))/2 + " cm²";
})

areaBtn4.addEventListener('click',()=>{
    const a= Number(inputOption4.value);
    showArea[3].innerText = "The area of Triangle is  " + (Math.sqrt(3)*a*a)/4 + " cm²";
})
