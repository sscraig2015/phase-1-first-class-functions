function receivesAFunction(postRun) {
   postRun(); 
}


function returnsANamedFunction() {
    
     return function postBreakfast() {}
        
    
}

function returnsAnAnonymousFunction() {
     return function () {}
}