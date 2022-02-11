console.log('main.js LOADED')
console.log('jQuery', jQuery);
console.log('axios:', axios)


$(()=>{

    console.log('DOM READY')

    axios.get('/uptime.json')
        .then((res)=>{
            console.log('uptime', res.data)
            $('#uptime').html(res.data.output)
        })
        .catch((err)=>{
            console.log('Uptime AJAR error:', err)
        })

    // CPU HOG
    axios.get('/cpuhog')
        .then((res) =>{
            console.log('cpuhog', res)
            $('#hog').html(res.data.hog)
        })
        .catch((err)=>{
            console.log('CPU Hog AJAX error:', err)
        })

        // INDEX OF MESSAGES (i.e. results of Message.all)
    axios.get('/messages')
        .then( (res) =>{
            console.log('messages data', res.data)
            $('#messagesIndex').html('')
            res.data.forEach((message)=>{
                // console.log(message)
                $('#messagesIndex').append(`
                    <li>${message.content} (${message.user_id})</li>
                `)
            }); // each message
        })
        .catch((err)=>{
            console.log('CPU Hog AJAX error:', err)
        })
});