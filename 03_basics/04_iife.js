// Immediately Invoked Function Expressions (IIFE)

// wrap the function with () brackets  an end call with a () bracket so that i can be called immediately after the window opens.

    (function chai(){
        // named IIFE
        console.log(`DB CONNECTED`);
    })();

// to print multiple iife in a single console we have use " ; " semicolon to end the iife function 

    ( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    } )('lokesh')  