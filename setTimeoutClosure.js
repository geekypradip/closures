    /*function outer() {
        for ( var i = 0; i <= 5; i++ ){
            setTimeout( () => {  //setTimeout callBack addressing the  I variable not the value of I. so after complete the exicution of Loop i became 6,then  after Timer complete task queue will enqueue and event loop will push the callback into exicution stack during thing time , because of closure I value is 6.
                console.log(i)
            },i*1000)
        }
        console.log("if you think I will wait for settimeout You are wrong!!!")
    }
    outer()*/

//The above programme when we are running it printing the 6 for each time because "Exicution stack and asyincronous browser api and variable function scope"




//here are Two way we can encounter this issue .
//  --* By changing the variable scope from functional scope to block Scope.

                /*function outer() {
                    for ( let i = 0; i <= 5; i++ ){
                        setTimeout( () => {  //just because of let keyword we are changing i from functional scope to block scope. so everytime setTimeOut callback reffering to  a new value.
                            console.log(i)
                        },i*1000)
                    }
                    console.log("if you think I will wait for settimeout You are wrong!!!")
                }
                outer()*/



// ---* If we not change the var then other way we can do I.e wrap the whole setTimeOut into another function


function outer() {
    for ( var i = 0; i <= 5; i++ )
    {
        function inner(i) {
            setTimeout( () => {
                console.log(i)
            },i*1000)
        }
                inner(i)
    }


}
outer()
