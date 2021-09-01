var inputAngle1 = document.querySelector("#input-angle1")
var inputAngle2 = document.querySelector("#input-angle2")
var inputAngle3 = document.querySelector("#input-angle3")
var checkBtn = document.querySelector(".check")
var divOutput = document.querySelector("#output");

divOutput.style.display = "none";

function checkTriangleSum(){
    divOutput.style.display = "block";
    if(inputAngle1.value === "" || inputAngle2.value === "" || inputAngle3.value ===""){
        divOutput.innerText = "Please fill the Box to proceed";
    }
    else if(Number(inputAngle1.value) < 0 || Number(inputAngle2.value) < 0 || Number(inputAngle3.value) < 0){
        divOutput.innerText = "Enter valid angle";
    }
    else { 
        var triangleSum = Number(inputAngle1.value) + Number(inputAngle2.value)
        + Number(inputAngle3.value);
        if(triangleSum === 180){
            divOutput.innerText = "Wohooo! These angle will make a triangle🔺"
        }
        else {
            divOutput.innerText = "oh no! These angle doesn't make a triangle😞" 
        }
    }
}

checkBtn.addEventListener('click', checkTriangleSum);