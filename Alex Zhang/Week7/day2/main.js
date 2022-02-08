const fetchSearchResults = function(searchText){
    console.log('fetchSearchResults():', searchText);
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=aWLwuWGufdvnlQltVswgLW9v0fqgVbSd&q=${searchText}&limit=25&offset=0&rating=g&lang=en`)
        .then(function(res){
            console.log('Success!',res.data);
            renderSearchResults(res.data);
        })
        .catch(function(err){
            console.log('Problem',err);
        });
};
const renderSearchResults=function(data){
    console.log('renderSearchResults()',data);
    const $output = $('#output');
    $output.html(data.images.url)
    }
$(function(){
    $('#userQuery').focus(); // put the cursor in the input
    $('#searchForm').on('submit',function(ev){
        ev.preventDefault();
        console.log('Form submitted!');
        const query = $('#userQuery').val();
        fetchSearchResults(query);
    });
});