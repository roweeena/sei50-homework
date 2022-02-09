const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
console.log('Flickr Search')

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest';

// https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084

// Params: 
// method=flickr.photos.search
// method, api_key - required 
// format JSON for specifying format
// text - specify the search query 
// nojsoncallback=1

// 

$(()=>{
    let userHistory = []

    const home = () => {
        $(".output").html('homepage')

    }


    const fetchResults = (userInput)=>{
        $(".output").html('')
        axios.get(FLICKR_BASE_URL, {
            params: {
            //  axios will combine these key-value pairs into the querystring for us
                method:'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                format:'json',
                nojsoncallback:1,
                text:userInput
            }
        })
        .then((res)=>{
            function callShowResults(a,page){ // lol 
                showResults(a.server,a.id,a.secret, 'w', a.owner, page)
            }
            const photoOutput = res.data.photos.photo
            outputCounter = 0
            photoOutput.forEach((a) => {
                if(outputCounter < 20){
                    callShowResults(a, 1)
                    outputCounter += 1
                } else if (outputCounter < 40 && outputCounter >= 20){
                    callShowResults(a, 2)
                    outputCounter += 1
                } else if (outputCounter < 60 && outputCounter >= 40){
                    callShowResults(a, 3)
                    outputCounter += 1    
                } else if (outputCounter < 80 && outputCounter >= 60){
                    callShowResults(a, 4)
                    outputCounter += 1
                } else if (outputCounter < 100 && outputCounter >= 80){
                    callShowResults(a, 5)
                    outputCounter += 1
                }
            })
            $(".output").append(`
                <div class="pages">
                    <button class="pageButton" id="pageFirst">1</button>
                    <button class="pageButton" id="pageSecond">2</button>
                    <button class="pageButton" id="pageThird">3</button>
                    <button class="pageButton" id="pageFourth">4</button>
                    <button class="pageButton" id="pageFifth">5</button>
                </div>
            `)
            function findPage(page){

            } 
            $('#pageFirst').on('click', () => {
                console.log('clicked')
                $('.1').show()
                $('.2').hide()
                $('.3').hide()
                $('.4').hide()
                $('.5').hide()
            })
            $('#pageSecond').on('click', () => {
                console.log('clicked')
                $('.1').hide()
                $('.2').show()
                $('.3').hide()
                $('.4').hide()
                $('.5').hide()
            })
            $('#pageThird').on('click', () => {
                console.log('clicked')
                $('.1').hide()
                $('.2').hide()
                $('.3').show()
                $('.4').hide()
                $('.5').hide()
            })
            $('#pageFourth').on('click', () => {
                console.log('clicked')
                $('.1').hide()
                $('.2').hide()
                $('.3').hide()
                $('.4').show()
                $('.5').hide()
            })
            $('#pageFifth').on('click', () => {
                console.log('clicked')
                $('.1').hide()
                $('.2').hide()
                $('.3').hide()
                $('.4').hide()
                $('.5').show()
            })
            // console.log(photoOutput)
            $('img').on('click',(ev)=>{
                // console.log(ev.target.id)
                window.open(`https://www.flickr.com/people/${ev.target.id}`)
            })
        })
        .catch((err)=>{
            console.log('AJAX Search Error', err)
        })
    }
    const showResults = (serverId, id, secret, sizeSuffix, owner, page) => {
        $(".output").append(`
            <img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_${sizeSuffix}.jpg" id="${owner}" class=${page}> 
        `)
        $('.2').hide()
        $('.3').hide()
        $('.4').hide()
        $('.5').hide()
    }

    $('#searchForm').on('submit', (ev) => {
        ev.preventDefault();
        const query = $('#userQuery').val()
        fetchResults(query);
        userHistory.push(query)
    })
    $("#back").on('click', (e) =>{
        if (userHistory.length===0){
            home()
        } else{
            userHistory.pop()
            let dest = userHistory[userHistory.length - 1]
            console.log(dest)
            fetchResults(dest)
        }
    })
    $("#goHome").on('click',(e)=>{
        home()
    })
    
    
})



// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

// https://www.flickr.com/services/api/misc.urls.html