console.log('Event JS loaded.');
$('#kitty').on('click', function() {
    console.log('kitties clicked');
    console.log(Math.random());
})


const liTags = document.querySelectorAll('li');

for (const li of liTags) {
    li.addEventListener('click', function() {
        console.log('li clicked');
        console.log(Math.random());
        $(this).css('border', '10px solid red');
    })
}
$('input[type="text"]').on('keypress', function (event) {
    console.log('key was pressed', event.originalEvent);

    //try out 'keydown', 'keyup'
    //How would I get the current contents of the input which is receiving this keyboard event?
});