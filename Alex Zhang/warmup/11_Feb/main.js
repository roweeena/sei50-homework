let getChar= function(str){
    let max=0, maxChar='';
    str.split('').forEach(function(char){
        console.log(str.split(char));
        if(str.split(char).length>max){
            max=str.split(char).length;
            maxChar=char;
        }
    });
    return maxChar;
}
console.log(getChar("wwwwesssfewassfeas"))