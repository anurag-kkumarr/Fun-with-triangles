var baseLength = document.querySelector("#base")
var heightLength = document.querySelector("#height")
var hypBtn = document.querySelector("#check-hypo")
var outputHypo = document.querySelector("#output-hypo")

console.log(baseLength)
console.log(heightLength)
console.log(hypBtn)


hypBtn.addEventListener('click', function findHypotenuse( a, b ) {
    console.log("clicked")
    var hypoSqr = Number(baseLength.value)*Number(baseLength.value) + Number(heightLength.value)*Number(heightLength.value)
    var hypotenuse = Math.sqrt(hypoSqr)
    outputHypo.innerText = hypotenuse;
})
