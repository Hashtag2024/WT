const message = function(){
    console.log("Welcome to node js");
}
setTimeout(message, 10000); //Milliseconds

//callback function as an arrow function
setTimeout(()=>
{
    console.log("And now we are starting it");
},3000);