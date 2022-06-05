//basic closure example
//Function along with his laxiacal scope  called closure
function outer() {
    var a = 10;
    function inner() {
        console.log( a );
    }
    return inner;
}
outer()()// second parenthesis use for call the inner function with one line

//alternative way to call the function
var closure = outer(); //as outer returning  a function so the var closure is a function;
closure()
