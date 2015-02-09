'use strict';

console.log('Custom chrome extension contentscript loaded!');

function addListenerToInput(input){
    // get and check type
    var inputType = input.getAttribute('type');
    if(typeof inputType == "string" && inputType == "password"){
        // add listener
        input.addEventListener("input", function(e){
            console.log("Entering password = ", e.currentTarget.value);
        });
    }
}

// get all inputs on loop
var allInputs = document.getElementsByTagName('input');
for (var i = 0; i < allInputs.length; i++) {
    addListenerToInput(allInputs[i]);
}




