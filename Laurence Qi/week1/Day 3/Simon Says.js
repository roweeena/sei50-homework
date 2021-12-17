const askSimon = (input) => {
    if(input.endsWith("?")) {    
        console.log("Sure");
    }
    else if(input===""){
        console.log("Fine be that way!")
    }
    else if(input === input.toUpperCase()) {
        console.log("Whoa Chill out");
    }
    else{
        console.log("Whatever")
    }
}

//tests
askSimon("What is the day?");
askSimon("HELLO YOU PRICK");
askSimon("");
askSimon("kfajsdfj asjfadsjl;");