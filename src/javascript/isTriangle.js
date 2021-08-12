var inputAngle1 = document.querySelector("#input-angle1")
var inputAngle2 = document.querySelector("#input-angle2")
var inputAngle3 = document.querySelector("#input-angle3")
var checkBtn = document.querySelector(".check")
var divOutput = document.querySelector("#output");

divOutput.style.display = "none";

function checkTriangleSum(){
    divOutput.style.display = "block";
    
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