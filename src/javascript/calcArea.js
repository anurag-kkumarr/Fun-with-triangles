const calArea = document.querySelectorAll(".calculateArea")
//console.log(calArea)
const calAreaBlock = document.querySelectorAll(".calculateAreaBlock");

const options = document.forms[0].elements;
console.log(options)

options[0].addEventListener('change',showOrHideBlock(calAreaBlock, 0, 1, 2, 3)
)
options[1].addEventListener('change',showOrHideBlock(calAreaBlock, 1, 0, 2, 3))

options[1].addEventListener('change',showOrHideBlock(calAreaBlock, 1, 0, 2, 3))

options[1].addEventListener('change',showOrHideBlock(calAreaBlock, 1, 0, 2, 3))

options[1].addEventListener('change',showOrHideBlock(calAreaBlock, 1, 0, 2, 3))





function showOrHideBlock(block, showIndex1, hidIndex1, hidIndex2, hidIndex3){
    block[showIndex1].style.display = "block"
    block[hidIndex1].style.display = "none"
    block[hidIndex2].style.display = "none"
    block[hidIndex3].style.display = "none"
}

