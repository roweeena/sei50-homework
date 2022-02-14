//let response;

const loadTrivia =function(){


    const xhr = new XMLHttpRequest(); //make a new instance
        
    xhr.onload = function(){
                        
        // Use JSON.parse() to turn the response
        //which is just a JSON STRING, not an object, into a real JS objects with keys and values
        const data = JSON.parse(xhr.response);
        window.response = data;

        console.log('data:', data.text);

        $('#output').append( `<p>${data.text}</p>` );
    } //xhr.onload()

    const userQuery = $('#userQuery').val();

    xhr.open('GET',`http://numbersapi.com/${ userQuery}?json`);
    xhr.send();

    console.log('This line runs BEFORE we get a response.... too soon!');

}


$(function(){
    console.log('Dom is loaded!');

    loadTrivia();

    $('#loadMore').on('click',function(){
        loadTrivia();
    })

});
