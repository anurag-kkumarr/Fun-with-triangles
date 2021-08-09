var inputAngle1 = document.querySelector("#input-angle1")
var inputAngle2 = document.querySelector("#input-angle2")
var inputAngle3 = document.querySelector("#input-angle3")
var checkBtn = document.querySelector(".check")
var divOutput = document.querySelector("#output");



console.log(inputAngle1)
console.log(inputAngle2)
console.log(inputAngle3)
console.log(checkBtn)


function checkTriangleSum(){
    
    var triangleSum = Number(inputAngle1.value) + Number(inputAngle2.value)
     + Number(inputAngle3.value);
    if(triangleSum === 180){
        divOutput.innerText = "Wohooo! These angle will make a triangle🔺"
    }
    else {
        divOutput.innerText = "oh no! These angle didn't make a triangle😞" 
    }
    console.log(triangleSum)
}

checkBtn.addEventListener('click', checkTriangleSum)