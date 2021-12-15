const askSimon = (input) => {
    if(input[input.length -1] === "?") {    
        console.log("Sure");
    }
    else if(input === input.toUpperCase() && input !== "") {
        console.log("Whoa Chill out");
    }
    else if(input===""){
        console.log("Fine be that way!")
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
