function greet(name, callback){
    console.log("Hello,",name);
    callback();
}

function callback(){
    console.log("This is callback function")
}

greet("Harmik",callback);