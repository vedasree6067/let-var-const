/* var is globally scoped */

var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello! from inside of function";
        console.log(hello);
        //console.log(greeter); can be accessable
        }
    newFunction();
    console.log(greeter);
    
/*Here, greeter is globally scoped because 
    it exists outside a function while hello is function scoped */

/*let is block scoped and can be updates but not re-declare*/

let greeting = "say Hi";
// greeting = "hey" ; this not possible
//let greeting = "heyy there";  not possible 'greeting' has already been declared
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);
        let greeting = "say Hey instead";// possible
        console.log(greeting);
    }
   console.log(greeting); 
    /* hello cant be defined outside the scope*/

/* const are block scoped and cannot be updated or re-declared */
   
const greet = "say Hi";
//greeting = "say Hello instead"; not possible
//const greeting = "say Hey"; not possible
const greetings = {
    message: "say How r u",
    times: 4
}
//greetings.message = "say Hw u dng";// possible
console.log(greetings);



/* Hoisting of const
Just like let, const declarations are hoisted to the top but are not initialized.

So just in case you missed the differences, here they are:

var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
While var and let can be declared without being initialized, const must be initialized during declaration.*/


