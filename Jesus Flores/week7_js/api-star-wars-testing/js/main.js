const fetchSearch = async function(url, results = true) {
	try {
		const result = await axios.get(url);
		results == true ? renderResults(result.data) : renderItem(result.data);
	} catch (error) {
		return error
	}
}

const renderResults = function(data) {
	const $render = $("#elements");
	$render.html("");
	data.results.forEach(val => {
		$render.append(
			`<ul class="show-element" data-url="${val.url}"> 
                    <li>
                    <h1 class="movie-title">${val.name}</h1>
                    </li>
                </ul>
                `

		);
	});
	getResult();

}

const renderItem = function(data) {
	console.log(data);
	const $render = $("#show-element");
	$render.html('')
	$render.append(
		`<ul class="show-element movie-title" data-url=""> 
                    <li>
                        Name: ${data.name}
                    </li>
                    <li>
                        Eye Color: ${data.eye_color}
                    </li>
                    <li>
                        Gender: ${data.gender}
                    </li>
                   <li>
                        Hair Color: ${data.hair_color}
                    </li>
                   <li>
                        Hieght: ${data.height}
                   </li>
                   <li>
                        Mass: ${data.mass}
                    </li>
                  <li>
                        Skin Color: ${data.skin_color}
                     </li>
                </ul>
                `
	);
}

const getResult = function() {
	$(".show-element").on("click", function() {
		const url = $(this).attr('data-url')
		fetchSearch(url, false);
	})
}


$(function() {
	const $search = $("#searchMovie").val();
	fetchSearch(`https://swapi.dev/api/people/`);
})