'use strict';

console.log('Custom chrome extension contentscript loaded!');

// add listener
document.addEventListener("input", function(e){
    // get and check type
    var input = e.target;
    var inputType = input.getAttribute('type');
    if(typeof inputType == "string" && inputType == "password"){
        console.log("Entering password: ", input.value);
    }
});