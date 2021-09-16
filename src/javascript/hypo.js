var baseLength = document.querySelector("#base")
var heightLength = document.querySelector("#height")
var hypBtn = document.querySelector("#check-hypo")
var outputHypo = document.querySelector("#output-hypo")


hypBtn.addEventListener('click', function findHypotenuse() {
    var base = Number(baseLength.value);
    var height = Number(heightLength.value);
    if(baseLength.value ==="" || heightLength.value ===""){
        outputHypo.innerText = "Fill in the boxes to proceed";
    }
    else if(base>0 && height>0){
        var hypoSqr = base*base + height*height;
        var hypotenuse = Math.sqrt(hypoSqr);
        outputHypo.innerText = hypotenuse + " cm";
    }
    else {
        outputHypo.innerText = "Please enter correct length";
    }
})
